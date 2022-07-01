<script>
    import VerticalMenu from "$lib/verticalMenu.svelte"
    import Articles from "../../components/articles.svelte"
    import Details from "../../components/details.svelte"
    import Comments from "../../components/comments.svelte"
    import Proposal from "../../components/proposal.svelte";
</script>
<VerticalMenu />
<div class="global_container">
<!--element for big screens and other for small ones-->

 <Details />

 <Comments />

<Proposal />
</div>
<style>
    .global_container {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

</style>