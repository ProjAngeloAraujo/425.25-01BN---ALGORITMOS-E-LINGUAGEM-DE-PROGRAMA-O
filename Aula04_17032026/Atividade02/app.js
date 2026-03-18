function verificarFrete() {
    let valor = parseFloat(document.getElementById('pedido').value);
    let tipo;
    if (valor >= 80) tipo = "Frete grátis";
    else if (valor >= 40) tipo = "Frete normal";
    else tipo = "Sem frete grátis";
    console.log(tipo);
}