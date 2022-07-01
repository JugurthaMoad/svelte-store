<script>
    import Comment from './comment.svelte'
    let show = false;
    const handleShow = ()=>{
        console.log('comment')
        show = !show
    }
</script>

<div class="container">
    <h3>Commentaires des clients ( 4482 )</h3>
    <div class="comment_container">
        <!--pagination for big screens-->
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
    <div class="comment_container_mobile">
        <Comment />
        <span 
        on:click={handleShow}
        class="btn">voir plus</span>
        <div 
        on:click|self={handleShow}
        class={show ? "comments":"hide"}>
            <div>
                comments add close icon after
            </div>
        </div>
    </div>
</div>

<style>
    .hide{
        display: none;
    }
    .comments{
        display: block;
        position: fixed;
        top: 0px;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.852);
    }
    .comments div{
        width: 80%;
        height: 100vh; 
        position: fixed;
        right: 0px;
        background-color: white;
    }
    .container{
        width: 100%;
        border: 3px solid red;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .comment_container{
       display: none;
    }
    .comment_container_mobile{
        width:100%;
        display: block;
    }
    .btn{
        display: flex;
        justify-content:center;
        align-items:center;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        background-color: dimgrey;
    }
    @media only screen and (min-width:640px){
        .comment_container{
            display:block;
        width: 100%;
    }
    .comment_container_mobile{
        display:none;
    }
    }
</style>