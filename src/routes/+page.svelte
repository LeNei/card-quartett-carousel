<script lang="ts">
	import CarCard from '$lib/components/CarCard.svelte';
	import cars from '$lib/constants/cars';
	const partialRotation = 360 / cars.length;
	let current = 0;
	function next() {
		current++;
	}
</script>

<div class="h-screen w-full grid place-items-center bg-zinc-900">
	<div class="relative mx-auto w-[350px] h-[500px] carousel-container ">
		<div
			on:click={next}
			class="carousel w-full h-full absolute"
			style="transform: rotateY({current * partialRotation}deg);"
		>
			{#each cars as car, i}
				<CarCard rotation={i * partialRotation} {...car} />
			{/each}
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
