const imagemVisualizacao = document.getElementById('imagem-visualizacao')

const verdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm']

let imagemSelecionada = 1
let tamanhoSelecionado = 1

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg"
}

function trocasrTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    
}


