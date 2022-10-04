function mudarVideos(){
    var videoDiv = window.document.getElementById('iframe')
    var selecao = window.document.getElementById('escolhe')
    var select = Number.parseInt(selecao.value)

    switch(select)
    { 
        case 0:
            videoDiv.innerHTML=`         
            <img id="ilusao" src="imagens/gifexagono.gif" alt="">        
            `
        break    
        case 1:
            videoDiv.innerHTML=`
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xcaqcEkTKK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `    
        break
        case 2:
            videoDiv.innerHTML = 
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dRCGAxCyM2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            ` 
        break
        case 3:
            videoDiv.innerHTML = 
            `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/D0GcEmzcniw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `
        break
        case 4:
            videoDiv.innerHTML = 
            `
            <h1>Opção 4 vazia</h1>
            `
        break
        case 5:
            videoDiv.innerHTML = 
            `
            <h1>Opção 5 vazia</h1>
            <img id="ilusao" src="imagens/gifexagono.gif" alt=""> 
            `
        break
        default:
            videoDiv.innerHTML = 
            `
            <h1>Opção inválida</h1>
            `
        break    
    }

        
}