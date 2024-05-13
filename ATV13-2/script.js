function calcular() {
    const nome = document.getElementById("nome").value;
    const salario = parseFloat(document.getElementById("salario").value);
    const inss = salario * 0.08;

    document.getElementById("nomee").innerText = nome;
    document.getElementById("salarioo").innerText = salario;
    document.getElementById("inss").innerText = inss;
    document.getElementById("liquido").innerText = salario - inss;
    
}

function complexo() {
    const nome = document.getElementById("nome2").value;
    const salario = parseFloat(document.getElementById("salario2").value);
    if (salario < 1000.01) {
        const inss = salario * 0.08;
    } else if (salario > 1500) {
        const inss = salario * 0.09;
    } else {
        const inss = salario * 0.085;
    }

    document.getElementById("nomee2").innerText = nome;
    document.getElementById("salarioo2").innerText = salario;
    document.getElementById("inss2").innerText = inss;
    document.getElementById("liquido2").innerText = salario - inss;
    
}