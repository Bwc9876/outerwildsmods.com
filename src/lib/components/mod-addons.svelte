<script lang="ts">
	import type { ModsRequestItem } from 'src/routes/api/mods.json/+server';
	import ModGrid from './mod-grid/mod-grid.svelte';

	export let mod: ModsRequestItem;
	export let modList: ModsRequestItem[];
	export let tagList: string[];

	let addons: ModsRequestItem[] = [];

	$: {
		addons = modList.filter((otherMod) => otherMod.parent === mod?.uniqueName);
	}
</script>

{#if addons.length > 0}
	<ModGrid mods={addons} {tagList} />
{/if}
