<script lang="ts">
    export let href: string;
    export let label: string;
    export let icon: string;
</script>

<a href={href} class="max-sm:hidden text-gray-700 px-3 py-2 text-sm font-medium hover:text-blue-700">{label}</a>
<a href={href} class="sm:hidden px-2 py-2 hover:text-blue-700">
    {@html icon}
</a>