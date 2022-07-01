<!-- reflechir sur la façon de passer les infos -->
<!--besoin :* 
-->
<script>
    let show = false;
    const handleShow = ()=>{
        show = !show
    }
</script>
<div class="container">
    <div class="article">
    <div class="photos">
        photos
    </div>
    <img
    on:click={handleShow} 
    src="../src/fond1.jpg" alt="img_product" />
    </div>
    <div class="info">
        <div>
            Title and price
        </div>
        <div>
            colors 
        </div>
        <div>
            sizes
        </div>
        <div>
            button and like button
        </div>
        <div>
            livraison infos
        </div>
        <div>
            description
        </div>
        <div>
            other infos
        </div>
        <div>
            description
        </div>
        <div>
            other infos
        </div>
        <div>
            description
        </div>
        <div>
            other infos
        </div>
    </div>
</div>
<div
on:click|self={handleShow}
class={show ? "img_container" : "hide"}>
<!-- Display the imgs of the product-->
<div>
    je suis l'image
</div>
</div>
<style> 
      .hide{
        display: none;
      }
      .img_container{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 10px;
        top: 0px;
        left:0px;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.601);;
        
      }
      .img_container div{
        width: 100vw;
        height: 70vh;
        background-color: white;
        color: black;
      }
      .container {
        border:2px solid red;
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        gap: 5px;
        padding: 5px
    }
       .photos{
        display: none;
        width: 0%;
       }
       .info {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border : 1px solid black;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .article{
        width: 100%;
        height: 50vh;
        box-sizing: border-box;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;
        overflow: hidden;
    }
    .photos{
        border: 1px solid black;
        width: 100%;
        box-sizing: border-box;
    }
    img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        
    }
    img:hover{
        cursor: pointer;
    }
    .info {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border : 1px solid black;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .info div{
        border: 1px solid black;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
    @media only screen and (min-width:640px){
        .info {
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        border : 1px solid black;
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow: scroll;
    }
    .article {
        width: 60%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
 }
 .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        gap: 5px;
        height: 60vh;
        padding: 20px 5px;
 
 }
    .photos{
        display: block;
        box-sizing: border-box;
    }
    img {
        width: 80%;
        height: 100%;
        float: right;
        box-sizing: border-box;
    }
    .img_container div{
        width: 40vw;
        height: 70vh;
        background-color: white;
        color: black;
      }
    }
</style>