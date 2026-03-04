

function Media() {

    const N1 = Number(document.getElementById("N1").value);
    const N2 = Number(document.getElementById("N2").value);
    const Resultado = document.getElementById("resultado");

    const Media =  (N1 + N2)  / 2;

    if (Media < 6) {
        Resultado.innerHTML = `Resultado: Reprovado com a media ${Media} `;
    } else {
        Resultado.innerHTML = `Resultado: Aprovado com a media ${Media} `;
    }

}