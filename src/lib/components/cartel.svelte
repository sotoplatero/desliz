<script>
	export let img = {}
</script>

<svelte:head>
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="image">
	<meta property="og:url" content="{img.url}">
	<meta property="og:title" content="CartelKit - {img.text}">
    <meta property="og:image" content="{img.src}"  />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="{img.url}">
	<meta property="twitter:title" content="CartelKit - {img.text}">
    <meta property="twitter:image" content="{img.src}"  />
	<!-- <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"> -->

</svelte:head>

<div>
	<img 
		src={img.img}
		alt={img.text} 
		class="border rounded-xl w-full">
</div>