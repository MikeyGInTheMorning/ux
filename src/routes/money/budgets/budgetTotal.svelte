<script lang="ts">
	import Card from '$lib/components/card.svelte';

	const model = {
		budgetTotal: 3500,
		current: 2215
	};
</script>

<Card title="Total Budget">
	<section slot="body">
		<div class="flex justify-center min- py-4 sm:px-6 lg:px-8">
			<div class="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 class="mt-6 text-xl font-extrabold text-center text-neutral-600">Budget Totals</h2>
			</div>

			<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div class="px-4 py-8 sm:px-10">
					<form class="space-y-6" action="#" method="POST">
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700">
								Total Budget
							</label>
							<div class="mt-1">
								<input
									bind:value={model.current}
									id="email"
									name="email"
									type="number"
									class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
								/>
							</div>
						</div>

						<div>
							<label for="password" class="block text-sm font-medium text-gray-700"> Used </label>
							<div class="mt-1">
								<input
									bind:value={model.current}
									id="password"
									name="password"
									type="number"
									class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
								/>
							</div>
						</div>
					</form>
					<!-- <div>
                        <button
                            type="btn"
                            class="mt-4 flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >Update</button
                        >
                    </div> -->
				</div>
			</div>
		</div>
	</section>
</Card>
