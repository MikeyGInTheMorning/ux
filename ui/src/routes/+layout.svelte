<script lang="ts">
	import Navbar from '$lib/components/navbar.svelte';
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
</script>

<Navbar>
	<slot />
</Navbar>
