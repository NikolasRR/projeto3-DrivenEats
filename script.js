
//FUNÇÃO PARA ESCOLHER O PRATO
function selecionarOpcaoDeComida (comidaSelecionada) {

    //TENTO PUXAR ALGUM ELEMENTO COM CLASSES PRATOS E SELECIONADO
    const opcaoDeComidaJaSelecionada = document.querySelector(".pratos .selecionado");

    //SE HOUVER, ELE É DESMARCADO
    if (opcaoDeComidaJaSelecionada !== null) {
        opcaoDeComidaJaSelecionada.classList.remove("selecionado");
    }
    //E A NOVA OPÇÃO É MARCADA
    comidaSelecionada.classList.add("selecionado");

    //POR FIM, CHAMO A FUNÇÃO ABAIXO PARA VERIFICAR SE O BOTÃO DE FECHAR PEDIDO PODE SER ATIVADO
    verificarEAtivarBotaoDeFecharOPedido();

}

//FUNÇÃO PARA ESCOLHER A BEBIDA
function selecionarOpcaoDeBebida (bebidaSelecionada) {

    //TENTO PUXAR ALGUM ELEMENTO COM CLASSES BEBIDAS E SELECIONADO
    const opcoeDeBebidaJaSelecionada = document.querySelector(".bebidas .selecionado");

    //SE HOUVER, ELE É DESMARCADO
    if (opcoeDeBebidaJaSelecionada !== null) {
        opcoeDeBebidaJaSelecionada.classList.remove("selecionado");
    }
    //E A NOVA OPÇÃO É MARCADA
    bebidaSelecionada.classList.add("selecionado");

    //POR FIM, CHAMO A FUNÇÃO ABAIXO PARA VERIFICAR SE O BOTÃO DE FECHAR PEDIDO PODE SER ATIVADO
    verificarEAtivarBotaoDeFecharOPedido();

}

//FUNÇÃO PARA ESCOLHER A SOBREMESA
function selecionarOpcaoDeSobremesas (sobremesaSelecionada) {

    //TENTO PUXAR ALGUM ELEMENTO COM CLASSES SOBREMESAS E SELECIONADO
    const opcoeDeSobremesaJaSelecionada = document.querySelector(".sobremesas .selecionado");

    //SE HOUVER, ELE É DESMARCADO
    if (opcoeDeSobremesaJaSelecionada !== null) {
        opcoeDeSobremesaJaSelecionada.classList.remove("selecionado");
    }
    //E A NOVA OPÇÃO É MARCADA
    sobremesaSelecionada.classList.add("selecionado");

    //POR FIM, CHAMO A FUNÇÃO ABAIXO PARA VERIFICAR SE O BOTÃO DE FECHAR PEDIDO PODE SER ATIVADO
    verificarEAtivarBotaoDeFecharOPedido();

}

//FUNÇÃO ATIVAR O BOTÃO DE FECHAR PEDIDO
function verificarEAtivarBotaoDeFecharOPedido () {

    //PUXO AS OPÇÕES SELECIONADAS 
    const comidaSelecionada = document.querySelector(".pratos .selecionado");
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");

    //VERIFICO SE ALGUMA DELAS RETORNOU NULL, SE SIM, É PORQUE O COMBO NÃO FOI COMPLETAMENTE SELECIONADO 
    if (comidaSelecionada !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        //SE A VERIFICAÇÃO DEU CERTO, ENTÃO ESCONDO O BOTÃO CINZA E MOSTRO O BOTÃO VERDE
        const ligarButtonVerde = document.querySelector(".botaoativado");
        ligarButtonVerde.classList.remove("escondido");
        const desligarButtonCinza = document.querySelector(".botaodesativado");
        desligarButtonCinza.classList.add("escondido");
    }

}

//FUNÇÃO PARA APARECER JANELA DE CONFIRMAR PEDIDO
function aparecerJanelaDeConfirmarPedido () {

    //PUXO OS ELEMENTOS DOS ITENS SELECIONADOS
    const nomeComidaSelecionada = document.querySelector(".pratos .selecionado h4");
    const nomeBebidaSelecionada = document.querySelector(".bebidas .selecionado h4");
    const nomeSobremesaSelecionada = document.querySelector(".sobremesas .selecionado h4");
    const precoComidaSelecionada = document.querySelector(".pratos .selecionado h5");
    const precoBebidaSelecionada = document.querySelector(".bebidas .selecionado h5");
    const precoSobremesaSelecionada = document.querySelector(".sobremesas .selecionado h5");

    //PUXO APENAS OS TEXTOS DOS ELEMENTOS HTML
    const nomeComidaSelecionadaTexto = nomeComidaSelecionada.textContent;
    const nomeBebidaSelecionadaTexto = nomeBebidaSelecionada.textContent;
    const nomeSobremesaSelecionadaTexto = nomeSobremesaSelecionada.textContent;
    const precoComidaSelecionadaTexto = precoComidaSelecionada.textContent;
    const precoBebidaSelecionadaTexto = precoBebidaSelecionada.textContent;
    const precoSobremesaSelecionadaTexto = precoSobremesaSelecionada.textContent;

    //RETIRO O R$ DAS STRINGS DOS PREÇOS DOS ITENS
    const precoComidaSemR$ = precoComidaSelecionadaTexto.replace("R$ ", "");
    const precoBebidaSemR$ = precoBebidaSelecionadaTexto.replace("R$ ", "");
    const precoSobremesaSemR$ = precoSobremesaSelecionadaTexto.replace("R$ ", "");

    //TROCO O PONTO PELA VÍRGULA E TRANSFORMO EM FLOAT, A TROCA É NECESSÁRIA POIS O FLOAT NÃO ENTENDE VÍRGULA
    const precoComidaFloat = parseFloat(precoComidaSemR$.replace(",", "."));
    const precoBebidaFloat = parseFloat(precoBebidaSemR$.replace(",", "."));
    const precoSobremesaFloat = parseFloat(precoSobremesaSemR$.replace(",", "."));

    //CALCULO O TOTAL COM 2 DIGITOS DECIMAIS, DEPOIS TRANSFORMO EM STRING SUBSTITUINDO O PONTO PELA VÍRGULA
    const precoTotal = (precoComidaFloat + precoBebidaFloat + precoSobremesaFloat).toFixed(2);
    const precoTotalString = (precoTotal.toString()).replace(".", ",");

    //COLOCO NO HTML AS OPÇÕES QUE FORAM SELECIONADAS COM SEUS RESPECTIVOS PREÇOS, E O TOTAL
    document.querySelector("#prato").innerHTML = nomeComidaSelecionadaTexto;
    document.querySelector("#bebida").innerHTML = nomeBebidaSelecionadaTexto;
    document.querySelector("#sobremesa").innerHTML = nomeSobremesaSelecionadaTexto;
    document.querySelector("#precoPrato").innerHTML = precoComidaSemR$;
    document.querySelector("#precoBebida").innerHTML = precoBebidaSemR$;
    document.querySelector("#precoSobremesa").innerHTML = precoSobremesaSemR$;
    document.querySelector("#precoTotal").innerHTML = "R$ " + precoTotalString;
    
    //RETIRO A CLASSE ESCONDIDO PARA QUE A JANELA ENFIM APAREÇA
    document.querySelector(".confirmarPedidoBackground").classList.remove("escondido");

}

//FUNÇÃO PARA ESCONDER A JANELA DE CONFIRMAR PEDIDO
function fecharJanelaDeConfirmarPedido () {
    document.querySelector(".confirmarPedidoBackground").classList.add("escondido");
}


//FUNÇÃO PARA ENVIAR MENSAGEM PARA O RESTAURANTE
function enviarMensagemWhatsappRestaurante () {
    
    //PUXO OS ITENS SELECIONADOS
    const nomeComidaSelecionada = document.querySelector(".pratos .selecionado h4");
    const nomeBebidaSelecionada = document.querySelector(".bebidas .selecionado h4");
    const nomeSobremesaSelecionada = document.querySelector(".sobremesas .selecionado h4");
    const precoComidaSelecionada = document.querySelector(".pratos .selecionado h5");
    const precoBebidaSelecionada = document.querySelector(".bebidas .selecionado h5");
    const precoSobremesaSelecionada = document.querySelector(".sobremesas .selecionado h5");

    //PUXO APENAS OS TEXTOS DO HTML
    const nomeComidaSelecionadaTexto = nomeComidaSelecionada.textContent;
    const nomeBebidaSelecionadaTexto = nomeBebidaSelecionada.textContent;
    const nomeSobremesaSelecionadaTexto = nomeSobremesaSelecionada.textContent;
    const precoComidaSelecionadaTexto = precoComidaSelecionada.textContent;
    const precoBebidaSelecionadaTexto = precoBebidaSelecionada.textContent;
    const precoSobremesaSelecionadaTexto = precoSobremesaSelecionada.textContent;

    //RETIRO O R$ DAS STRINGS DOS PREÇOS DAS COMIDAS
    const precoComidaSemR$ = precoComidaSelecionadaTexto.replace("R$ ", "");
    const precoBebidaSemR$ = precoBebidaSelecionadaTexto.replace("R$ ", "");
    const precoSobremesaSemR$ = precoSobremesaSelecionadaTexto.replace("R$ ", "");

    //TROCO O PONTO PELA VÍRGULA E TRANSFORMO EM FLOAT, A TROCA É NECESSÁRIA POIS O FLOAT N ENTENDE VÍRGULA
    const precoComidaFloat = parseFloat(precoComidaSemR$.replace(",", "."));
    const precoBebidaFloat = parseFloat(precoBebidaSemR$.replace(",", "."));
    const precoSobremesaFloat = parseFloat(precoSobremesaSemR$.replace(",", "."));

    //CALCULO O TOTAL DO COM 2 DIGITOS DECIMAIS, DEPOIS TRANSFORMO EM STRING
    const precoTotal = (precoComidaFloat + precoBebidaFloat + precoSobremesaFloat).toFixed(2);
    const precoTotalString = precoTotal.toString();

    //LANÇO PROMPTS PARA PEDIR O NOME E ENDEREÇO
    const nome = prompt("Por favor, informe seu nome");
    const endereco = prompt("Por favor, informe seu endereço");

    //CRIO A MENSAGEM INSERINDO OS ITENS SELECIONADOS, VALOR TOTAL, NOME E ENDEREÇO. NÃO CONSIGO QUEBRAR A LINHA
    let mensagemParaORestaurante = `Olá, gostaria de fazer o pedido:\n-Prato: ${nomeComidaSelecionadaTexto}\n-Bebida: ${nomeBebidaSelecionadaTexto}\n-Sobremesa: ${nomeSobremesaSelecionadaTexto}\nTOTAL: R$ ${precoTotalString}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    
    //COLOCO A MENSAGEM NO FORMATO QUE O WHATSAPP ACEITA
    let mensagemFormatada = encodeURIComponent(mensagemParaORestaurante);

    //ABRE UMA NOVA JANELA NO NAVEGADOR SEGUINDO O LINK QUE ABRIRÁ A CONVERSA NO WHATSAPP COM O RESTAURANTE
    window.open('https://wa.me/5571992753283?text=' + mensagemFormatada);
}