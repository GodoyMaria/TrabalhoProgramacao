var imgAtual = "Imagens/Barbie02.jpg"
var imgAnterior = "Imagens/Barbie01.jpg"

function trocar() {
    document.getElementById("figura").src = imgAtual
    let aux = imgAtual
    imgAtual = imgAnterior
    imgAnterior = aux
}