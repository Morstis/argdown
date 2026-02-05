<svelte:options customElement="argdown-map" />

<script lang="ts">
	import ArgdownHeader from './ArgdownHeader.svelte';

	import panzoom, { type PanZoom } from 'panzoom';

	let activeView: 'map' | 'source' = $state('map');
	let isExpand = $state(false);

	let {
		initialView = 'map',
		withoutZoom = false,
		withoutMaximize = false,
		withoutLogo = false,
		withoutHeader = false
	} = $props();

	let mapview: HTMLDivElement | undefined = $state();

	let svgMap: SVGElement | undefined = $derived.by(() => {
		const mapSlot = mapview?.firstChild as HTMLSlotElement;
		return mapSlot?.assignedElements()[0].firstChild as SVGElement;
	});

	let panzoomInstance: PanZoom | undefined = $derived.by(() => {
		if (!svgMap || withoutZoom) return;
		const instance = panzoom(svgMap);
		instance.pause();

		return instance;
	});

	// If the view is switched from expanded to normal, reset the pan and zoom level of the map. setTimeout, because this effect does only depend on isExpand and not panzoomInstance. panzoomInstance gets recreated every time the map is switched. See: https://svelte.dev/docs/svelte/$effect#Understanding-dependencies
	$effect(() => {
		if (!isExpand)
			setTimeout(() => {
				panzoomInstance?.moveTo(0, 0);
				panzoomInstance?.zoomAbs(0, 0, 1);
			}, 0);
	});

	let notifications = $derived(withoutZoom ? [] : ['Click to enable zoooom!']);

	function activePanZoom() {
		if (panzoomInstance) {
			panzoomInstance.resume();
			notifications = [];
		}
	}
</script>

<div class="element" class:isExpand>
	<ArgdownHeader bind:activeView bind:isExpand {notifications}></ArgdownHeader>

	{#if activeView === 'map'}
		<div class="map-view" bind:this={mapview} onclick={activePanZoom}>
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
	.element {
		display: block;
		background-color: var(--argdown-bg-color, #fff);
		border: 1px solid var(--argdown-border-color, #eee);
		border-radius: 6px;
		padding: 10px;
		margin: 2rem 0;
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
