<script>
  import { navigate } from "svelte-routing";
</script>

<style>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>

<div class="flex flex-col h-screen">

  <div class="w-full bg-blue-600 text-white p-4 flex items-center justify-between">
    <div class="flex items-center">
      <div class="rounded-full overflow-hidden h-10 w-10 flex items-center justify-center mr-2">
        <img src="https://img.freepik.com/free-vector/red-car-drive-road-scene_1308-62683.jpg?t=st=1709056820~exp=1709060420~hmac=3582cd12ee3c6b7ac7612f46b7a7c423749a3c2f1fd8f68c6ca2926ad083e291&w=2000" alt="Rentify Logo" class="h-full w-full object-cover">
      </div>      
      <h1 class="text-2l font-semibold">Rentify</h1>
    </div>
  </div>

  <div class="flex h-screen">

    <nav class="w-1/6 bg-stone-800 text-white flex flex-col justify-between">
      <div class="py-4">
        <button class="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" on:click={() => navigate('/manage-account')}>
          Manage Account
        </button>
        <button class="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" on:click={() => navigate('/manage-vehicles')}>
          Manage Vehicles
        </button>
        <button class="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" on:click={() => navigate('/manage-reservations')}>
          Manage Reservations
        </button>
      </div>
    </nav>

    <div class="flex flex-col w-5/6">

      <div class="flex  p-4 justify-between items-center">
        <div>
          <h2 class="text-lg font-semibold text-black">Welcome to the Management Reservations Systems</h2>
          <p class="text-sm text-black">Here you can easily manage all your reservations.</p>
        </div>
      </div>

      <div class="flex justify-between p-4">
        <div class="w-3/6 p-6 border border-blue-500 rounded-lg mr-2 flex flex-col items-center justify-center">
          <img src="https://img.freepik.com/free-vector/woman-choosing-dates-calendar-appointment-booking_23-2148552956.jpg?w=1060&t=st=1709050360~exp=1709050960~hmac=9748d000b1abb4da782cba7db2420c0cf452835291c5fabc8c8827c90a71c8b7" alt="Create Reservation" class="w-48 h-48 mb-2">
          <p class="text-sm text-black mb-2">Click to create a reservation</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" on:click={() => navigate('/create-reservation')}>
            Create Reservation
          </button>
        </div>
      
        <div class="w-3/6 p-6 border border-blue-500 rounded-lg ml-2 flex flex-col items-center justify-center">
          <img src="https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?w=1060&t=st=1709050131~exp=1709050731~hmac=bfee31d27333a055896e2b3ba617ed3c25b9095941ea826c6b1d33f381132b9e" alt="Manage Reservations" class="w-48 h-48 mb-2">
          <p class="text-sm text-black mb-2">Click to view, update, or delete reservations</p>
          <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" on:click={() => navigate('/manage-existing-reservations')}>
            Manage Reservations
          </button>
        </div>
      </div>

    </div>

  </div>

</div>
