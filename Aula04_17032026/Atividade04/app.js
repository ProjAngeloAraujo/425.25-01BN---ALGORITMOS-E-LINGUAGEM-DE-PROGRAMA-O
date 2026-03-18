function verificarBonus() {
    let v = parseFloat(document.getElementById('vendasVendedor').value);
    if (v >= 500) alert("Meta atingida");
    if (v >= 1000) alert("Ganhou Bônus!");
}