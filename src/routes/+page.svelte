<script lang="ts">
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import 'uno.css';
	import '@unocss/reset/tailwind.css';
	import Card from '$lib/components/card.svelte';

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
	<div class="w-85">
		<div class="fixed">
			<Navbar />
		</div>
	</div>
	<div class="w-full">
		<Card title="Menu Items">
			<div class="flex gap-2" slot="actions">
				<button class="bg-blue-400 hover:bg-blue-300 active:bg-blue-500 w-120px h-40px rounded raised">Add</button>
				<button class="bg-green-400 hover:bg-green-300 active:bg-green-500 w-120px h-40px  rounded raised">Save</button>
			</div>
			<div class="flex flex-col w-full" slot="body">
				grid goes here
				<!-- <Footer /> -->
			</div>
		</Card>
	</div>
</div>
