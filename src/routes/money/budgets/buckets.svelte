<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import budgetService, { type Budget as Bucket } from '$lib/services/budgetService';
	import { ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip } from 'chart.js';
	import { Pie } from 'svelte-chartjs';

	const models = budgetService.budgets;
	const totalBudget = budgetService.budgetTotal

	let data: any = {
		labels: [], //['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'],
		datasets: [
			{
				data: [], //[300, 50, 100, 40, 120],
				backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#AC64AD'],
				hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#DA92DB']
			}
		]
	};

	budgetService.budgets.subscribe((updatedArray) => {
		data.labels = [];
		data.datasets[0].data = [];

		updatedArray.forEach((m: Bucket) => {
			data.labels.push(m.name);
			data.datasets[0].data.push(m.estimatedBudget);
		});
	});

	ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Card title="Buckets">
	<div class="flex gap-2" slot="actions">
		<button
			on:click={budgetService.addBudget}
			class="text-zinc-200 bg-blue-400 hover:bg-blue-300 active:bg-blue-500 w-120px h-40px rounded raised"
			>Add</button
		>
		<button
			class="text-zinc-200 bg-green-500 hover:bg-green-400 active:bg-green-600 w-120px h-40px  rounded raised"
			>Save</button
		>
	</div>
	<section class="text-gray-600" slot="body">
		<div class=" px-5 py-4 mx-auto">
			<div class="flex justify-evenly content-center">
				<!-- Pie -->
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div class="overflow-hidden sm:rounded">
							<Pie {data} options={{ responsive: true }} />
						</div>
					</div>
				</div>

				<!-- List -->
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div class="overflow-hidden sm:rounded">
							<table class="min-w-full">
								<thead class="bg-gray-50">
									<tr>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
											>Name</th
										>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
											>Budgeted</th
										>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
											>Used</th
										>
										<th
											scope="col"
											class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
											>% of Total Budget</th
										>
										<th scope="col" class="relative px-6 py-3">
											<span class="sr-only">Edit</span>
										</th>
									</tr>
								</thead>
								<tbody>
									{#each $models as row, i}
										<tr class={i % 2 != 1 ? 'bg-white' : 'bg-gray-50'}>
											<td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
												>{row.name}</td
											>

											<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
												><input type="number" bind:value={row.usedBudget} /></td
											>

											<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
												>{row.usedBudget}</td
											>
											<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
												>{((row.estimatedBudget/$totalBudget?.estimatedBudgetTotal ?? 1) * 100).toFixed(0)}</td
											>
											<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
												<button
													on:click={() => budgetService.removeBudget(row.id)}
													class="text-blue-600 hover:text-blue-900"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														class="w-4 h-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
														/>
													</svg>
												</button>
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</Card>
