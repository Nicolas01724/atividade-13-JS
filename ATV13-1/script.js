function diferenca() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    
    if (number > number2) {
        document.getElementById("resultado").innerText = number - number2;
    } else if (number == number2) {
        document.getElementById("resultado").innerText = 0;
    } else {
        document.getElementById("resultado").innerText = number2 - number;
    }
}

function conta() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    document.getElementById("resultado").innerText = 2*number + 3*number2;
}

function multiplicar() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    document.getElementById("resultado").innerText = number * number2;
}

function valores() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);

    if (number > number2) {
        document.getElementById("primeiro").innerText = number;
        document.getElementById("segundo").innerText = number2;
    } else {
        document.getElementById("primeiro").innerText = number2;
        document.getElementById("segundo").innerText = number;
    }
}