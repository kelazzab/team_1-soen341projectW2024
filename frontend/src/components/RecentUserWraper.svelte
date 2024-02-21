<script lang="ts">
    export let user: string;
    export let email: string;
    
    export let src: string;
    export let href: string;
</script>
<a href={href} class="border border-gray-300 rounded-3xl w-1/2 md:w-1/3 lg:w-1/4 shrink-0 p-2 hover:scale-110 transition ease-in-out duration-700">
    <img src={src} alt="Recent Users" class="rounded-t-3xl"/>
    <hr/>
    <div class="my-4">
        <p>User: {user}/day</p>
        <p>Email: {email}</p>
    </div>
</a>