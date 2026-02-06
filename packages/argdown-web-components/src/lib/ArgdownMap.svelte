<svelte:options customElement="argdown-map" />

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
	} = $props<{
		initialView?: 'map' | 'source';
		withoutZoom?: boolean;
		withoutMaximize?: boolean;
		withoutLogo?: boolean;
		withoutHeader?: boolean;
	}>();

	let activeView: 'map' | 'source' = $state(initialView);
	let isExpand = $state(false);

	// Bind to map-view slot and access the svg element
	let mapview: HTMLDivElement | undefined = $state();

	let svgMap: SVGElement | undefined = $derived.by(() => {
		const mapSlot = mapview?.firstChild;
		if (!(mapSlot instanceof HTMLSlotElement)) return;
		return mapSlot.assignedElements()?.[0].firstChild as SVGElement;
	});

	// Don't initiate panzoom if zoom is disabled.
	let panzoomInstance: PanZoom | undefined = $state();

	// Init panzoom once on the svg. It will be reflected in the host reference div, even if the views are switched, and svgMap becomes undefined.
	$effect(() => {
		if (panzoomInstance || !svgMap || withoutZoom) return;
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

	// Needed to retrigger the notifiations, because panzoomInstance.isPaused() is not tracked by svelte 5. Probably try to fix this by writing a wrapper for panzoom that makes it reactive.
	let manuelTrigger = $state(0);
	let notifications: Notification[] = $derived.by(() => {
		manuelTrigger;
		if (withoutZoom) return [];
		if (panzoomInstance?.isPaused() && activeView === 'map') return [Notification.Zoom];
		return [];
	});

	function activatePanZoom() {
		if (!panzoomInstance) return;
		panzoomInstance.resume();
		manuelTrigger++;
	}
	function deactivatePanZoom() {
		if (!panzoomInstance) return;
		panzoomInstance.pause();
		manuelTrigger++;
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
		<div class="map-view" bind:this={mapview} onclick={activatePanZoom}>
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
