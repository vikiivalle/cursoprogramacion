//tarea 1 ejercicio de variables

const miComidaPreferida = {
	nombre:'vicky',
	cantidadDeVecesQueComi:4,
	cantidadDeVecesQueMeCocinaron: 2,
	ingredientes: ['harina', 'huevo', 'azucar', 'esencia de vainilla'],
	} 


miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5 

miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron	



// tarea 2 funciones

	function calcularAreaRectangulo (base,altura) {

		const resultado = base * altura 
		return resultado
	}
	console.log (calcularAreaRectangulo(4,5))



	function calcularPrecioTotal (precioUnitario, cantidadDeUnidades, costoDeEnvio) {
		const resultado = (precioUnitario*cantidadDeUnidades)+costoDeEnvio
		return resultado  
	}
	console.log (calcularPrecioTotal (50,2,5))



	function dejarPasar (edad) {

		if (edad >18) {
			return'true'}
		else {
			return 'false'
		}
	}
	console.log (dejarPasar (34))

	// tarea 3 ejercicio de if 

	function calcularResultadoDeExamen (nota) {

		if (nota < 4) {
			return 'Aplazado'}
		else if (nota >= 4 && nota <6) {
			return 'A recuperar'}
		else if (nota >=6 && nota <10) {
			return 'Aprobado'}
		else  {
			return 'Sobresaliente'}
	}
		console.log (calcularResultadoDeExamen (4))


	function sonHermanos (parametroUno, parametroDos) {

		if (parametroUno.madre === parametroDos.madre && parametroUno.padre === parametroDos.padre) {
			return 'true'
		}

		else {
			return 'false'
		}
	}

	const parametroUno = {
		madre: 'Maria',
		padre: 'Juan',
	}

	const parametroDos = {
		madre: 'Maria',
		padre: 'Juan',
	}


	console.log (sonHermanos (parametroUno, parametroDos))



	function contarEspacios (texto){
		let cantidad = 0

		for (i = 0; i < texto.length; i++) {
			if (texto[i] === ' ') {
				cantidad = cantidad + 1
			}
		}
		return cantidad
	}

	console.log (contarEspacios ('My name is Victoria'))

	// tarea 4 investigar 

	function obtenerRecetasPorIngrediente (listaDeRecetas, ingrediente) {
		const listaDeRecetasConIngrediente = []

		for (let i = 0; i < listaDeRecetas.length; i++) {

			const receta = listaDeRecetas[i]

			for (let j = 0; j < receta.ingredientes.length; j++ ) {
				const ingredienteDeReceta = receta.ingredientes [j]

				if (ingredienteDeReceta === ingrediente) {
					listaDeRecetasConIngrediente.push (receta)

				}

			}
		}
			return listaDeRecetasConIngrediente
	}


	const recetas = [
	{
		nombre: 'Tortilla de batata', 
		ingredientes: ['batata', 'huevo', 'cebolla'],
	},
	{

		nombre: 'Tortilla de papa', 
		ingredientes: ['papa', 'huevo', 'cebolla'],
	},
	]

	const recetasConBatata = obtenerRecetasPorIngrediente (recetas, 'batata')

	console.log (recetasConBatata)




