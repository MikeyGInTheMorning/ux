<script lang="ts">
	import { fade, scale } from 'svelte/transition';

	export let title: string | undefined = undefined;
	export let isHeader = false;

	console.log(title);
</script>

<div class=" w-full p-5 " in:fade={{ duration: 250 }} out:fade={{ duration: 250 }}>
	<div class="flex flex-col rounded shadow-2xl p-5">
		{#if title !== undefined}
			<div class="flex justify-between w-full">
				<div class="mb-4 font-bold {isHeader ? 'text-2xl' : 'text-xl'}">{title}</div>
				<div>
					<slot name="actions" />
				</div>
			</div>
			{#if !isHeader}
				<hr />
			{/if}
		{/if}
		{#if !isHeader}
			<div class="flex flex-col w-full p-5 ">
				<slot name="body" />
			</div>
		{/if}
	</div>
</div>
