//ejercicio 1 "for"

function imprimirNumeros(numero) {

  for (let i = 1; i <= numero; i++) {
  
    console.log(i)
	
	}
}
  imprimirNumeros (5)

//ejercicio 2 "for "

function imprimirOtrosNumeros (numeroDesde, numeroHasta) {
     
      	for (let i = numeroDesde + 1; i < numeroHasta; i++) {  

console.log (i)
		}
     }

	(imprimirOtrosNumeros (2, 6))

// ejercicio array 1

function duplicarNumeros (listaDeNumeros) {

	for (let i = 0; i <listaDeNumeros.length; i++) {
		listaDeNumeros[i] = listaDeNumeros[i] * 2
	}
	return listaDeNumeros
}
console.log (duplicarNumeros ([2,5,10])) 

// ejercicio array 2
function multiplicar (lista) {
	let listaFinal = 1

	for (i=0; i<listaFinal; i++) {
		listaFinal = listaFinal * lista [i]

	}
	return listaFinal 
}

console.log (multiplicar (2,4,6)) 

// ejercicio strings

function contarEspacios (texto) {
	let cantidadDeEspacios = 0 //contador 
	for (let i = 0; i < texto.length; i++) {
		const caracter = texto [i] // no es necesario ponerlo

		if (caracter === ' ') {

		cantidadDeEspacios = cantidadDeEspacios + 1
			}
		}

	return cantidadDeEspacios

}

console.log(contarEspacios("esto no me estaria saliendo"))


//ejercicio tweets

function obtenerExpresionCensurada (expresion) {
	let expresionCensurada = ''

	for (let i = 0; i< expresion.length; i++) {
		expresionCensurada = expresionCensurada + '*'
	}
	return expresionCensurada
}



function censurarTexto (frase, expresionesCensuradas){
	let fraseCensurada = frase 

for (let i=0; i<expresionesCensuradas.length; i++) {
	const expresion = expresionesCensuradas[i]

	if (frase.includes(expresion)) {
		fraseCensurada = fraseCensurada.replace (expresion,obtenerExpresionCensurada (expresion))


		}
 	}
 	return fraseCensurada

}

console.log (censurarTexto ('hola como les va gente programera', ['gente', 'hola']))

// si quiero censurar gente y hola que tengo que hacer?
// busco gente en la frase. Si esta, lo censuro y pongo ateriscos. 
// **** como les va **** programera





