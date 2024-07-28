$(document).ready(function(){
    //botao de NOVA IMAGEM+
    $('header button').click(function(){
        $('form').slideDown()
    })
    
    //Botao cancelar
    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

     //botao de adicionar nova imagem pelo url
     $('form').on('submit', function(e){
        e.preventDefault();

        const imagemNova = $('#imagem-nova').val()
        const novoConteudo = $('<li style="display: none"></li>')

        $(`<img src="${imagemNova}">`).appendTo(novoConteudo)
        $(`<div class="overlay-image-link">
                <a href="${imagemNova}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>`).appendTo(novoConteudo)

            $(novoConteudo).appendTo('ul')
            $(novoConteudo).fadeIn(700);
            $(imagemNova).val(' ')
        

        
    })
})



