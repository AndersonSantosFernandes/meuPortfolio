function mudarVideos(){
    var videoDiv = window.document.getElementById('iframe')
    var selecao = window.document.getElementById('escolhe')
    

    if(selecao.value == 0)
    {
        videoDiv.innerHTML=`
        <br><br>
        <h2 id="h2cor">
            Selecione um video na lista e clique em tocar 
        </h2>
        
        `
    }
    else if(selecao.value == 1)
    {
        videoDiv.innerHTML=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xcaqcEkTKK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
    }
    else if(selecao.value == 2)
    {
        videoDiv.innerHTML = 
        `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dRCGAxCyM2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    }
    else if(selecao.value == 3)
    {
        videoDiv.innerHTML = 
        `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D0GcEmzcniw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `

    }
    else if(selecao.value == 4)
    {

    }
    else if(selecao.value == 5)
    {

    }
    else if(selecao.value == 6)
    {

    }

        
}