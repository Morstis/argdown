<script>
	import GraphExample from './GraphExample.svelte';
	import SourceExample from './SourceExample.svelte';
	import BigExample from './BigExample.svelte';

	let dark = $state(false);
</script>

<main data-theme={dark ? 'dark' : 'light'}>
	<button onclick={() => (dark = !dark)}>{dark ? 'Light' : 'Dark'} Mode</button>
	<div>
		<h1>Default</h1>
		<argdown-map>
			<div slot="map">
				<GraphExample></GraphExample>
			</div>
			<div slot="source">
				<SourceExample></SourceExample>
			</div>
		</argdown-map>
	</div>

	<div>
		<h1>Without Header, Zoom and force map</h1>
		<argdown-map withoutHeader withoutZoom>
			<div slot="map">
				<GraphExample></GraphExample>
			</div>
			<div slot="source">
				<SourceExample></SourceExample>
			</div>
		</argdown-map>
	</div>
	<div>
		<h1>Without Header, Zoom and force source</h1>
		<argdown-map withoutHeader withoutZoom initialView="source">
			<div slot="source">
				<SourceExample></SourceExample>
			</div>
		</argdown-map>
	</div>
	<div>
		<h1>Without Maximize and Logo</h1>
		<argdown-map withoutMaximize withoutLogo>
			<div slot="map">
				<GraphExample></GraphExample>
			</div>
			<div slot="source">
				<SourceExample></SourceExample>
			</div>
		</argdown-map>
	</div>

	<div>
		<h1>Backwards compatibility for props</h1>
		<argdown-map without-maximize without-logo initial-view="source">
			<div slot="map">
				<GraphExample></GraphExample>
			</div>
			<div slot="source">
				<SourceExample></SourceExample>
			</div>
		</argdown-map>
	</div>
	<div>
		<h1>Full Big Example</h1>
		<BigExample></BigExample>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
	}
	main > div {
		padding: 1rem;
	}
	h1 {
		font-size: 1.5rem;
		margin: 1rem 0;
	}
	[data-theme='dark'] {
		background-color: #333;
		color: #eee;
	}
	button {
		font-size: 0.8rem;
		font-weight: bold;
		color: var(--argdown-button-font-color, #fff);
		background-color: var(--argdown-button-bg-color, #3e8eaf);
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		border: 0;
		transition: background-color 0.1s ease;
		box-sizing: border-box;
		border-bottom: 1px solid var(--argdown-button-border-bottom-color, #38809d);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
