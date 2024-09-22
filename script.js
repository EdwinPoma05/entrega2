
let edad = prompt("¿Cuántos años tienes?");
let ingresos = prompt("¿Cuáles son tus ingresos mensuales?");

edad = Number(edad);
ingresos = Number(ingresos);

if (edad >= 18 && ingresos >= 500 && ingresos <= 2000) {
    console.log("Eres elegible para el subsidio.");
} else {
    console.log("No eres elegible para el subsidio.");
}
