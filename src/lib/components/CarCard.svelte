<script lang="ts">
	import DetailBox from './DetailBox.svelte';
	import { carStatIcons } from '$lib/constants/icons';

	export let title: string;
	export let img: string;
	export let rotation: number;

	/*Info to be displayed*/
	export let ps: number;
	export let toHundred: number;
	export let length: number;
	export let maxKmh: number;
	export let cylinders: number;
	export let roundsPerMin: number;
</script>

<div
	class="w-[350px] h-[500px] absolute bg-white rounded-xl p-2"
	style="transform: rotateY({rotation}deg) translateZ(250px);"
>
	<div class="bg-zinc-700 h-full rounded-xl overflow-hidden">
		<h1
			class="mb-2 text-lg font-semibold text-white bg-zinc-800 shadow-lg w-fit py-1 px-3 rounded-md"
		>
			{title}
		</h1>
		<div class="w-full h-[200px]">
			<img class="object-cover w-full h-full" alt="" src={img} />
		</div>
		<div class="grid grid-cols-2 gap-4 p-5">
			<DetailBox icon={carStatIcons.maxKmh} title="max. km/h" value={maxKmh} />
			<DetailBox icon={carStatIcons.ps} title="PS" value={ps} />
			<DetailBox icon={carStatIcons.toHundred} title="0-100 km/h" value={toHundred + 's'} />
			<DetailBox icon={carStatIcons.roundsPerMin} title="Umdrehungen/min" value={roundsPerMin} />
			<DetailBox icon={carStatIcons.length} title="Länge/m" value={length} />
			<DetailBox icon={carStatIcons.cylinders} title="Zylinder" value={cylinders} />
		</div>
	</div>
</div>
