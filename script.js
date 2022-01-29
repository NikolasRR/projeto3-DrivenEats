
//FUNÇÃO PARA ESCOLHER O PRATO
function selecionarOpcaoDeComida (comidaSelecionada) {

    const opcaoDeComidaJaSelecionada = document.querySelector(".pratos .selecionado");
    
    if (opcaoDeComidaJaSelecionada !== null) {
        opcaoDeComidaJaSelecionada.classList.remove("selecionado");
    }
    
    comidaSelecionada.classList.add("selecionado");
    ativarBotaoDeFecharOPedido();
}

//FUNÇÃO PARA ESCOLHER A BEBIDA
function selecionarOpcaoDeBebida (comidaSelecionada) {

    const opcoeDeBebidaJaSelecionada = document.querySelector(".bebidas .selecionado");
    
    if (opcoeDeBebidaJaSelecionada !== null) {
        opcoeDeBebidaJaSelecionada.classList.remove("selecionado");
    }
    
    comidaSelecionada.classList.add("selecionado");
    ativarBotaoDeFecharOPedido();
}

//FUNÇÃO PARA ESCOLHER A SOBREMESA
function selecionarOpcaoDeSobremesas (comidaSelecionada) {

    const opcoeDeSobremesaJaSelecionada = document.querySelector(".sobremesas .selecionado");
    
    if (opcoeDeSobremesaJaSelecionada !== null) {
        opcoeDeSobremesaJaSelecionada.classList.remove("selecionado");
    }
    
    comidaSelecionada.classList.add("selecionado");
    ativarBotaoDeFecharOPedido();
}

//FUNÇÃO PARA ATIVAR O BOTÃO DE FECHAR PEDIDO
function ativarBotaoDeFecharOPedido() {

    const comidaSelecionada = document.querySelector(".pratos .selecionado");
    const bebidaSelecionada = document.querySelector(".bebidas .selecionado");
    const sobremesaSelecionada = document.querySelector(".sobremesas .selecionado");

    if (comidaSelecionada !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        const ligarButtonVerde = document.querySelector(".botaoativado");
    ligarButtonVerde.classList.remove("escondido");
    const desligarButtonCinza = document.querySelector(".botaodesativado");
    desligarButtonCinza.classList.add("escondido");
    }

}
