<script lang="ts">
	import Footer from '$lib/components/theme/Footer.svelte'
	import Header from '$lib/components/theme/Header.svelte'

	import {title} from '$lib/config'

	import '../app.css'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="layout">
  <!-- Header -->
	<Header />

	<main class="mx-2">
		<div class="mx-auto max-w-3xl">
			<slot />
		</div>
	</main>

  <!-- Footer -->
	<Footer />
</div>