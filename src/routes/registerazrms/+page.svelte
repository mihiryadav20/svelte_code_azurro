<script lang="ts">
  import { goto } from '$app/navigation';

  let email = '';
  let firstName = '';
  let lastName = '';
  let password = '';
  let confirmPassword = '';
  let message = '';
  let passwordValid = false;
  let passwordsMatch = false;

  function validatePassword(password: string): boolean {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecial
    );
  }

  $: passwordValid = validatePassword(password);
  $: passwordsMatch = password === confirmPassword;

  async function registerUser() {
    if (!passwordValid) {
      message = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.';
      return;
    }

    if (!passwordsMatch) {
      message = 'Passwords do not match.';
      return;
    }

    try {
      const response = await fetch('https://azurro-server-db722d286592.herokuapp.com/enterprise/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: password
        })
      });

      const data = await response.json();
      console.log('Register response:', response.status, data); // Debugging line

      if (response.ok) {
        message = 'Registration successful!';
        goto('/login');
      } else {
        message = data.detail || 'Registration failed';
      }
    } catch (error) {
      console.error('Error during registration:', error); // Debugging line
      message = 'An error occurred. Please try again later.';
    }
  }
</script>
<svelte:head>
	<title>Register your venue</title>
</svelte:head>

<main class="flex flex-col items-center justify-center min-h-screen bg-millenniumBlue text-white p-4">
  <div class="max-w-lg w-full">
    <h1 class="text-3xl font-display mb-6 text-center text-white">Enter your details to sign-up</h1>
    <form on:submit|preventDefault={registerUser} class="space-y-4">
      <input type="email" placeholder="Email" bind:value={email} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <input type="text" placeholder="First Name" bind:value={firstName} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <input type="text" placeholder="Last Name" bind:value={lastName} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <input type="password" placeholder="Password" bind:value={password} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <input type="password" placeholder="Confirm Password" bind:value={confirmPassword} required class="w-full p-2 border border-white rounded bg-transparent text-white placeholder-white" />
      <button type="submit" class="w-full bg-transparent text-white p-2 rounded border border-white hover:bg-white hover:text-millenniumBlue transition">Register</button>
    </form>
    
    <div class="mt-6 text-white">
      <h2 class="text-xl font-semibold mb-2">Password must include:</h2>
      <ul class="list-disc list-inside">
        <li class:valid={password.length >= 8}>At least 8 characters</li>
        <li class:valid={/[A-Z]/.test(password)}>An uppercase letter</li>
        <li class:valid={/[a-z]/.test(password)}>A lowercase letter</li>
        <li class:valid={/\d/.test(password)}>A number</li>
        <li class:valid={/[!@#$%^&*(),.?":{}|<>]/.test(password)}>A special character</li>
      </ul>
    </div>
    
    {#if message}
      <p class="mt-4 text-center text-red-500">{message}</p>
    {/if}
  </div>
</main>

<style>
  .valid {
    color: green;
  }
  main {
    font-family: 'Montserrat', sans-serif;
  }
  h1 {
    font-family: 'Bebas Neue', cursive;
  }
</style>
