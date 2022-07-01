<script>
    export let handleClick
</script>
<div
on:click={()=> handleClick(4)}
>
 <div class="container">
    <div class="img_container">
     <img src="src/fond1.jpg" alt="img_prodect" />
    </div>
    <div class="decription_container">
        je suis la description
    </div> 
 </div>
</div>

<style>
div {
    display: block;
    height: 300px;
    padding: 3px;
    box-sizing: border-box
}

.container{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container:hover{
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
.img_container{
    width: 100%;
    background-color: aquamarine;
    height: 50%;
}
img {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.decription_container{
    width: 100%;
    height: 50%;
}
</style>