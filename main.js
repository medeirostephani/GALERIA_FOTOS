$(document).ready(function(){ /*todo codido jquery deve estar dentro dessa function*/
    $('header button').click(function(){ /*aparecer o form de inserir foto quando clicar no botão de add*/
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){ /*recolher o form quando clicar em cancelar*/
        $('form').slideUp();
    })

    $('form').on('submit', function(e) { /*procedimentos quando clicar no botao de enviar*/
        e.preventDefault(); /*nao atualizar após o envio*/
        const enderecoNovaImagem = $('#endereco-imagem-nova').val(); /*variavel atribuindo o valor do input link url*/ /*.val = .value no JS)*/
        const novoItem = $('<li style="display: none"></li>'); /*cria variavel para add item (foto), deixa o novo item oculto*/
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem); /*insere a url enviada na tag img e envia pra dentro da tag <li> da const novoItem*/
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>)
        `).appendTo(novoItem); /*acrescenta novas linhas da tag <div> à tag <li> do NovoItem*/
        $(novoItem).appendTo('ul'); /*envia o novo cod do notoItem pra dentro da tag <ul> html*/
        $(novoItem).fadeIn(1000); /*efeito fadeIn de 1s (1000ms) quando aparecer a nova imagem*/
        $('#endereco-imagem-nova').val('') /*limpa o campo url*/
    })
})