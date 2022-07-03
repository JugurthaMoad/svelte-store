<!-- The content of the nav bar -->
<!-- Use the mobile first aproch for M.Q-->
<script>
    import { goto } from '$app/navigation';

    // icons made with svg 
    import I_profil from "./icons/i_profil.svelte"
    import I_cart from "./icons/i_cart.svelte"
    import I_favor from "./icons/i_favor.svelte"
    import I_menu from "./icons/i_menu.svelte"
    import I_close from "./icons/i_close.svelte"
    import SubMenu from "./subMenu.svelte"
    import V_menu from "./v_menu.svelte"
    import I_back from "./icons/i_back.svelte"
    // Link to icons
    import I_link from "$lib/i_link.svelte"
    // to know the current page
    import {currentPage } from '../store/page'
    // to show or not the menu for the mobile design
    let showMenu = false
    // store for current Gender "Femme, Homme, ..."
    import {currentGender} from "../store/choice"
    // store for current list "list for femme ...."
    import {currentList} from "../store/listCategory"
    // store for current item "Sacs ...."
    import {currentItem} from "../store/listCategory"
    // list to passe for vertical menu as props that changes acourding to gender
    let list = $currentList
    // item to passe to passe as props
    // add description
    let item_c = $currentItem
    $: {
        console.log('current path = ', $currentPage)
    }

    // responsible to change the current item
    const changeCurrentItem = (item)=>{
        currentItem.setCurrentItem(item)
        item_c = $currentItem
    }
    // responsible to change the list regarding to the current gender
    const changeList = (gender)=>{
        currentList.setCurrentList(gender)
        return($currentList);
    }
    //this is the current gender for searching 
    const changeGender = (gender)=>{
        currentGender.setCurrentGender(gender)
        list = changeList(gender);
        // after each change gender => no item was selected at the beg
        changeCurrentItem("")
    }
   
    // handle the display of the menu
    const handleShow = ()=>{
        showMenu = !showMenu;
    }
    // all the icons will execute this function
    const handleClick = (path)=>{
         currentPage.changePage(path)
        
        // handle the navigation process
    }

    // vertical menu handler 
    const v_handleClick =(item)=>{
        changeCurrentItem(item)
        action();
        handleShow();
        handleClick('/product')
        goto('/product')
        //handleClick("/")

        // item is the choosen item from the v menu
       
    }
    // sub menu handler 
    const s_handleClick = (item)=>{
        changeGender(item)
        handleClick('/')
        goto('/')
        // item is the choosen item from the sub menu
        // change the list of items for v menu
    }
    const action = ()=>{
        // this function is responsible for all clicks 
        // item is choosen from sub menu 
        // item is choosen from vertical menu 
        // console.log('currentGender = ', $currentGender)
        // console.log('current List ', $currentList)
        // console.log('current item = ', item_c)
        // the goal is the following : 
        /*
          Get the current Gender 
          Get the current Item from cattegory of each gender
          fetch data with this informtations 
          Note : 
          init the current item to " " for each gender 
          ex   : 
          if we change the current gender to Homme then the current item will be ""
          then we fetch all articles related to this gender 
        */
    }

    // this will handle the back click
    const handleBack = ()=>{
        console.log('back is clicked !!!')
        history.back();
    }
</script>
<div class="container">
<div class="sub_container">
    <SubMenu currentGender={ $currentGender} mobile={false} items={["Femme", "Enfant", "Homme", "Autres"]} handleClick={s_handleClick}/>
</div>
<div>
<a href="/">
<span 
on:click={()=>{
handleClick("/")
changeGender("Femme")
changeCurrentItem("")
}}
class="logo">Logo</span>
</a>
</div>
<div class="sub_menu">
    <I_link link={"/profile"}>
        <I_profil handleClick={()=>handleClick("/profile")} currentPage={$currentPage}/>
    </I_link>
    <I_link link={"/cart"}>
        <I_cart handleClick={()=>handleClick("/cart")} currentPage={$currentPage}/>
    </I_link>
    <I_link link={"/favorite"}>
        <I_favor handleClick={()=>handleClick("/favorite")} currentPage={$currentPage}/>
    </I_link>
</div>

</div>

<div class="mobile_container">
    <div class="mb_container">
        <span  class={$currentPage =="/"? "hide":"show"}>
            <I_back  handleClick={handleBack}/>
        </span> 
        <I_menu  handleClick={handleShow}/>
    </div>
    <a href="/">
    <span 
    on:click={()=>{
        handleClick("/")
        changeGender("Femme")
        changeCurrentItem("")
        }}
    class="mobile_container_logo">Logo</span>
</a>
    <div class="sub_menu_mobile">
         <I_link link={"/profile"}>
        <I_profil handleClick={()=>handleClick("/profile")} currentPage={$currentPage}/>
    </I_link>
    <I_link link={"/cart"}>
        <I_cart handleClick={()=>handleClick("/cart")} currentPage={$currentPage}/>
    </I_link>
    <I_link link={"/favorite"}>
        <I_favor handleClick={()=>handleClick("/favorite")} currentPage={$currentPage}/>
    </I_link>
    </div>
    <div 
    on:click|self={handleShow}
    class={showMenu ? "menu_container" : "hide"}>
        <div class="menu">
            <div class="header_menu">
              <SubMenu currentGender={$currentGender} mobile={true} items={["Femme", "Enfant", "Homme", "Autres"]} handleClick={s_handleClick}/>
             <I_close handleClick={handleShow}/>
            </div>
        <V_menu currentItem={item_c} items={list} handleClick={v_handleClick}/>
           
        </div>
    </div>
</div>

<style>
    a {
        display: block;
        text-decoration: none;
        color: inherit;
    }
    /*  Global class   */
    .hide{
        display: none;
    }
    .show{
        display: block
    }
    /* mobile aproch first    */
    .mobile_container{
        width: 100% !important;
        position: relative;
        background-color: transparent;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 0px 1rem;
        align-items:center;
    }
    .mobile_container_logo{
        font-size:1.6rem
    }
    .menu_container{
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100vh;
        box-sizing: border-box;
        width: 100%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.483);
    }
    .menu {
        width: 100%;
        background-color: rgb(0, 0, 0);
        height: 100vh;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column
    }
    .mb_container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2px
    }
    .header_menu {
        width: 100%;

        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
      
    }
 
   
    .container{
       display: none;
    }
    .sub_container{
        min-width: 350px;
        padding-left: 0.8em;
    }
    .logo{
        font-size: 1.8rem;
        display : block;
      
       
    }
    .logo:hover{
        cursor: pointer;
    }
    .sub_menu {
        display: flex;
        padding-right: 1em;
        justify-content: flex-end;
        gap: 15px;
        box-sizing: border-box;
        width: 30%;

    }

    .sub_menu_mobile{
        display: flex;
        gap: 4px;
    }
    @media only screen and (min-width:250px){
        .menu{
        width: 80%;
        }
    }

    @media only screen and (min-width:400px){
        .menu{
        width: 320px;
        }
    }
    @media only screen and (min-width:640px){
        .mobile_container{
        width: 95%;
        padding: 0 1rem,
        }
    }
    /*   mini width = 768px   */
    @media only screen and (min-width:780px){
        .container{
        width: 100%;
        background-color: transparent;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items:center;
        }
        .mobile_container{
            display: none;
        }
    }
    @media only screen and (min-width:1024px){
        .container{
        width: 100%;
        }
    }
    @media only screen and (min-width:1280px){
        .container{
        width: 95%;
        }
    }
    @media only screen and (min-width:1150px){
        .container{
        width: 1150px;
        }
    }
</style>