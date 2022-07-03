<!--This is the starting page of each gender choice-->
<script context="module">
    console.log('coucou')
    /*
    a function that will be the responsable for fetching 
    important data " ex promotions "for each gender 
   
    */
</script>
<script>
import {currentGender } from '../store/choice'
import {currentPage} from '../store/page'
import StartTemplate from "./startTemplate.svelte"
import VerticalMenu from "../lib/verticalMenu.svelte"
import {currentList, currentItem} from "../store/listCategory"
import { goto } from '$app/navigation';

const handleClick = (item)=>{
    console.log('clicked')
    currentItem.setCurrentItem(item)
    currentPage.changePage('/product')
    goto('/product')
}
let list = $currentList
$: {
    list = $currentList
}
</script>

<VerticalMenu />
<div class="container">
    {#each list as l}
    <StartTemplate title={l} {handleClick}/>
    {/each}
   
</div>

<style>
    .container{
        width: 100%;
        display: grid;
        padding: 10px 20px;
        gap:6px;
        border: 1px solid green;
        box-sizing: border-box;
        grid-template-columns: repeat(1, 1fr);
    }

    @media only screen and (min-width:640px){
        .container{
            width: 100%;
        display: grid;
        padding: 10px 20px;
        gap:6px;
        border: 1px solid green;
        box-sizing: border-box;
        grid-template-columns: repeat(2, 1fr);
        
 }
    }
</style>