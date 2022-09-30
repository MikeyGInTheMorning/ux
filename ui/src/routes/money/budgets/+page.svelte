<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Buckets from './buckets.svelte';
	import BudgetTotal from './totalBudget.svelte';
	import Transactions from './transactions.svelte';
</script>

<div class="flex flex-col gap-5">
	<Card title="Money" isHeader={true} />
	<BudgetTotal />
	<Buckets />
	<Transactions />
</div>
