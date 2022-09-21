<script lang="ts">
	export let title: string | undefined = undefined;

	console.log(title);
</script>

<div class=" w-full p-5 ">
	<div class="flex flex-col rounded shadow-2xl p-5">
		{#if title !== undefined}
			<div class="flex justify-between w-full">
				<div class="mb-4 font-bold text-2xl">{title}</div>
				<div>
					<slot name="actions" />
				</div>
			</div>
			<hr />
		{/if}
		<div class="flex flex-col w-full p-5 ">
			<slot name="body" />
		</div>
	</div>
</div>
