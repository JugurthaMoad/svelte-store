<script>
 import Article from "./article.svelte"; 
 import { goto } from '$app/navigation';
 const handleClick = (id)=>{
   console.log('id = ', id)
   goto('/product/{id}')
 }
</script>


<div class="container">
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
 <Article {handleClick}/>
</div>
<style>
 .container{
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(1, 1fr);
 
 }
 @media only screen and (min-width:280px){
.container{
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
 
 }
    }
 @media only screen and (min-width:640px){
.container{
  width: 100%;
  display: grid;
  padding: 0px 20px;
  gap:6px;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
 
 }
    }
</style>