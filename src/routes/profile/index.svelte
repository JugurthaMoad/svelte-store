<script>
    import Auth from "../../components/auth.svelte"
    import {currentUser } from "../../store/user"
 
</script>
  {#if $currentUser === ""}
   <Auth />
  {:else}
  <h1>profile component</h1>
  {/if}
  
<style>

</style>