<script>
	// Your component logic
</script>

<svelte:head>
	<title>Azurro</title>
</svelte:head>

<!-- Navbar -->
<div class="flex justify-between items-center p-2 h-10 ">
	<a href="/"> </a>
	<div>
		<a href="/download" class="mr-4">Download App</a> 
		<a href="/about_us" class="mr-4">About Us</a> 
	</div>
</div>

<div class="flex flex-col md:flex-row h-screen w-screen font-sans bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg">
	<!-- Start Container (with Image) -->
	<div class="flex-1 flex justify-center items-center">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="/assets/1.jpg" alt="Description of the image" class="w-full h-full object-cover">
	</div>

	<!-- End Container (with Text Content) -->
	<div class="flex-1 flex justify-center items-center">
		<div class="text-center p-12 sm:py-16 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg"> <!-- Gradient from dark gray to black -->
			<!-- Logo Image -->
			<img src="assets/logo2.png" alt="Logo" class="mx-auto mb-6 w-48 h-auto"> <!-- Increased logo size -->
	
			<!-- Text Content -->
			<div class="text-container p-12">
				<h1 class="text-6xl font-display font-bold text-white-600">Azurro</h1> <!-- Main heading -->
				<h3 class="text-3xl mt-3 text-gray-300">Enterprise account</h3> <!-- Subheading -->
				<nav class="mt-6">
					<a href="/login" class="inline-block mb-4 text-xl bg-blue-600 text-white py-2 px-12" style="border-radius: 5px;">Login</a>

					<p class="text-white">Want to register your venue?  <!-- Changed text color to black -->
						<a href="mailto:yadavmihirsanjay@gmail.com?subject=Registering%20turf%20on%20Azurro&body=If%20interested%20please%20mention%20your%20full%20name,%20phone%20number,%20and%20email. We will contact you." class="underline text-blue-600">Join Us</a>
					</p>
				</nav>
			</div>
		</div>
	</div>
	
	
	
</div>
