<script>
export let title = "rien"
export let handleClick = undefined
</script>

<div>
    <div class="container">
        <span on:click={()=>handleClick(title)}>
            {title}
        </span>
    </div>
  
</div>

<style>
    div{
        width: 100%;
        height: 400px;
        border: 1px solid red;
        box-sizing: border-box;
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    span {
        display: block;
        padding: 5px;
        border: 1px solid black;
    }
    span:hover{
        cursor: pointer;
    }
</style>