

function calPerimetro(req) {
    
    if(req == "quadrado"){
        
        const element = document.getElementById(req).value;
        const result = servicePerimetro(element, 4);
        
        const elementResult = document.getElementById(`p${req}`);

        elementResult.innerHTML += result;

    } else if(req == "retangulo") {

        const element1 = document.getElementById(`${req}1`).value;
        const element2 = document.getElementById(`${req}2`).value;
        const result = servicePerimetro(element1, 2) + servicePerimetro(element2, 2);
        
        const elementResult = document.getElementById(`p${req}`);

        elementResult.innerHTML += result;


    } else if(req == "triangulo") {

        const element = document.getElementById(req).value;
        const result = servicePerimetro(element, 3);
        
        const elementResult = document.getElementById(`p${req}`);

        elementResult.innerHTML += result;

    } else {
        alert("erro");
    }
}

function servicePerimetro(val, lad) {
    const result = val * lad;
    return result;
}