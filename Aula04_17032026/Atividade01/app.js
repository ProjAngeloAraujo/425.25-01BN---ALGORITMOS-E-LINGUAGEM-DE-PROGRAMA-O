// Script (logic.js)
function verificarMeta() {
    let vendas = parseFloat(document.getElementById('vendas').value);
    let resultado = (vendas >= 100) ? "Meta atingida!" : "Meta não atingida.";
    document.getElementById('resp').innerText = resultado;
}