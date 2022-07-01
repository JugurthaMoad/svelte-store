
<script>
    import Articles from './articles.svelte'
    // props 
    let elements = [1]
</script>
<div class="container">
    {#if elements.length != 0}
    <h3>Articles également consultés </h3>
    <Articles />
    {/if}
</div>

<style>
    .container{
        width: 100%;
    }

</style>