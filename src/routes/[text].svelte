<script context="module">
    export async function load({page, fetch}) {

    	let {text} = page.params
    	const encodeText = encodeURIComponent(text.replace(/\s+/g,'-'))
    	const text = text.replace(/\s|\./g, ' ').replace(/\s+/g,' ')

    	const host = 'https://cartelkit.dsoto.dev'
		const res = await fetch(`/img/${encodeText}.png?${page.query.toString()}&data=true`)
		const img = await res.text()
		const src = `${host}/img/${encodeText}.png?${page.query.toString()}`
		const url = `${host}/${encodeText}?${page.query.toString()}`
		
		return { props: { 
			img: { text, img, src, url } 
		}}

	}
</script>

<script>
	import Cartel from '$lib/components/cartel.svelte'
	export let img	
</script>

<Cartel  {img}/>