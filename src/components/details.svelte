<!-- reflechir sur la façon de passer les infos -->
<!--besoin :* 
-->
<script>
    let show = false;
    import {currentUser} from "../store/user"
    import Auth from "./auth.svelte"
    let sizeAlert = false;
    let authAlert = false;
    const handleShow = ()=>{
        show = !show
    }
    const handleBuy = ()=>{
        if($currentUser===""){
            authAlert = true;
        }else{
            authAlert = false;
            console.log('ajouter au pannier')
        }
    }
    const closeAuthAlert = ()=>{
        authAlert = false;
    }
    const handleSizeAlert = ()=>{
        console.log('alert size')
        sizeAlert = !sizeAlert
    }
    const handleClick = ()=>{
        handleSizeAlert();
        handleBuy();
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
        <div 
        on:click={handleClick}
        class="buy_btn">
        <!--red text for non mobile screens -->
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
<div on:click|self={handleSizeAlert}
class={sizeAlert ? "show_alert" : "hide"}>
    <div class="size_alert" >
        Details about choosing size ...
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
<div 
on:click|self={closeAuthAlert}
class={authAlert ? "aut_container": "hide"}>
    <div class="aut_alert">
            <Auth />
    </div>
</div>
<style> 
      .hide{
        display: none;
      }
      .show_alert{
        display: block;
        width: 100vw;
        height: 100vh;
        z-index: 20;
        position: fixed;
        box-sizing: border-box;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.633);
      }
      .aut_container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        z-index: 20;
        position: fixed;
        box-sizing: border-box;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.633);
      }
      .size_alert{
        width: 100vw;
        position: fixed;
        bottom: 0px;
        height: 40vh;
        background-color: white;
      }
      .aut_alert{
        width: 100vw;
        height: 90vh;
        position: fixed;
        background-color: white;
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
    .buy_btn{
        background-color: black;
        position: fixed;
        bottom: 0px;
        color: white;
    }
    .buy_btn:hover{
        cursor: pointer;
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
      .buy_btn{
        position: relative;
      }
      .show_alert{
        display: none;
      }
      .aut_container{
        display: none;
      }
    }
</style>