<script lang="ts">
	import type { Car } from '$lib/constants/cars';

	interface PageData {
		car: Car;
	}
	/** @type {import('./$types').PageData} */
	export let data: PageData;
	const { car } = data;
</script>

<div class="flex flex-col">
	<img class="object-cover w-full h-full rounded-md overflow-hidden" alt="" src={car.img} />
	<h1 class="text-2xl font-bold text-center mt-5">{car.title}</h1>
	{#each car.description as line}
		<p class="mt-2">{line}</p>
	{/each}
</div>
