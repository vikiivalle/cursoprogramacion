//ejercicio 1

function saberDisponibilidad (libros, numero) {

	let disponibilidad = []

	for (let i = 0; i < libros.length; i++)	{
		const libro = libros[i]


		if (libro.isbn.includes(numero)) {

			disponibilidad.push ({

				titulo: libro.titulo,
				autor: libro.autor,
				estado:libro.estado,
			}) 
		}
	}


	return disponibilidad 
}




//ejericio 2

function BuscarPorAutor (libros, autor) {

	const librosPorAutor = [] 

	for (let i = 0; i < libros.length; i++)	{
		const libro = libros[i]

		if (libro.autor.includes (autor)) {

			librosPorAutor.push ({

				titulo: libro.titulo,
				isbn:libro.isbn,
				estado:libro.estado, 

			})
		}
	}

		return librosPorAutor
}




//ejercicio 3

function top10libros (libros) {

	let listaMasPedidos = []


	for (let i = 0; i < libros.length; i++)	{
		const libro = libros[i]

		listaMasPedidos.push ({
			titulo:libro.titulo,
			isbn:libro.isbn, 
			veces:libro.cantidadDeVecesPedido

		})

		listaMasPedidos.sort ((a,b) => b.veces-a.veces)

	}

	return listaMasPedidos.slice (0,10)


}


