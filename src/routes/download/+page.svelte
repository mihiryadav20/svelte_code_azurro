<!-- App.svelte -->
<script>
    // You can import any necessary scripts or data here
  </script>
  
  <!-- Main Content -->
  <div class="flex items-center justify-center min-h-screen p-4">
    <!-- Main Container -->
    <div class="border border-gray-600 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
      <!-- Top Container -->
      <div class="w-full flex flex-col items-center justify-center text-center p-6">
        <img src="/assets/app-store.png" alt="App Store Logo" class="w-20 h-20 object-contain mx-auto mb-4">
        <h2 class="text-xl font-bold mb-4 text-white">Download for iOS</h2>
        <p class="text-md mb-4 text-gray-300">Click on the link below to install using the App Store:</p>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="https://apps.apple.com/us/app/azurro/id6670244070" class="text-blue-500 hover:underline">App Store Link</a> <!-- Replace with your iOS link -->
      </div>
  
      <!-- Divider -->
      <div class="w-full h-[1px] bg-gray-600 my-4"></div>
  
      <!-- Bottom Container -->
      <div class="w-full flex flex-col items-center justify-center text-center p-6">
        <img src="/assets/game.png" alt="Game Icon" class="w-20 h-20 object-contain mx-auto mb-4">
        <h2 class="text-xl font-bold mb-4 text-white">Download for Android (Early Access)</h2>
        <p class="text-md mb-2 text-gray-300">Follow these steps:</p>
        <ol class="text-left list-decimal list-inside mb-4 px-4 text-gray-300">
          <li>
            Join the Google Group:
            <a href="https://groups.google.com/g/azurro_testing" class="text-blue-500 hover:underline" target="_blank">
              Azurro Testing Group
            </a>
          </li>
          <li>
            After joining, install the app from the Play Store:
            <a href="https://play.google.com/store/apps/details?id=com.azurro.version_1" class="text-blue-500 hover:underline" target="_blank">
              Android Testing Link
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
  