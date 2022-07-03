<!--change this metho because of the speed ...-->
<script>
    import {currentPage } from "../store/page"
    let show = true;
    $: {
        if($currentPage == "/profile" || $currentPage =="/cart" || $currentPage =="/favorite"){
            show = false;
        }else{
            show = true;
        }
    }
</script>
<footer class={show ? "ftr" : "hide"}>
    Copyright (c) Moad jugurtha
</footer>

<style>
     .hide{
        display: none;
     }
     .ftr {
        width: 100%;
        height: 30px; 
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(13, 18, 22);
        color: white !important;

    }
</style>