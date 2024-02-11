<script>

    import Discount from "$lib/components/Form/Discount.svelte";

    let pickupLocation = '';
    let dropoffLocation = 'Same as pick-up';
    let pickupDate = new Date().toISOString().slice(0, 10); // default to today's date
    let dropoffDate = new Date().toISOString().slice(0, 10);
    let pickupTime = '10:30';
    let dropoffTime = '10:30';
    let discountFormOn = false;
    let discountCodes = [
        {discountCode: ''}
    ];
</script>

<div class="mt-5 sm:mt-10 sm:mx-10 sm:border border-gray-400 border-solid rounded-md p-5">

    <form class="flex flex-col">
        <div class="grid grid-cols-6 gap-4 lg:grid-cols-4">
            <input type="text" placeholder="Pick-up"
                   class="focus:outline-none focus:border-blue-500 border rounded p-2 col-span-6 md:col-span-3 lg:col-span-2 h-12 border-black"
                   bind:value={pickupLocation}/>
            <input type="text" placeholder="Drop-off"
                   class="focus:outline-none focus:border-blue-500 border rounded p-2 col-span-6 md:col-span-3 lg:col-span-2 h-12 border-black"
                   value={dropoffLocation}/>
            <input type="date" class="border rounded p-2 col-span-3  lg:col-span-1 h-12 border-black"
                   bind:value={pickupDate}/>
            <input type="date" class="border rounded p-2 col-span-3  lg:col-span-1 h-12 border-black"
                   bind:value={dropoffDate}/>
            <input type="time" class="border rounded p-2 col-span-3  lg:col-span-1 h-12 border-black"
                   bind:value={pickupTime}/>
            <input type="time" class="border rounded p-2 col-span-3  lg:col-span-1 h-12 border-black"
                   bind:value={dropoffTime}/>
        </div>
        <Discount {discountFormOn} bind:discountCodes MAX_NUMBER_OF_DISCOUNTS={3}/>
        <button type="submit" class="mt-4 bg-blue-700 text-white p-4 rounded-full w-fit max-sm:w-full">Search</button>
    </form>
</div>

<style>
</style>
