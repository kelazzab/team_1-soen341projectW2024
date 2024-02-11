<script lang="ts">
    import {CarFront} from "lucide-svelte";

    export let title: string = 'Cars from Test location to Test location';
    export let text: string = 'Thu, Feb 22 – Fri, Feb 23';
</script>

<div class="w-1/2 md:w-1/3 lg:w-1/4 shrink-0 p-2 flex flex-row justify-center items-center border border-gray-300 rounded-3xl">
    <div class="text-xl p-2"><CarFront/></div>
    <div class="p-2">
        <h2 class="text-wrap font-bold"> {title} </h2>
        <p class="mt-1 text-wrap text-sm"> {text} </p>
    </div>
</div>