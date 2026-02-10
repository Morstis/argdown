<script lang="ts">
	import ArgdownHeader from './ArgdownHeader.svelte';

	import panzoom, { type PanZoom } from 'panzoom';
	import { Notification } from './notifications';
	let {
		initialView = 'map',
		withoutZoom = false,
		withoutMaximize = false,
		withoutLogo = false,
		withoutHeader = false
	} = $props();

	const availableViews = ['map', 'source'] as const;
	function isAvailableView(view: any): view is (typeof availableViews)[number] {
		return availableViews.includes(view);
	}

	let activeView = $derived.by(() => {
		if (!isAvailableView(initialView))
			throw Error(
				`Got "${initialView}" for initialView. Needs to be: ${availableViews.join(', ')}`
			);
		return initialView;
	});

	let isExpand = $state(false);

	// Bind to map-view slot and access the svg element
	let mapview: HTMLDivElement | undefined = $state();

	let svgMap: SVGElement | undefined = $derived.by(() => {
		if (!mapview?.children) return;
		const mapSlot = [...mapview.children].find((el) => el instanceof HTMLSlotElement);
		if (!mapSlot) return;
		return [...mapSlot.assignedElements()?.[0].children].find((el) => el instanceof SVGElement);
	});

	// Don't initiate panzoom if zoom is disabled.
	let panzoomInstance: PanZoom | undefined = $state();

	// Init panzoom once on the svg. It will be reflected in the host reference div, even if the views are switched, and svgMap becomes undefined.
	$effect(() => {
		if (panzoomInstance || !svgMap || withoutZoom) return;
		svgMap.style.width = '100%';
		panzoomInstance = panzoom(svgMap);
		panzoomInstance.pause();
	});

	// If the view is switched from expanded back to minimized, reset panzoom to default position and zoom level.
	$effect(() => {
		if (!isExpand) {
			panzoomInstance?.moveTo(0, 0);
			panzoomInstance?.zoomAbs(0, 0, 1);
		}
	});

	// Needed to retrigger the notifications, because panzoomInstance.isPaused() is not tracked by svelte 5. Probably try to fix this by writing a wrapper for panzoom that makes it reactive.
	let manualTrigger = $state(0);
	let notifications: Notification[] = $derived.by(() => {
		manualTrigger;
		if (withoutZoom) return [];
		if (panzoomInstance?.isPaused() && activeView === 'map') return [Notification.Zoom];
		return [];
	});

	function activatePanZoom() {
		if (!panzoomInstance) return;
		panzoomInstance.resume();
		manualTrigger++;
	}
	function deactivatePanZoom() {
		if (!panzoomInstance) return;
		panzoomInstance.pause();
		manualTrigger++;
	}
</script>

<div class="element" class:isExpand>
	<ArgdownHeader
		bind:activeView
		bind:isExpand
		{withoutMaximize}
		{withoutLogo}
		{withoutHeader}
		{notifications}
		{deactivatePanZoom}
	></ArgdownHeader>

	{#if activeView === 'map'}
		<div
			class="map-view"
			bind:this={mapview}
			onclick={activatePanZoom}
			onkeydown={(event) => {
				if (event.key === 'Enter') {
					event.preventDefault();
					activatePanZoom();
				}
			}}
			tabindex="0"
			role="button"
		>
			<slot name="map"></slot>
		</div>
	{:else}
		<div class="source-view">
			<slot name="source"></slot>
		</div>
	{/if}
</div>

<style>
	.map-view {
		overflow: hidden;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.source-view {
		overflow: auto;
		height: 100%;
		width: 100%;
	}
	.element {
		display: block;
		background-color: var(--argdown-bg-color, #fff);
		border: 1px solid var(--argdown-border-color, #eee);
		border-radius: 6px;
		padding: 10px;
	}

	div.isExpand {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1000000;
		margin: 0;
	}
</style>
