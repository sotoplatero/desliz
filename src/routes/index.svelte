<script>
	import {onMount} from  'svelte'
	let text = 'Escribe algo Asombroso'
	let bgs = [ 'DC2626','D97706','10B981','6366F1','8B5CF6','EC4899','C026D3','DB2777','E11D48','78716C','64748B','F97316']
	let color = '#ffffff'
	let ancho = 1200
	let bg = '#' + bgs[Math.floor( Math.random() * bgs.length) ]
	let loading = false
	let url
	let src
	let id

	$: src && (loading = true)

	onMount(() => { setSrc() })

	async function setSrc(){
		let cleanColor = color.replace(/#/,'')
		let cleanBg = bg.replace(/#/,'')
		const t = text.replace(/\s+/g,' ').replace(/\s/g,'-')
		url = `${encodeURIComponent(t)}.png?color=${cleanColor}&bg=${cleanBg}`
		src =  `/i/${url}`
	}

	async function share(){
		const body = { text, src }
		const res = await fetch('/share', {
			method: 'POST',
			body: JSON.stringify(body),
		})

		id = await res.text()
	}

	function loader(img) {
		img.onload = () => (loading = false);
	}

</script>

<main>
	<header class="py-24">
		<h1 class="font-extrabold text-gray-800 text-4xl sm:text-6xl tracking-tighter mb-2">
			Crea <br>divertidas <span class="text-pink-700">presentaciones</span><br> solo con la URL
		</h1>
		<div class="text-xl sm:text-3xl font-medium text-gray-500 leading-relaxed">Puedes usarlo en la presentación de <span class="font-bold">nuevos productos</span>, para escribir un <span class="font-bold">mini-tutorial</span>, compartir una <span class="font-bold">historia corta</span> o your favorite <span class="font-bold">recipe</span></div>
		<a href="/" target="_blank" class="mt-8 text-pink-700 inline-block text-3xl font-extrabold">
			Demo &rarr;
		</a>
	</header>

	<div class="mb-16">
		<h2>¿Cómo funciona?</h2>
		<p>El servicio funciona en dirección <code>/show</code>. Luego solo escribes el texto de cada diapositiva separadas por <code>/</code> como en una url. Y lo bueno que además del texto StringShow utiliza un formato con el cual puedes incluir el título de la diapositiva, cuentas de twitter y direcciones url, muy divertido. Un ejemplo para aclarar dudas:</p>
		<a href="/show/diapositiva-1/diapositiva-2/diapositiva-3" target="_blank" class="link">☛ /show/diapositiva-1/diapositiva-2/diapositiva-3</a>		
	</div>

	<div class="space-y-12">
		<div class="">
			<h3>
				✨ Títulos de las Diapositivas
			</h3>
			<p>Puedes incluir un título a las diapositivas escribiendolo al inicio del texto de la diapositiva y terminado con un punto.</p>
			<a href="/show/titulo-del-slide.el-texto-inicial-terminado-con-punto-sera-asumido-como-titulo" target="_blank" class="link">☛ 
				/show/titulo-del-slide.el-texto-inicial-terminado-con-punto-sera-asumido-como-titulo
			</a>
		</div>

		<div class="">
			<h3>
				✈ Incluye tu cuenta en Twitter
			</h3>
			<p>Solo incluya el nombre de tu cuenta en Twitter comenzando por @</p>
			<a href="/show/Your-Twitter.incluye-tu-cuenta-en-twitter-@sotoplatero" target="_blank" class="link">/show/Your-Twitter.incluye-tu-cuenta-en-twitter-@sotoplatero</a>
		</div>

		<div class="">
			<h3>
				⚽ Color y patrón de fondo aleatorio
			</h3>
			<p>StringShow use random color from <a href="https://tailwindcss.com/docs/">Tailwind Pallete</a> and pattern from <a href="https://www.heropatterns.com/">heropatterns</a></p>
		</div>

		<div class="">
			<h3>
				☕ Use Emojis
			</h3>
			<p></p>
		</div>

		<div class="">
			<h3>
				✋ Funciona como una Página Web
			</h3>
			<p>Puedes usar StringShow como una pagina web. Tiene título y meta imagen personalizado asi que puedes compartir en redes sociales. <a href="https://cards-dev.twitter.com/validator">Mira como se veria en twitter</a></p>
		</div>

	</div>

</main>

<style>
	h2{ @apply text-3xl text-gray-800 font-bold mb-2; }
	h3{ @apply text-2xl text-gray-800 font-bold mb-2; }
	p{ @apply text-lg text-gray-700; }
	.link {
		@apply text-blue-600 inline-block mt-1;
	}
	code{ @apply bg-gray-100 px-2 font-mono; }
</style>

