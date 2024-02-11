<script>
    import Browse from "$lib/components/Browse.svelte";
    import Header from "$lib/components/layout/Header.svelte";
    import RecentSearch from "$lib/components/Search/RecentSearch.svelte";
    import RecentSearchItem from "$lib/components/Search/RecentSearchItem.svelte";
    import CarCard from "$lib/components/Card/CarCard.svelte";
    import CarCardWrapper from "$lib/components/Card/CarCardWrapper.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
</script>

<Header/>

<main class="md:px-10">

    <Browse/>

    <RecentSearch>
        <RecentSearchItem title="Cars from Test location to Test location" text="Thu, Feb 22 – Fri, Feb 23" href="/"/>
        <RecentSearchItem title="Cars from Test location to Test location" text="Thu, Feb 22 – Fri, Feb 23" href="/"/>
        <RecentSearchItem title="Cars from Test location to Test location" text="Thu, Feb 22 – Fri, Feb 23" href="/"/>
    </RecentSearch>

    <CarCardWrapper>
        <CarCard type="Sedan" category="Electric" price={100} src="/images/tesla.png" href="/"/>
        <CarCard type="Sedan" category="Electric" price={100} src="/images/tesla.png" href="/"/>
        <CarCard type="Sedan" category="Electric" price={100} src="/images/tesla.png" href="/"/>
        <CarCard type="Sedan" category="Electric" price={100} src="/images/tesla.png" href="/"/>
        <CarCard type="Sedan" category="Electric" price={100} src="/images/tesla.png" href="/"/>
        <CarCard type="Sedan" category="Electric" price={100} src="/images/tesla.png" href="/"/>
    </CarCardWrapper>

</main>

<Footer/>