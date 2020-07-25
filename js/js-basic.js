//Exercici 1
console.log('Hello world');

//Exercici 2
alert('Em dic Pau! ;)');

//Exercici 3
let nom = 'Pau';
let cognom = 'Domingo';
console.log(nom+' '+cognom); //pintar variables de manera clàsica
 
//Exercici 4
// ( utilitzant l' string interpolation )
let anyNeixament = 1989;
let edat = 31;
console.log(`Vaig néixer l'any ${anyNeixament} i tinc ${edat} anys. Per tant, ara mateix estem a l'any ${edat+anyNeixament}`);

//Exercici 5
let notaExamen = 4.5;
if(notaExamen >= 5){
  alert("Has APROVAT l'exàmen!");
}else{
  alert("Has SUSPÈS l'exàmen... ànims!");
}

//Exercici 6
let stringToReplace = 'Tinc un cOtxe de color blau';
let stringToPrintOne = stringToReplace.replace('blau', 'verd');
let stringToPrintTwoo = stringToReplace.replace(/o/gi, "u");
console.log(stringToPrintOne);
console.log(stringToPrintTwoo);

//Exercici 7
let objectesDeCasa = ['taula', 'cadira', 'ordinador', 'libreta'];
for (let i = 0; i<objectesDeCasa.length; i++){
  console.log("L'objecte "+objectesDeCasa[i]+" està a la posició "+i+".");
}

//Exercici 8
function calculadora(operand, valor1, valor2){
  switch(operand){
    case 'suma':
      return valor1 + valor2;
      break;
    case 'resta':
      return valor1 - valor2;
      break;
    case 'multiplicació':
      return valor1 * valor2;
      break;
  }
}
console.log(calculadora('multiplicació', 40, 20));

//Exercici 8 ampliat voluntariament: els valors de la funció són introduïts per l'usuari
let operand = prompt("Inserta l'operand desitjat", "suma, resta o multiplicació");
if ((operand !== "suma") && (operand !== 'resta') && (operand !== 'multiplicació')) alert("ERROR! Operand no vàlid!");
let valor1 = prompt("Inserta el primer valor:", "inserta el primer valor numèric");
if (isNaN(valor1)) alert("ERROR! Això no és un número!");
let valor2 = prompt("Inserta el segon valor:", "inserta el segón valor numèric");
if (isNaN(valor2)) alert("ERROR! Això no és un número!");
console.log(calculadora(operand, Number(valor1), Number(valor2)));