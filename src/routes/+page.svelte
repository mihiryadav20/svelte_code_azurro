<script>
	// Your component logic
</script>

<svelte:head>
	<title>Azurro</title>
</svelte:head>

<!-- Navbar -->
<div class="flex justify-between items-center p-2 h-10">
	<a href="/"> </a>
	<div>
		<a href="/download" class="mr-4">Download App</a> 
		<a href="/about_us" class="mr-4">About Us</a> 
	</div>
</div>

<div class="flex flex-col md:flex-row h-screen w-screen font-sans">
	<!-- Start Container (with Image) -->
	<div class="flex-1 flex justify-center items-center">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/assets/1.jpg" alt="Description of the image" class="w-full h-full object-cover">
	</div>

	<!-- End Container (with Text Content) -->
	<div class="flex-1 flex justify-center items-center">
		<div class="text-center p-8 sm:py-12"> <!-- Increased padding here -->
			<!-- Logo Image -->
			<img src="assets/logo2.png" alt="Logo" class="mx-auto mb-4 w-40 h-auto">
			
			<!-- Text Content -->
			<div class="text-container">
				<h1 class="text-5xl font-display">Azurro</h1>
				<h3 class="text-2xl mt-2">Enterprise account</h3>
				<nav class="mt-4">
					<a href="/login" class="inline-block mb-2 text-xl border border-white py-1 px-11 hover:bg-white hover:text-black transition">Login</a>
					<p class="text-lg">Want to register your venue? 
						<a href="mailto:yadavmihirsanjay@gmail.com?subject=Registering%20turf%20on%20Azurro&body=If%20interested%20please%20mention%20your%20full%20name,%20phone%20number,%20and%20email. We will contact you." class="underline text-lg">Join Us</a>
					</p>
					
				</nav>
			</div>
		</div>
	</div>
</div>
