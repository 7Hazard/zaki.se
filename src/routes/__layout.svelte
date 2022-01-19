<script>
    import "../app.css"
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let display = false;
	onMount(() => {
		display = true;
	});
</script>

{#if display}
	<!-- <Header /> -->
	<!-- {#key $page} -->
	<main in:fade>
		<slot />
	</main>
	<!-- {/key} -->
	<!-- <Footer /> -->
{/if}

<style>
    
</style>
