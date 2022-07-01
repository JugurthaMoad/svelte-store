  <script>
   export let items = [];
   export let handleClick ;
   export let currentGender
   $: currentG = currentGender
   // if mobile screen or not 
   export let mobile = false;
  </script>
  <div class={mobile ?"header_sub_mobile": "header_sub_menu"}>
   {#each items as item}
    <span 
    class={ currentG ===item? "current menu_item":"menu_item" }
    on:click={()=> handleClick(item)}
    >{item}</span>
   {/each}
</div>

<style>
       .header_sub_mobile{
        display: flex;
        width: 90%;
        margin: auto;
        padding:5px 5px;
        box-sizing: border-box;
        overflow: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none; 
       
    } 
    .header_sub_menu{
        display: flex;
        width: 100%;
        padding:5px 5px;
        box-sizing: border-box; 
       
    } 
    .menu_item{
        font-size: 1.3rem;
        padding: 5px 5px;
    }
    .current{
        color: rgb(159,56,1) !important
    }
    .menu_item:hover{
        cursor: pointer;
    }
    .header_sub_mobile::-webkit-scrollbar {
     display: none;
}

</style>