<script>
    import Login from "./login.svelte"
    import Register from "./register.svelte"
    import {currentUser} from "../store/user"
    let choice = "connexion" // connexion 1 inscription
    const handleClick = (value)=>{
        choice = value;
    }
</script>

<div class="container">
    <div class="n_mobile">
         <div class="n_mobile_container">
            <Login />
            <Register />
         </div>   
    </div>
    <div class="mobile">
        <div class="choice">
            <span 
            class={choice ==="connexion" ? "act": "nrm"}
            on:click={()=> handleClick("connexion")}>Connexion</span>
            Ou 
            <span 
            class={choice ==="inscription" ? "act": "nrm"}
            on:click={()=> handleClick("inscription")}>Inscription</span>
        </div>
         {#if choice ==="connexion"}
            <Login />
         {:else}
            <Register /> 
        {/if} 
      
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
    }
    .choice{
        width: 100%;
       
        padding: 20px 5px;
        box-sizing: border-box;
        text-align: center;
        font-size:1.3rem
    }
    .act{
        color: rgb(159,56,1)
    }
    .nrm{
        color: black;
    }
    .choice span {
        font-weight: bold;
    }
.n_mobile{
    display: none;
    width: 100%;
    height: 100%;
}
.n_mobile_container{
    display: flex;
    gap: 5px;
}
.mobile {
    display: block;
    width: 100%;
    height: 100%;
}
@media only screen and (min-width:640px){
        .mobile{
        display: none;
        }
        .n_mobile{
            display: block;
        }
    }
</style>