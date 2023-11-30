pontosJog = 0
pontosOpon = 0
function jogar() {
    let opo = window.document.getElementById('apjog')
    let jog = window.document.getElementById('ddd1')
    let image = window.document.getElementById('ddd')
    let msg = window.document.getElementById('msg')
    let res1 = window.document.getElementById('res')
    let ppt = window.document.getElementsByName('jok')
    let oponente = Number.parseInt(Math.random() * 3 + 1) //Random máquina
    let ptJogador = window.document.getElementById('pontos-jogador')
    let ptOponente = window.document.getElementById('pontos-oponente')
    if (ppt[0].checked) {
        jogador = 1
    }
    else if (ppt[1].checked) {
        jogador = 2
    }
    else if (ppt[2].checked) {
        jogador = 3
    }
    // 1= pedra 2= papel 3= tesoura
    if (oponente == jogador) {
        msg.innerHTML =
            `Nós dois jogamos iguais  camarada!!!
    <audio id="music" autoplay>
    <source src="audio/empate.mp3" type = "audio/mpeg">
    </audio>
                `
        res1.innerHTML = `Ficamos empatados...
    <br>
    <br>Seus pontos: ${pontosJog}
    <br>Meus pontos: ${pontosOpon}
    `
        image.src = 'imagens/jkp.png'
        jog.src = 'imagens/jkp.png'
        opo.innerHTML =
            ``
    }
    else if (jogador == 1 && oponente == 2) {
        pontosOpon = pontosOpon + 1
        res1.innerHTML =
            `Eu ganhei, meu papel embrulhou sua pedra
     <br>
     <br>Seus pontos: ${pontosJog}
    <br>Meus pontos: ${pontosOpon}
     <audio id="music" autoplay>
    <source src="audio/perdeu.mp3" type = "audio/mpeg">
    </audio>
     `
        msg.innerHTML = `Você escolheu pedra `
        image.src = 'imagens/papel.png'
        jog.src = 'imagens/pedra.png'
        opo.innerHTML = `Eu escolhi papel
    `
    }
    else if (jogador == 1 && oponente == 3) {
        pontosJog = pontosJog + 1
        res1.innerHTML =
            `Você ganhou, sua pedra quebrou minha tesoura
     <br>
     <br>Seus pontos: ${pontosJog}
    <br>Meus pontos: ${pontosOpon}
     <audio id="music" autoplay>
    <source src="audio/ganhou.mp3" type = "audio/mpeg">
    </audio>
     `
        msg.innerHTML = ` Você escolheu pedra`
        image.src = 'imagens/tesoura.png'
        jog.src = 'imagens/pedra.png'
        opo.innerHTML = `Eu escolhi tesoura
   `
    }
    else if (jogador == 2 && oponente == 1) {
        pontosJog = pontosJog + 1
        res1.innerHTML =
            `Ganhou,  seu papel embrulhou minha pedra
     <br>
     <br>Seus pontos: ${pontosJog}
     <br>Meus pontos: ${pontosOpon}
     <audio id="music" autoplay>
     <source src="audio/ganhou.mp3" type = "audio/mpeg">
     </audio>
     `
        msg.innerHTML = `Você escolheu papel`
        image.src = 'imagens/pedra.png'
        jog.src = 'imagens/papel.png'
        opo.innerHTML = `Eu escolhi pedra
    `
    }
    else if (jogador == 2 && oponente == 3) {
        pontosOpon = pontosOpon + 1
        res1.innerHTML =
            `Perdeu, minha tesoura cortou seu papel
    <br>
    <br>Seus pontos: ${pontosJog}
    <br>Meus pontos: ${pontosOpon}
    <audio id="music" autoplay>
    <source src="audio/perdeu.mp3" type = "audio/mpeg">
    </audio>
    `
        msg.innerHTML = `Você escolheu papel`
        image.src = 'imagens/tesoura.png'
        jog.src = 'imagens/papel.png'
        opo.innerHTML = `Eu escolhi tesoura
     `
    }
    else if (jogador == 3 && oponente == 1) {
        pontosOpon = pontosOpon + 1
        res1.innerHTML =
            `Perdeu, minha pedra quebrou sua tesoura
    <br>
    <br>Seus pontos: ${pontosJog}
    <br>Meus pontos: ${pontosOpon}
    <audio id="music" autoplay>
    <source src="audio/perdeu.mp3" type = "audio/mpeg">
    </audio>
    `
        msg.innerHTML = `Você escolheu tesoura`
        image.src = 'imagens/pedra.png'
        jog.src = 'imagens/tesoura.png'
        opo.innerHTML = `Eu escolhi pedra
     `
    }
    else if (jogador == 3 && oponente == 2) {
        pontosJog = pontosJog + 1
        res1.innerHTML =
            `Ganhou, sua tesoura cortou meu papel
    <br>
    <br>Seus pontos: ${pontosJog}
    <br>Meus pontos: ${pontosOpon}
    <audio id="music" autoplay>
    <source src="audio/ganhou.mp3" type = "audio/mpeg">
    </audio>
    `
        msg.innerHTML = `Você escolheu tesoura`
        image.src = 'imagens/papel.png'
        jog.src = 'imagens/tesoura.png'
        opo.innerHTML = `Eu escolhi papel
   `
    }
    limite = 10
    if (pontosJog == limite || pontosOpon == limite) {
        if (pontosJog == limite) {
            var principal = window.document.getElementById('main')
            principal.innerHTML = `<h1>Você fez ${pontosJog} pontos e eu fiz ${pontosOpon}<br>
         Parabéns!!! Você é um oponente à minha altura!<br>
         Mas na próxima não será tão fácil</h1><br><br>
        <input id="botao" type="button" value="Reiniciar" onclick="reiniciar()">
        <audio id="music" autoplay>
        <source src="audio/applausos.wav" type = "audio/mpeg">
        </audio>
        `
           
        } else if (pontosOpon == limite) {
            var principal = window.document.getElementById('main')
            principal.innerHTML = `<h1>Eu fiz ${pontosOpon} pontos e você fez ${pontosJog}<br>
        Haa! Você até que tentou, mas ainda não está à minha altura<br>
        Na próxima quem sabe eu deixo voçê ganhar</h1><br><br>
        <input id="botao" type="button" value="Reiniciar" onclick="reiniciar()">
        <audio id="music" autoplay>
        <source src="audio/vaia.wav" type = "audio/mpeg">
        </audio>
        `
           
        }
    }
}
function reiniciar() {
    pontosJog = 0
    pontosOpon = 0
    var principal = window.document.getElementById('main')
    var principal2 = window.document.getElementById('respostaDireita')
    principal2.innerHTML =
        `
        <div id="apjog"> </div>        
        <br>
        <div id="msg">Quem marcar ${limite} pontos primeiro vence <br>Vamos ver... Eu ou você... hahaha!</div>
        <br>
        <div id="res">
            Escolha pedra, papel ou tesoura
        </div>
    `
    principal.innerHTML =
        `
        <center>
        <section>
        <div id="jogador">
            <img id="ddd1" src="imagens/jkp.png" alt="imgs">
        </div>        
        <p>Pedra <input type="radio" name="jok" id="pedra">
        Papel <input type="radio" name="jok" id="papel">
        Tesoura <input type="radio" name="jok" id="tesoura">
        </p>
        <p>
            <input id="botao" type="button" value="Jogar" onclick="jogar()">
        </p>
        <div id="imagem">
            <img id="ddd" src="imagens/jkp.png" alt="imgs">
        </div>        
        </section>
        </center>
    `
}    