<script>
 import Articles from '../components/articles.svelte'
 import VerticalMenu from "$lib/verticalMenu.svelte"
 import StartContent from "../components/startContent.svelte"
 import { onMount } from 'svelte';
 import {currentPage} from '../store/page'

 onMount(()=> currentPage.changePage("/"))
</script>


<div class="container">
    <div class="hero">
    </div>
    <StartContent />
</div>

<style>
    .container{
        width: 100%;
        box-sizing: border-box;
        padding-bottom: 10px;
    }
    .hero{
        width: 100%;
        height: 30vh !important;
        background-image: url("../fond1.jpg");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center; 
    }
</style>