
<script>
    import Nav from "./nav.svelte"

</script>

<nav>
    <Nav />
</nav>

<style>
    nav {
        width: 100%;
        height: 50px;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(13, 18, 22);
        color: white !important;
    }
    @media only screen and (min-width:780px){
        nav{
        width: 100%;
        height: 60px;
       
        margin: 0px;
        box-sizing: border-box;
        border-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(13, 18, 22);
        color: white !important;
        }
    }
</style>