function calcularBhaskara(){   
    var video = window.document.getElementById('iframe')
    var mostrar = window.document.getElementById('resultadoBhaskara')    
    var numa = document.getElementById('valora')
    var numb = document.getElementById('valorb')
    var numc = document.getElementById('valorc')       
    var vlra = Number(numa.value)
    var vlrb = Number(numb.value)
    var vlrc = Number(numc.value)
    if(numa.value.length == 0 || numb.value.length == 0 || numc.value.length == 0 ){
        window.alert("Todos os campos devem estar preenchidos!")
    } 
    else{
    var delta = Math.pow(vlrb,2)-(4*vlra*vlrc)
    var raiz = Math.sqrt(delta)
    var xl = (-vlrb + raiz)/(2*vlra)
    var xll = (-vlrb - raiz)/(2*vlra)
    mostrar.innerHTML = 
    `    <h3>   A = ${vlra}<br>
                B = ${vlrb}<br>
                C = ${vlrc}<br>
           Delta: ${delta} <br> 
     Raíz de Delta: ${raiz}<br> 
                 X': ${xl} <br> 
              X'': ${xll} </h3>
              
                        
              `/*<input type="button" value="Reset" onclick="resetar()">*/
              if (xl == -2 && xll == 3){
                video.innerHTML = 
                `
                <br><br>
                <h1>Origem da fórmula de Bhaskara</h1>
                <br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xcaqcEkTKK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <audio id="music" autoplay>
                <source src="audio/win.mp3" type = "audio/mpeg">
               </audio>
                `
               /* <iframe width="560" height="315" src="https://www.youtube.com/embed/QkVgC24Hv-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>*/
               
              }
              else{
                  video.innerHTML = 
                  `
                  <h2>Para aparecer o vídeo tente novamente até que o resultado das raízes sejam -2 e 3.
                  <br>
                  Não conseguiu. Tente -1, 1 e 6 que agora vai.
                  </h2>
                  <img width="500" height="400" src="../Meu-primeiro-site-main/imagens/duvida.gif" alt="bhaskara">
                  
                
                  <audio id="music" autoplay>
                  <source src="audio/perdeu.mp3" type = "audio/mpeg">
                 </audio>
                  `
              }

   }
}

function calcularFibonacci()
{

    var entra1 = document.getElementById('fibonacci')
    var entra2 = Number.parseInt(entra1.value)
    if(entra1.value.length == 0){
        window.alert('O campo deve estar preenchido')
    }else{
    var i=0
    var sequenciaf = 0
    for(i=0; i<=entra2; i++){
        sequenciaf = sequenciaf+i
    }
    var exibir1 = document.getElementById('resultadoFibonacci')
    exibir1.innerHTML = 
    `
   
    <h1>A sequencia de Fibonacci até o número  ${entra2} é: <br>${sequenciaf}</h1>
    <audio id="music" autoplay>
    <source src="../audio/win.wav" type = "audio/mpeg">
   </audio>
    `
}
}

function calcularFatorial()
{
    var verify =  window.document.getElementById('fatorial')
    var verify1 = Number.parseInt(verify.value)
    if(verify.value.length == 0){
        window.alert('Ocampo deve estar preenchido')
    }else{
    var c = verify1
    var fatoria02 = 1
    do{
        fatoria02 = fatoria02 * c
        c--
    }while(c >=1)   
    var exibe = window.document.getElementById('resultadoFatorial')
    exibe.innerHTML = 
    `
   
    <h1>O fatorial do número ${verify1} é: </h1>
    <br>
    <h1 id="numeroFat">${fatoria02}</h1>
    <audio id="music" autoplay>
    <source src="audio/empate.mp3" type = "audio/mpeg">
    </audio>
        `
    }


}

function converteTemperatura()
{
    var tempe = window.document.getElementById('conversao')
    var tempe1 = Number.parseFloat(tempe.value)
    var escolhe = window.document.getElementsByName('temperatura')
        if(tempe.value.length == 0){
            window.alert('O campo temperatura não deve estar vazio')
        }else{
        if(escolhe[0].checked){            
            var convertid = (tempe1 * 9/5) + 32 
            var convertido = parseFloat(convertid.toFixed(2))
            var exibe = window.document.getElementById('resultadoConversao')
        exibe.innerHTML = 
        `
        <h1> ${tempe1} Graus Celcius equivalem a <br> ${convertido} Farenheit</h1>
        <audio id="music" autoplay>
        <source src="audio/empate.mp3" type = "audio/mpeg">
        </audio>
        `
    
        }else if(escolhe[1].checked){
            var convertid1 = (tempe1 - 32) * 5/9
            var convertido1 = parseFloat(convertid1.toFixed(2))
            var exibe = window.document.getElementById('resultadoConversao')
        exibe.innerHTML = 
        `
        <h1>${tempe1} Farenheit equivalem a <br>${convertido1} Graus Celcius</h1>.
        <audio id="music" autoplay>
        <source src="audio/empate.mp3" type = "audio/mpeg">
        </audio>
        `
        }
    }
    }
   
   