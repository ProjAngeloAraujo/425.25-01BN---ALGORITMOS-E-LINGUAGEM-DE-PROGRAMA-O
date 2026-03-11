
let Pedidos = [

];


function PedirLanche() {

    cpf = document.getElementById("cpf").value;

    const atendimentos = document.getElementById("atendimentos");
    atendimentos.innerHTML = '';

    let cpfexiste = null

    for (let clientes of Pedidos) {

        if (clientes.cpf == cpf) {
            if(clientes.lanches >= 19){
                alert("Consumo alto!");
                clientes.status = "Consumo alto!"
            }
            clientes.lanches += 1;
            cpfexiste = true;
        }

    }

    if (!cpfexiste) {
        Pedidos.push({ cpf: cpf, lanches: 1, status: "normal" });
    }

    for (let clientes of Pedidos) {

        const novaDiv = document.createElement('div');

        novaDiv.textContent = `Cliente: ${clientes.cpf} tem ${clientes.lanches} lanches, status: ${clientes.status} `;
        atendimentos.appendChild(novaDiv);

    }

}