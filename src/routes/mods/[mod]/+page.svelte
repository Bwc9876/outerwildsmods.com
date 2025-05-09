<script lang="ts">
	import PageLayout from '$lib/components/page-layout.svelte';
	import ModActions from '$lib/components/mod-info/mod-info.svelte';
	import Markdown from '$lib/components/markdown/markdown.svelte';
	import ParentMod from '$lib/components/mod-info/parent-mod.svelte';
	import ChildMods from '$lib/components/mod-info/child-mods.svelte';
	import { listedImageSize, websiteUrl } from '$lib/helpers/constants';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import type { ModsRequestItem } from 'src/routes/api/mods.json/+server';
	import type { ImageMap } from '$lib/helpers/api/get-image-map';

	export let data: PageData;
	const { modList } = data;

	let mod: ModsRequestItem | undefined;
	let readme: string | undefined;
	let imageMap: ImageMap;

	$: {
		mod = data.mod;
		readme = data.readme;
		imageMap = data.imageMap ?? {};
	}

	const getDescriptionTerminator = (modDescription: string) => {
		if (modDescription === '') {
			return '';
		}
		if (modDescription.endsWith('.')) {
			return ' ';
		}
		return '. ';
	};

	const getPageDescription = (modDescription = '', modName: string) =>
		`${modDescription}${getDescriptionTerminator(
			modDescription
		)}Download and install ${modName} mod for Outer Wilds using the Mod Manager.`;
</script>

<svelte:head>
	{#if mod}
		<title>{mod.name} - {mod.description}</title>
		<meta name="description" content={getPageDescription(mod.description, mod.name)} />
		<meta property="og:title" content={mod.name} />
		<meta property="og:description" content={mod.description} />
		<meta property="og:url" content="{websiteUrl}{$page.url.pathname}" />
		<link rel="canonical" href="{websiteUrl}{$page.url.pathname}" />
		<meta property="og:site_name " content="Outer Wilds Mods" />

		{#if mod.imageUrl}
			<meta property="og:image" content={mod.openGraphImageUrl} />
			<meta property="twitter:image" content={mod.openGraphImageUrl} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:image:width" content="{listedImageSize.width}px" />
			<meta property="og:image:height" content="{listedImageSize.height}px" />
			<meta name="theme-color" content="#ffab8a" />
		{/if}
	{/if}
</svelte:head>

<PageLayout>
	{#if mod}
		<div class="flex flex-col md:flex-row gap-4">
			{#if readme && mod.rawContentUrl}
				{#key mod.uniqueName}
					<Markdown {readme} {imageMap} rawContentUrl={mod.rawContentUrl} />
				{/key}
			{/if}
			<div class:wrapper={readme} class:flex-1={!readme} class="flex-0 md:w-52 mx-auto">
				<ModActions {mod} />
				<ChildMods {mod} {modList} />
				<ParentMod parentUniqueName={mod.parent} {modList} />
			</div>
		</div>
	{/if}
</PageLayout>
