<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let display = false;
	onMount(() => {
		setTimeout(() => {
			display = true;
		}, 500);
	});
</script>

{#if display}
	<main in:fade>
		<slot />
	</main>
{/if}

<style>
	main {
		height: inherit;
	}
</style>
