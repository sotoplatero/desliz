<script>
	import '../app.postcss';
</script>
<div class="max-w-screen-md mx-auto w-full px-2">
<!-- 	<a href="/">
		<h1 class="text-xl sm:text-3xl text-center py-4 font-bold flex items-center justify-center">
			<img src="/logo.png" class="w-10 h-10 rounded-md mr-2" alt="">	
			<span class="">String<span class="text-indigo-600 font-extrabold">Show</span></span>
		</h1>
	</a> -->

	<slot />

  <footer class="mt-24 mb-12 text-center font-mono space-y-6">
  	<div>Made with <a href="https://kit.svelte.dev" target="_blank" rel="nofollow noopener">SvelteKit</a>, and <a  href="https://tailwindcss.com" target="_blank" rel="nofollow noopener">TailwindCss</a></div>

  	<div>
      Si te 💓 StringShow sigueme en <a href="https://twitter.com/sotoplatero" class="text-blue-500" target="_blank" rel="me">@sotoplatero</a> para más proyectos.
    </div>
  </footer>

</div>
