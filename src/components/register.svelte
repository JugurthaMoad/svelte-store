<script>
    const handleForm = ()=>{
        console.log('validation of the form')
    }
</script>
<div class="container">
    <form on:submit|preventDefault={handleForm}>
        <h3>Inscription</h3>
        <div class="input_container">
            <label for="email">Email: </label>
            <input type="mail" id="email" name="email" placeholder="Mail"/>
        </div>
        <div class="input_container">
            <label for="password">Mot de passe: </label>
            <input type="password" id="email" name="password" placeholder="Mot de passe"/>
        </div>
        <button>connexion</button>
    </form>
</div>

<style>
.container{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.input_container{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
    margin: 10px auto;
}
label{
    display: block;
    color: gray;
    font-size: 0.5em;
 
}
input {
   padding: 10px;
   outline: none;
   border:1px solid gray;
   border-radius: 5px;
 }
 form button {
    padding: 15px;
    box-sizing: border-box;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: 0px;
    width: 200px;
    margin:10px auto;
 }
 form button:hover{
    cursor: pointer;
 }
</style>