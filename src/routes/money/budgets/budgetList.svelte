<script lang="ts">
	export let models: any;
</script>

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
					{#each models as row, i}
						<tr class={i % 2 != 1 ? 'bg-white' : 'bg-gray-50'}>
							<td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
								>{row.name}</td
							>

							<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"><input bind:value={row.budgetedAmount}/></td>
							

							<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{row.currentAmount}</td>
							<td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{row.percentOfTotal}</td
							>
							<td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
								<a href="#" class="text-blue-600 hover:text-blue-900">
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
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
