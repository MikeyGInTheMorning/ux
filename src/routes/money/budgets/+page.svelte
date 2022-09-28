<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Buckets from './buckets.svelte';
	import BudgetList from './budgetList.svelte';
	import BudgetPie from './budgetPie.svelte';
	import BudgetTotal from './budgetTotal.svelte';

	const model = {
		id: Date.now(),
		name: 'Budget ABC',
		description: 'Desc of Budget',
		budgetedAmount: 550.0,
		currentAmount: 523.21,
		percentOfTotal: 23
	};

	const models: any[] = [];

	[...Array(7).keys()].forEach((x) => models.push({...model}));
</script>

<div class="flex flex-col gap-5">
	<Card title="Budgets" isHeader={true} />
	<BudgetTotal {models} />
	<Buckets {models} />
</div>
