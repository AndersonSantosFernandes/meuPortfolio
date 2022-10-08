function mostraMenu(){

//Função referente ao menú  e o input de cor e rádios de todas as páginas
    var logotipo = window.document.getElementById('logo')
    var menu01 = window.document.getElementById('menu0')
   
    menu01.innerHTML = 
    `
    <center>
    
    <nav id="navegar"> 
    <ul id="ul01">
        <li><a href="index.html">Home</a>         
        </li>
        <li><p class="menu">Assuntos<p> 
            <ul>
                <li><a href="formado.html">Formação</a> </li>
                <li><a href="interesses.html">Interesses</a> </li>
            </ul>
        </li>
        <li><p class="menu">Galeria<p> 
            <ul>                
                <li><a href="fotos.html">Imagens de projetos</a></li>
                <li><a href="videos.html">Vídeos</a></li>   
                           
            </ul>
        </li>
        <li><p class="menu">Descontração<p> 
            <ul>
                <li><a href="calculos.html">Cálculos</a></li>
                <li><a href="redes.html" >Minhas redes</a></li>
            </ul>
        </li>
        <li><p class="menu">Sobre<p> 
            <ul>
                <li><a href="paginaCurriculo.html">Página currículo</a></li>
                <li><a href="certificados.html">Certificados</a></li>            
            </ul>
        </li>
    </ul>
    
    
</nav>
</center>
    `
    logotipo.innerHTML = 
    `
    <a href="index.html">
    <div id="logoIn">

        </div>
        </a>
    `
}   
