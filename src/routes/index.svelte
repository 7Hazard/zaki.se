<script lang="ts">
	import { slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Leo Zaki</title>
</svelte:head>

<main>
	<section>
		<img style="width: 10rem; height: 10rem;" src="leo.jpg" alt="Leo Zaki" />
	</section>

	<section in:slide={{ delay: 1000, duration: 800 }}>
		<h1 style="margin: 0.4em 0 0 0;">Leo Zaki</h1>
		<p style="margin: 1em 0; font-size: 1.1rem; text-align: center;">
			Software Developer in Stockholm
		</p>
		<a href="mailto:leo@zaki.se">leo@zaki.se</a>
		<a target="_blank" href="https://github.com/7Hazard">github.com/7Hazard</a>
		<a target="_blank" href="https://www.linkedin.com/in/leozaki">linkedin.com/in/leozaki</a>
	</section>
</main>

<style>
	main {
		height: 80%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	section {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	section a {
		margin: 0.2em 0;
	}
</style>
