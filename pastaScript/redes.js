function exibeEmail(){
    var email = window.document.getElementById('mail')
    email.innerHTML = 
    `
    <h1>andersantfer@gmail.com</h1>
    <br>
    <input type="button" value="Voltar" onclick="ocultarEmail()" >
    <img id="eu"  src="imagens/eu sem fundo.png" alt="">
    `
    

}

function ocultarEmail(){
    var email = window.document.getElementById('mail')
    email.innerHTML = 
    `
    <img src="imagens/gmail.gif" id="gmal" alt="" onclick="exibeEmail()">
          
    `
}