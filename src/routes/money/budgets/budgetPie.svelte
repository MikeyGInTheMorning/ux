<script lang="ts">
	import { Pie } from 'svelte-chartjs';
	import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

	export let models: any;

	var data: any = {
		labels: ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
		datasets: [
			{
				data: [300, 50, 100, 40, 120],
				backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#AC64AD'],
				hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#DA92DB']
			}
		]
	};

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
	<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
		<div class="overflow-hidden sm:rounded">
			<Pie {data} options={{ responsive: true }} />
		</div>
	</div>
</div>
