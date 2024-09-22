function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (peso <= 0 || altura <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, ingresa valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Bajo peso mas sopa al caldo';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal excelente';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso ya no comas xD';
    } else {
        categoria = 'Obesidad ya pareces a mi alcancia';
    }

    document.getElementById('resultado').textContent = `Resultado de IMC es: ${imc.toFixed(2)} (${categoria})`;
}