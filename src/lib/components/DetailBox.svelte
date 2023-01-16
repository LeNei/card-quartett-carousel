<script lang="ts">
	export let icon: string;
	export let title: string;
	export let value: number | string;
</script>

<div
	class="relative bg-zinc-400 border-white border-2 rounded-lg p-2 grid place-items-center shadow-lg"
>
	<div class="bg-white absolute top-1/2 -translate-y-1/2 -left-3 p-1 rounded-full">
		<img src={icon} alt="" class="w-5 h-5" />
	</div>
	<span class="text-xs font-light">{title}</span>
	<span class="font-semibold">{value}</span>
</div>
