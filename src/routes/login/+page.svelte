<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '../../stores/user';
  import type { User } from '../../types';

  let email = '';
  let password = '';
  let message = '';
  let isSuccess = false;

  // Redirect to the main page if the user is already logged in
  onMount(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const currentUser = JSON.parse(userData) as User;
      if (currentUser) {
        goto('/main');
      }
    }
  });

  async function loginUser() {
    try {
      const response = await fetch('https://azurro-server-db722d286592.herokuapp.com/enterprise/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();
      console.log('Login response:', response.status, data); // Debugging line

      if (response.ok) {
        message = 'Login successful!';
        isSuccess = true;
        user.set(data.user as User); // Update the user store
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user in localStorage
        goto('/main'); // Navigate to main page
      } else {
        message = data.detail || 'Login failed';
        isSuccess = false;
      }
    } catch (error) {
      console.error('Error during login:', error); // Debugging line
      message = 'An error occurred. Please try again later.';
      isSuccess = false;
    }
  }
</script>
<svelte:head>
	<title>Login</title>
</svelte:head>
<main class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg">
  <div class="max-w-lg w-full">
    <h1 class="text-3xl font-display mb-6 text-center text-white">Enter your credentials</h1>
    <form on:submit|preventDefault={loginUser} class="space-y-4">
      <input type="email" placeholder="Email" bind:value={email} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <input type="password" placeholder="Password" bind:value={password} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <button type="submit" class="w-full bg-transparent text-white p-2 rounded border border-white hover:bg-white hover:text-millenniumBlue transition">Login</button>
    </form>
    
    {#if message}
      <p class="mt-4 text-center" class:text-green-500={isSuccess} class:text-red-500={!isSuccess}>{message}</p>
    {/if}
  </div>
</main>

<style>
  main {
    font-family: 'Montserrat', sans-serif;
  }
  h1 {
    font-family: 'Bebas Neue', cursive;
  }
</style>
