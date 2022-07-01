
<div class="comment">
    <div class="comment_container">
        <div>
            contenue du commentaire
        </div>
        <div>
            photos du comentaire
        </div>
    </div>
</div>

<style>
       .comment{
        width: 100%;
       
        border: 3px solid red;
        box-sizing: border-box;
        padding: 5px;
       
    }
    .comment_container{
        width: 100%;
        box-sizing: border-box;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
    }
    .comment_container div{
        width: 100%;
        box-sizing: border-box;

    }
    @media only screen and (min-width:640px){
        .comment_container{
            width: 100%;
        box-sizing: border-box;
        border: 1px solid black;
        display: flex;
        flex-direction: row;
        }
        .comment_container div{
        width: 50%;
        
        box-sizing: border-box;
    }  
    }
</style>