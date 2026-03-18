function verificarPromos() {
    let p = parseFloat(document.getElementById('total').value);
    let lista = "";
    if (p >= 40) lista += "Cupom OK. ";
    if (p >= 80) lista += "Frete Grátis. ";
    if (p >= 120) lista += "Ganhou Brinde!";
    document.getElementById('saida').innerText = lista;
}