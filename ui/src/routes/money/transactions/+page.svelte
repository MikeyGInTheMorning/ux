<script lang="ts">
	import Card from '$lib/components/card.svelte';

	const model = {
		date: Date.now(),
		description: 'Transaction1',
		account: 'Card 1',
		amount: 45.23,
		bucket: '123'
	};

	const models: any[] = [];

	[...Array(100).keys()].forEach((x) => models.push(model));
</script>

<Card title="Transactions">
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
	<div class="flex flex-col w-full" slot="body">
		<table class="table-auto">
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Account</th>
					<th>Bucket</th>
					<th>Amount</th>
					<th>View</th>
				</tr>
			</thead>
			<tbody>
				{#each models as row}
					<tr>
						<td>{row.date}</td>
						<td>{row.description}</td>
						<td>{row.account}</td>
						<td>{row.bucket}</td>
						<td>{row.amount}</td>
						<td>actions</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Card>
