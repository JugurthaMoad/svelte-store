<script>
import V_menu from "$lib/v_menu.svelte"
import { goto } from '$app/navigation';
import { currentList, currentItem } from "../store/listCategory"
    let list = $currentList
 let item_c = $currentItem
 // this will update the list after change of currentGender
 $: {
    list = $currentList
 }
// this will update the item_c after each change of currentItem
 $: {
    item_c = $currentItem
 }
   // responsible to change the current item
   const changeCurrentItem = (item)=>{
        currentItem.setCurrentItem(item)
        item_c = $currentItem

    }
 const v_handleClick = (item)=>{
 changeCurrentItem(item)
 goto('/product')
 action();
 }

 const action = ()=>{
        // this function is responsible for all clicks 
        // item is choosen from sub menu 
        // item is choosen from vertical menu 
        // console.log('currentGender = ', $currentGender)
        // console.log('current List ', $currentList)
        // console.log('current item = ', item_c)
        // the goal is the following : 
        /*
          Get the current Gender 
          Get the current Item from cattegory of each gender
          fetch data with this informtations 
          Note : 
          init the current item to " " for each gender 
          ex   : 
          if we change the current gender to Homme then the current item will be ""
          then we fetch all articles related to this gender 
        */
    }
</script>

<div class="container">
    <V_menu isVertical={false} currentItem={item_c} items={list} handleClick={v_handleClick}/>
</div>

<style>
 .container {
    width: 100%;

 }
</style>