<script context="module">
	import getPattern from '$lib/pattern'
    export async function load({page, fetch}) {
		return {
			props: { pattern: getPattern() }
		}

    }	
</script>
<script>
	import {onMount} from 'svelte'
	import Partner from './_partner.svelte'
	import { page } from '$app/stores'
	import formatSlide from '$lib/formatslide'

	export let pattern
	let slides = $page.params
		.slides
		.replace(/\-/g,' ')
		.split('/')
		.map( el => formatSlide(el))

	let slide0 = $page.params.slides.split('/')[0]
	let title = `StringShow - ${slide0}`
	let ogImage = `https://cdn.statically.io/og/${title}.jpg`
	let bg = {

	}
	onMount(()=>{
		document.body.addEventListener("keyup", (e) => {
			console.log(e)
			if (e.code === 'ArrowRight') next()
			if (e.code === 'ArrowLeft') prev()
	    });
		document.body.focus()
	})

	function prev() {
	    let activeSlide = document.querySelector('.translate-x-0');
	    let previousSlide = activeSlide.previousSibling;
	    if (!!previousSlide) {
		    activeSlide.classList.remove('translate-x-0');
		    activeSlide.classList.add('translate-x-full');

		    previousSlide.classList.remove('-translate-x-full');
		    previousSlide.classList.add('translate-x-0');
	    }
	}

	function next() {
	    let activeSlide = document.querySelector('.translate-x-0');;
	    let nextSlide = activeSlide.nextSibling;

	    if (!!nextSlide) {
		    activeSlide.classList.remove('translate-x-0');
		    activeSlide.classList.add('-translate-x-full');
	    
		    nextSlide.classList.remove('translate-x-full');
		    nextSlide.classList.add('translate-x-0');
	    }
	}

</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="{title}">	
	<meta property="og:image" content="{ogImage}" />	
	<meta property="twitter:title" content="{title}">
	<meta property="twitter:image" content="{ogImage}" />
</svelte:head>
 
<div class="slides relative w-screen h-screen overflow-hidden" >
	<div class="slides">
		{#each slides as slide, index (slide)}
		    <div class="slide absolute inset-0 w-screen h-screen text-white flex items-center justify-center px-20 sm:px-40 transition-all ease-in-out duration-1000 transform text-3xl sm:text-6xl { !index ? 'translate-x-0' : 'translate-x-full'} " style={pattern} >
		    	<div class="text-center leading-normal">
			    	{@html slide}
		    	</div>
			</div>
		{/each}
	</div>
	<Partner class="absolute bottom-0 left-0 w-full m-2"/>
</div>
