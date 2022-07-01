
<script>
    import NavBar from "$lib/navBar.svelte"
    import Footer from "$lib/footer.svelte"
    
</script>
<div class="container">

<NavBar />
<div class="main_container">  
    <slot>
        <!--Display the content of the page-->
    </slot>

</div>
<Footer />
</div>
<style>
    .main_container{
        width: 100%;
       
        box-sizing: border-box;
    }
    @media only screen and (min-width:780px){
        .main_container{
         width: 90% !important;
         margin: auto;
         box-sizing: border-box;
       
    }
    }
    @media only screen and (min-width:1024px){
        .main_container{
        width: 100% !important;
        margin: auto;
        box-sizing: border-box;
      
    }
    }
    @media only screen and (min-width:1280px){
        .main_container{
        width: 95% !important;
        margin: auto;
        box-sizing: border-box;
       
        }
    }

    @media only screen and (min-width:1150px){
        .main_container{
        width: 1150px !important;
        margin: auto;
        box-sizing: border-box;
        }
    }
    .container{
        width: 100%;
        box-sizing: border-box;
        margin: auto;
    }
</style>