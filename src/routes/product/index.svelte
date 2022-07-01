<!--
  this page will have gender and item to fetch data 
  from the server, so it is important to have this elements
  otherwise redirect to index to have it 
  passe the result of the fetch to articles as props


-->
<script>
    import VerticalMenu from "$lib/verticalMenu.svelte";
    import {currentItem} from "../../store/listCategory"
    import Articles from '../../components/articles.svelte'
    console.log('item = ', $currentItem)
    // if item is empty then redirect to /
    // pass item via url par to see ?  
</script>
<!--Add a filter to filter search-->
<VerticalMenu />
<Articles />