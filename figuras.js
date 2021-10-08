function calcularperitmetro(){ 
    const input = document.getElementById("cuainput");
    const value = input.value;
    const Calculo = value*4;
    alert("el peritmetro es "+ Calculo);

}
function calculararea(){ 
    const input = document.getElementById("cuainput");
    const value = input.value;
    const Calculo = value*value;
    alert("el area es "+ Calculo);
}


console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();