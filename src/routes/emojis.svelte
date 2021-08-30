<script>
	let codes = []
	for (var i = 12000; i >= 9000; i--) {
		codes = [...codes, i]
	}
</script>
{#each codes as code, index}
	<div class="text-lg">{code} - {@html `&#${code};`}</div>
{/each}