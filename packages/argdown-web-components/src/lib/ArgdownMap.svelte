<svelte:options
	customElement={{
		tag: 'argdown-map',
		props: {
			kebab_initialView: { attribute: 'initial-view', type: 'String' },
			kebab_withoutZoom: { attribute: 'without-zoom', type: 'String' },
			kebab_withoutMaximize: { attribute: 'without-maximize', type: 'String' },
			kebab_withoutLogo: { attribute: 'without-logo', type: 'String' },
			kebab_withoutHeader: { attribute: 'without-header', type: 'String' }
		}
	}}
/>

<!--
This is only a wrapper for ArgdownMapComponent to allow backwards compability. The old properties were all kebab-case strings, which is not ideal. The new properties are camelCase and can be of the correct type (boolean for the without* props). TODO: In future versions, remove the kebab-case properties and the handleProp function.
-->

<script lang="ts">
	import ArgdownMapComponent from './ArgdownMapComponent.svelte';

	// Handle both camelCase and kebab-case props for backwards compatibility. If both are provided, camelCase takes precedence. Also parse boolean strings for both cases.
	function handleProp<T>(
		camelCaseValue: T | undefined,
		kebabCaseValue: string | undefined,
		defaultValue: T
	): T {
		if (camelCaseValue) {
			// Also parse boolean strings for camelsCase
			if (typeof camelCaseValue === 'string')
				return ['true', 'false'].includes(camelCaseValue)
					? JSON.parse(camelCaseValue)
					: camelCaseValue;
			return camelCaseValue;
		}
		if (!kebabCaseValue) return defaultValue;

		console.warn(
			'kebab-case for attributes is deprecated and will be removed in future versions. Consider using camelCase.'
		);
		if (['true', 'false'].includes(kebabCaseValue)) {
			return JSON.parse(kebabCaseValue) as T;
		}
		return kebabCaseValue as T;
	}

	// Props with type annotations
	let {
		initialView: camel_initialView,
		withoutZoom: camel_withoutZoom,
		withoutMaximize: camel_withoutMaximize,
		withoutLogo: camel_withoutLogo,
		withoutHeader: camel_withoutHeader,

		// Backwards compatible
		kebab_initialView,
		kebab_withoutZoom,
		kebab_withoutMaximize,
		kebab_withoutLogo,
		kebab_withoutHeader
	}: {
		initialView?: string;
		withoutZoom?: boolean;
		withoutMaximize?: boolean;
		withoutLogo?: boolean;
		withoutHeader?: boolean;

		// Backwards compatible
		kebab_initialView?: string;
		kebab_withoutZoom?: string;
		kebab_withoutMaximize?: string;
		kebab_withoutLogo?: string;
		kebab_withoutHeader?: string;
	} = $props();

	let initialView = $derived(handleProp(camel_initialView, kebab_initialView, 'map'));
	let withoutZoom = $derived(handleProp(camel_withoutZoom, kebab_withoutZoom, false));
	let withoutMaximize = $derived(handleProp(camel_withoutMaximize, kebab_withoutMaximize, false));
	let withoutLogo = $derived(handleProp(camel_withoutLogo, kebab_withoutLogo, false));
	let withoutHeader = $derived(handleProp(camel_withoutHeader, kebab_withoutHeader, false));
</script>

<ArgdownMapComponent {initialView} {withoutZoom} {withoutHeader} {withoutLogo} {withoutMaximize}>
	<slot name="map" slot="map"></slot>
	<slot name="source" slot="source"></slot>
</ArgdownMapComponent>
