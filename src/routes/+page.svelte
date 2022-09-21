<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';

	// let cats: any[] = [];

	// const getData = () =>
	// 	Array.from(new Array(100), (val, index) => ({
	// 		id: index.toString(),
	// 		name: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
	// 	}));

	// cats = getData();
	// console.log(cats);
</script>

<div class="h-100vh flex">
	<div class="w-1/7vw">
		<div class="fixed">
			<Navbar />
		</div>
	</div>
	<div class="w-full">
		<Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
	</div>
</div>
