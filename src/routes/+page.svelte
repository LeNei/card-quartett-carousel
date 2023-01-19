<script lang="ts">
	import { swipe } from 'svelte-gestures';
	import CarCard from '$lib/components/CarCard.svelte';
	import cars from '$lib/constants/cars';

	const partialRotation = 360 / cars.length;
	let current = 0;

	function next() {
		current++;
	}

	function previous() {
		current--;
	}

	function handleSwipe(e: any) {
		if (e.detail.direction === 'left') {
			previous();
		} else {
			next();
		}
	}
</script>

<div class="h-screen w-full overflow-hidden grid place-items-center bg-zinc-900">
	<div class="relative w-[250px] md:w-[350px] h-[400px] md:h-[500px] carousel-container ">
		<div
			use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
			on:swipe={handleSwipe}
			class="carousel w-full h-full absolute"
			style="transform: rotateY({current * partialRotation}deg);"
		>
			{#each cars as car, i}
				<CarCard rotation={i * partialRotation} {...car} />
			{/each}
		</div>
		<div class="hidden md:block md:absolute -bottom-28 left-1/2 -translate-x-1/2 space-x-3">
			<button
				on:click={previous}
				class="bg-zinc-600 py-2 px-4 rounded-lg text-white hover:opacity-90 active:opacity-80"
				>Prev</button
			>
			<button
				on:click={next}
				class="bg-zinc-600 py-2 px-4 rounded-lg text-white hover:opacity-90 active:opacity-80"
				>Next</button
			>
		</div>
	</div>
</div>

<style>
	.carousel-container {
		perspective: 1000px;
	}
	.carousel {
		transform-style: preserve-3d;
		transition: transform 1s;
	}
</style>
