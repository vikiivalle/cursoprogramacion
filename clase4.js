function sumar (numeros) {
	let resultado = 0

	for (let i = 0; i < numeros.length; i++) {
		
		resultado = resultado + numeros[i]
	}

return resultado

}

console.log(sumar([1,5,7,7,10]))


//tarea 1 
function multiplicar (numeros) {
	let resultado = 1

//       contenido, condicion, paso que se va a ejecutar luego

	for (let i = 0; i < numeros.length; i++) {
		
		resultado = resultado * numeros[i];
	}

	return resultado;

}
	console.log (multiplicar([1,3,5]))


//tarea 2
// el nombre es una lista, nosotros queremos el ult elemento
// vamos a contar cuantas letras tiene el nombre y le restas 1 para saber el ultimo elemento

//el doble == chequea que las dos cosas a comparar tengane el mismo contenido
// el triple === chequea que las cosas que comparas son estrictemente igual

function adivinarGenero (nombre) {
	const ultimaLetra = nombre [nombre.length - 1]

	if (ultimaLetra === 'o') {
		return 'hombre'}

	else if (ultimaLetra === 'a') {
		return 'mujer'
	} 
	else {
		return 'no se'
	}
}

console.log(adivinarGenero('luciano')) // masculino
console.log(adivinarGenero('maria')) // femenino
console.log(adivinarGenero('ester')) // no se sabe






