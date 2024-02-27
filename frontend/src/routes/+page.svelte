<script>
  import { navigate } from "svelte-routing";
</script>

<style>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>

<div class="flex flex-col h-screen">

  <div class="w-full bg-blue-500 text-white p-4">
    <h1 class="text-2xl font-semibold">Your Enterprise</h1>
  </div>


<div class="flex h-screen">

  <nav class="w-1/6 bg-gray-800 text-white">
    <ul class="py-4">
      <li>
        <button class="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" on:click={() => navigate('/manage-account')}>
          Manage Account
        </button>
      </li>
      <li>
        <button class="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" on:click={() => navigate('/manage-vehicles')}>
          Manage Vehicles
        </button>
      </li>
      <li>
        <button class="px-4 py-2 w-full text-left cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" on:click={() => navigate('/manage-reservations')}>
          Manage Reservations
        </button>
      </li>
    </ul>
  </nav>


  <div class="flex flex-col w-5/6">

    <div class="flex bg-gray-700 p-4">
      <div class="flex-1">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" on:click={() => navigate('/create-reservation')}>
          Create Reservation
        </button>
      
      </div>
      
      <div class="flex-1">
        <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" on:click={() => navigate('/manage-existing-reservations')}>
          Manage Existing Reservations
        </button>
      </div>
    </div>


    <div class="p-4 bg-blue-500">
      <h1 class="text-2xl font-semibold text-white">Managing Reservations</h1>
    </div>


    <div class="flex-1 p-4">

    </div>
  </div>

</div></div>
