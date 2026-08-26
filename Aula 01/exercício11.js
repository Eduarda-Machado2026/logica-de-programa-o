function calcularIMC(altura, peso) {

    let alt = parseFloat(altura)
    let kg = parseFloat(peso)
    let calculo = peso / (altura * altura);

    if (calculo < 18.5) {
        console.log ("abaixo do peso");
    } else if (calculo<= 24.9) {
        console.log("peso normal");
    } else if (calculo <= 29.9) {
        console.log("sobre peso");
    } else {
        console.log("obesidade");
    }
    return;
}
calcularIMC(1.61, 54)
