<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '../../stores/user';
  import type { User } from '../../types';
  import { writable, derived } from 'svelte/store';

  type Booking = {
    booking_time: string;
    total_amount: number;
    to_be_paid_on_venue: number;
    booking_duration: number;
    booked_by: {
      phone_number: string;
      user_uuid: string;
      first_name: string;
      last_name: string;
      email: string;
      created_at: string;
    } | null;
  };

  let currentUser: User | null = null;
  let selectedDate = '';
  let bookings = writable<Booking[]>([]);
  let turfName = writable<string | null>(null);
  let turfLocation = writable<string | null>(null);
  const turfId = 1;

  let totalHours = writable<number | null>(null);
  let totalRevenue = writable<number | null>(null);


    let isDropdownOpen = false;
    function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen; // Toggle the dropdown visibility
  }

  // Derived store to calculate total to be paid on venue
  let totalToBePaidOnVenue = derived(bookings, ($bookings) =>
    $bookings.reduce((total, booking) => total + (booking.to_be_paid_on_venue || 0), 0)
  );

  // Fixed advance payment amount and total calculation
  const advancePaymentAmount = 500;
  let totalAdvancePayment = derived(bookings, ($bookings) => $bookings.length * advancePaymentAmount);

  onMount(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      currentUser = JSON.parse(userData) as User;
      user.set(currentUser);
    } else {
      goto('/login');
    }
    
    fetchTurfName(turfId);
  });

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  async function fetchBookings() {
    if (!selectedDate) return;
    try {
      const response = await fetch(`https://azurro-server-db722d286592.herokuapp.com/api/turfs/${turfId}/bookings/?date=${selectedDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const data = await response.json();
        bookings.set(data.bookings);
        totalHours.set(data.total_hours);
        totalRevenue.set(data.total_revenue);
      } else {
        bookings.set([]);
        totalHours.set(null);
        totalRevenue.set(null);
      }
    } catch (error) {
      bookings.set([]);
      totalHours.set(null);
      totalRevenue.set(null);
    }
  }

  async function fetchTurfName(id: number) {
    try {
      const response = await fetch(`https://azurro-server-db722d286592.herokuapp.com/api/turfs/${id}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.ok) {
        const data = await response.json();
        turfName.set(data.name);
        turfLocation.set(data.location);
      } else {
        turfName.set(null);
        turfLocation.set(null);
      }
    } catch (error) {
      turfName.set(null);
      turfLocation.set(null);
    }
  }

  async function logoutUser() {
    await fetch('https://azurro-server-db722d286592.herokuapp.com/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    localStorage.removeItem('user');
    user.set(null);
    goto('/');
  }
</script>





<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="bg-gradient-to-b from-gray-800 to-black shadow-lg">
  <nav class="w-full bg-millenniumBlue p-4 md:px-8 flex items-center">
    
    <!-- Left Section with Azurro title -->
    <div class="flex-1 flex justify-start">
        <span class="text-white text-2xl font-semibold tracking-widest">Azurro</span>
    </div>

    <!-- Center Section with Dashboard link -->
    <div class="flex-1 flex justify-center mt-2">
        <a href="/dashboard" class="text-white text-2xl font-semibold">Dashboard</a>
    </div>

    <!-- Right Section with User Dropdown -->
    <div class="flex-1 flex justify-end">
        {#if $user}
            <div class="relative">
                <button 
                    on:click={toggleDropdown} 
                    class="text-white text-xl py-1 px-4 rounded-lg shadow-lg transition-colors duration-200 ease-in-out font-semibold"
                >
                    User
                </button>
                {#if isDropdownOpen}
                    <div class="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                        <button 
                            on:click={logoutUser} 
                            class="block w-full text-left py-2 px-4 hover:bg-gray-200"
                        >
                            Logout
                        </button>
                        <button  
                            class="block w-full text-left py-2 px-4 hover:bg-gray-200"
                        >
                            Profile
                        </button>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</nav>



<main class="bg-millenniumBlue text-white p-4 font-sans min-h-screen ">
  {#if $user}
      <div class="max-w-4xl w-full mt-6 mx-auto p-4 md:p-8">
          {#if $turfName}
              <h1 class="text-xl md:text-2xl mb-2 font-semibold text-center">{$turfName}</h1>
              {#if $turfLocation}
                  <p class="text-sm md:text-base mb-4 text-center">{$turfLocation}</p>
              {/if}
          {:else}
              <h2 class="text-xl md:text-2xl mb-4 font-semibold text-center">Select a Date to View Bookings</h2>
          {/if}
      
          <div class="flex justify-center mb-6">
            <input 
                type="date" 
                bind:value={selectedDate} 
                on:change={fetchBookings} 
                class="w-2/3 h-12 p-1 border border-white rounded-full mb-4 bg-white text-black text-center leading-10 placeholder-center" 
            />
        </div>
        
          {#if $bookings.length > 0}
              <h3 class="text-lg mb-4 font-semibold">Bookings for <span class="underline">{formatDate(selectedDate)}</span></h3>

              <div class="overflow-x-auto">
                  <table>
                    <thead>
                      <tr>
                          <th class="px-2 py-2 text-left">Timeslot</th>
                          <th class="px-2 py-2 text-left">Booked By</th>
                          <th class="px-2 py-2 text-left">Phone Number</th>
                          <th class="px-2 py-2 text-left">Advance Payment</th>
                          <th class="px-2 py-2 text-left">To be Paid on Venue</th>
                          <th class="px-2 py-2 text-left">Total Amount</th>
                          <th class="px-2 py-2 text-left">Time Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each $bookings as booking}
                        <tr>
                          <td class="px-2 py-2">{booking.booking_time}</td>
                          <td class="px-2 py-2">{booking.booked_by ? `${booking.booked_by.first_name} ${booking.booked_by.last_name}` : 'N/A'}</td>
                          <td class="px-2 py-2">{booking.booked_by ? booking.booked_by.phone_number : 'N/A'}</td>
                          <td class="px-2 py-2">₹{advancePaymentAmount}</td>
                          <td class="px-2 py-2">₹{booking.to_be_paid_on_venue}</td>
                          <td class="px-2 py-2">₹{booking.total_amount}</td>
                          <td class="px-2 py-2">{booking.booking_duration} hours</td>
                        </tr>
                      {/each}
                    </tbody>
                    <tfoot>
                      <tr class="font-semibold">
                          <td colspan="3" class="px-2 py-2 text-right">Total:</td>
                          <td class="px-2 py-2">₹{$totalAdvancePayment}</td>
                          <td class="px-2 py-2">₹{$totalToBePaidOnVenue}</td>
                          <td class="px-2 py-2">₹{$totalRevenue}</td>
                          <td class="px-2 py-2">{$totalHours} hours</td>
                      </tr>
                    </tfoot>
                    
                  </table>
              </div>
          {:else if selectedDate}
              <p>No bookings done</p>
          {/if}
      </div>
  {:else}
      <p>Loading...</p>
  {/if}
</main>

</div>

<style>
  table {
      width: 100%;
      border-collapse: collapse;
  }

  th, td {
      padding: 8px;
      text-align: left;
      border: 1px solid white;
  }

  img {
    display: inline-block;
    margin-right: 0.5rem;
  }
</style>
