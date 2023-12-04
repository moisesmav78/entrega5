// script.js

function verificarPedido() {
    var sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    var sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    var sticker3 = parseInt(document.getElementById('sticker3').value) || 0;

    var totalStickers = sticker1 + sticker2 + sticker3;
    var resultadoElement = document.getElementById('resultado');

    if (totalStickers <= 10) {
        resultadoElement.textContent = "Llevas " + totalStickers + " stickers.";
    } else {
        resultadoElement.textContent = "Llevas demasiados stickers.";
    }
}
