function calcular_imc(altura,peso){
    var x
    x = peso/(altura^2)
    return x
}
document.getElementById("valor").innerHTML = calcular_imc(1.95,70)
