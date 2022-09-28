<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import Buckets from './buckets.svelte';
	import BudgetTotal from './budgetTotal.svelte';
</script>

<div class="flex flex-col gap-5">
	<Card title="Budgets" isHeader={true} />
	<BudgetTotal />
	<Buckets />
</div>
