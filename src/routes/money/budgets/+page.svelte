<script lang="ts">
	import Card from "$lib/components/card.svelte";

    const model = {
		id: Date.now(),
        name: 'Budget ABC',
		description: 'Desc of Budget',
        budgetedAmount: 550.00,
        currentAmount: 523.21,
        percentOfTotal: 23
	};

	const models: any[] = [];

	[...Array(7).keys()].forEach((x) => models.push(model));
</script>

<Card title="Budgets">
	<div class="flex gap-2" slot="actions">
		<button
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
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="overflow-hidden sm:rounded">
                            <table class="min-w-full">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                                        <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Budgeted</th>
                                        <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Used</th>
                                        <th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">% of Total Budget</th>
                                        <th scope="col" class="relative px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Odd row -->
                                    <!-- <tr class="bg-white"> -->
                                        {#each models as row }
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{row.name}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{row.budgetedAmount}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{row.currentAmount}</td>
                                            <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{row.percentOfTotal}</td>
                                            <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                <a href="#" class="text-blue-600 hover:text-blue-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                    </svg>
                                                </a>
                                            </td>
                                        </tr>
                                        {/each}
                                    
                                    <!-- Even row --> 
                                    <!-- <tr class="bg-gray-50"></tr> -->
                                    <!-- <tr class="bg-gray-50">
                                        <td class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Vercel</td>
                                        <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">vercel.com</td>
                                        <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">vercel@example.com</td>
                                        <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Hosting</td>
                                        <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                            <a href="#" class="text-blue-600 hover:text-blue-900">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr> -->
                                    <!-- More people... -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</Card>
