<script>
    export let items;
    export let handleClick ;
    export let currentItem
    $: currentI = currentItem
    // to display the menu vertically or not
    export let isVertical = true;
</script>

<div class={isVertical ?"container" : "h_container"}>
{#each items as item}
<div 
class={currentI === item ? "current item": "item"}
on:click={()=> handleClick(item)}
>
    {item}
</div>
{/each}
</div>


<style>

    .container{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .h_container{
        display: none;
    }
    .h_container .item{
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0px;
    }

    .h_container .item:hover{
        cursor: pointer;
    }
    .item{
        width: 80%;
        padding: 10px;
        font-size: 1.4rem;
        background-color: rgba(255, 255, 255, 0.127);
        border-radius:7px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .current{
        color: rgb(159,56,1) !important
    }
    @media only screen and (min-width:780px){
        .h_container{
        width: 100%;
        margin: auto;
        padding: 1px;
        background-color: black;
        color : white;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        }
    }
</style>