function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var imc = peso / (altura * altura);
    if (imc <= 18.5) {
        document.getElementById("resultado").style.color = "#90ee90";
        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc + ", estás en una categoría de bajo peso";
    } else if (imc > 18.5 && imc <= 24.9) {
        document.getElementById("resultado").style.color = "#3CB043";
        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc + ", estás en una categoría de peso saludable";
    } else if (imc > 25 && imc <= 29.9) {
        document.getElementById("resultado").style.color = "#FDD017";
        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc + ", estás en una categoría de sobrepeso";
    } else if (imc > 30 && imc <= 34.9) {
        document.getElementById("resultado").style.color = "#ED9121";
        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc + ", estás en una categoría de obesidad 1";
    } else if (imc > 35 && imc <= 39.9) {
        document.getElementById("resultado").style.color = "#FF2400";
        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc + ", estás en una categoría de obesidad 2";
    } else {
        document.getElementById("resultado").style.color = " #8b0000";
        document.getElementById("resultado").innerHTML = "Tu IMC es: " + imc + ", estás en una categoría de obesidad mórbida";
    }
}