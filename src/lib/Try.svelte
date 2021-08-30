<script>
	let text
	let src
	let theme
	let loading

	// $: src && (loading = true);

	function updateImg() {
		src = `/api/cartel?text=${text}`
		loading = true
	}
</script>

	<div class="grid grid-cols-2">
		<div>
			<img 
				src="{src}" 
				on:load={() => (loading = false)}
				class="{ loading ? 'filter blur-sm' : ''}"
			/>
		</div>
		<form on:submit|preventDefault={updateImg}>
			<input type="text" name="" bind:value={text} class="border">
		</form>
	</div>
