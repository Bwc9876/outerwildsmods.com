<script lang="ts">
	import type { Mod } from '$lib/helpers/api/get-mod-database';
	import LinkButton from '../button/link-button.svelte';
	import ModCard from '../mod-grid/mod-card.svelte';
	import type { ModsRequestItem } from 'src/routes/api/mods.json/+server';
	import PageSectionTitle from '../page-section/page-section-title.svelte';

	const maxChildModCount = 5;

	export let mod: Mod;
	export let modList: ModsRequestItem[];

	let childMods: ModsRequestItem[] = [];
	let addonsPath = '';
	$: {
		childMods = modList
			.filter((otherMod) => otherMod.parent === mod.uniqueName)
			.slice(0, maxChildModCount);
		addonsPath = `/mods/${mod.slug}/addons `;
	}
</script>

{#if childMods.length > 0}
	<PageSectionTitle id="child-mods">Addons</PageSectionTitle>
	<div class="flex flex-col gap-4">
		<LinkButton href={addonsPath}>All Addons...</LinkButton>
		{#each childMods as childMod (childMod.uniqueName)}
			<ModCard mod={childMod} />
		{/each}
		<LinkButton href={addonsPath}>All Addons...</LinkButton>
	</div>
{/if}
