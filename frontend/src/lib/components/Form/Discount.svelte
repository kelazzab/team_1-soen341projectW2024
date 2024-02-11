<script lang="ts">
    import {ChevronDown, ChevronUp} from "lucide-svelte";

    export let discountCodes: { discountCode: string }[];
    export let discountFormOn = false;

    export let MAX_NUMBER_OF_DISCOUNTS: number;

    function addAnotherCode() {
        if (discountCodes.length === MAX_NUMBER_OF_DISCOUNTS) return;
        discountCodes = [...discountCodes, {discountCode: ''}];
    }

    function clearForm() {
        discountCodes = [{discountCode: ''}];
    }
</script>

<div class="relative">
    <button class="flex flex-row items-center mt-4 border border-black p-1 rounded-full w-fit text-sm"
            on:click={() => discountFormOn = !discountFormOn}>Discount code
        {#if discountFormOn}
            <ChevronUp/>
        {:else }
            <ChevronDown/>
        {/if}
    </button>
    {#if discountFormOn}
        <div class="absolute bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-3/4 md:w-3/6 lg:w-2/6 shadow">

            <div class="flex justify-between items-center">
                <div>Discount Code</div>
                <button class="text-sm text-blue-600 hover:underline" on:click={clearForm}>Clear</button>
            </div>

            {#each discountCodes as code, index}
                <input type="text" bind:value={code.discountCode}
                       class="my-2 border rounded p-2 w-full h-12 border-black focus:border-blue-500 focus:border-2 focus:outline-none"/>
            {/each}

            <button class="text-sm text-blue-600 hover:underline w-full float-right mb-4 {discountCodes.length === MAX_NUMBER_OF_DISCOUNTS ? 'text-gray-500 hover:no-underline' : '' }"
                    on:click={addAnotherCode}>Add another code
            </button>

            <div class="">
                <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
                        on:click={() => discountFormOn = !discountFormOn}>
                    Done
                </button>
            </div>
        </div>

    {/if}
</div>