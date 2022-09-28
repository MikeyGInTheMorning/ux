<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import BudgetList from './budgetList.svelte';

	const model = {
		id: Date.now(),
		name: 'Budget ABC',
		description: 'Desc of Budget',
		budgetedAmount: 550.0,
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
			<div class="flex">
				<BudgetList {models} />
			</div>
		</div>
	</section>
</Card>
