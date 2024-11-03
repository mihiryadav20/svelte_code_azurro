<script>
	// Your component logic
</script>

<svelte:head>
	<title>Azurro</title>
</svelte:head>

<!-- Full-Screen Wrapper Container with Gradient Background -->
<div class="h-screen w-screen flex flex-col font-sans bg-gradient-to-b from-gray-800 to-black shadow-lg overflow-hidden">

    <!-- Navbar -->
    <div class="flex justify-between items-center px-4 py-2 h-14 bg-opacity-90">
        <div class="ml-auto">
            <a href="/download" class="mr-4 text-white">Download App</a>
            <a href="/about_us" class="text-white">About Us</a>
        </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex flex-1 flex-col md:flex-row overflow-hidden">
        
        <!-- Image Container -->
        <div class="flex-1">
            <img src="/assets/1.jpg" alt="Description of the image" class="w-full h-full object-cover">
        </div>

        <!-- Text Content Container -->
        <div class="flex-1 flex justify-center items-center p-12">
            <div class="text-center ">
                
                <!-- Logo Image -->
                <img src="assets/logo2.png" alt="Logo" class="mx-auto mb-6 w-48 h-auto">
                
                <!-- Text Content -->
                <h1 class="text-4xl font-semibold text-white">Azurro</h1>
                <h3 class="text-2xl mt-3 text-gray-300">Enterprise account</h3>
                <nav class="mt-6">
                    <a href="/login" class="inline-block mb-4 text-xl text-white py-2 px-12 border border-white" style="border-radius: 5px;">Login</a>
                    <p class="text-white">
                        Want to register your venue?  
                        <a href="mailto:yadavmihirsanjay@gmail.com?subject=Registering%20turf%20on%20Azurro&body=If%20interested%20please%20mention%20your%20full%20name,%20phone%20number,%20and%20email. We will contact you." class="underline text-white">Join Us</a>
                    </p>
                </nav>
            </div>
        </div>
    </div>
</div>
