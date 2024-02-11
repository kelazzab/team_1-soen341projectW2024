<script>
    import Browse from "$lib/components/Browse.svelte";
    import Header from "$lib/components/layout/Header.svelte";
    import RecentSearch from "$lib/components/Search/RecentSearch.svelte";
    import RecentSearchItem from "$lib/components/Search/RecentSearchItem.svelte";
</script>

<Header/>

<Browse/>

<RecentSearch>
    <RecentSearchItem/>
</RecentSearch>