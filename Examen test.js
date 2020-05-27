const libros = [
{	
	titulo: 'El nino con el pijama de rayas',
	autor: 'John Boyne',
	anio: '2007',
	editorial: 'David Fickling Books', 
	isbn: '9781846571510',
	cantidadDeVecesPedido: 3,
	estado: 'disponible',

},
{ 
	titulo: 'El abuelo que saltó por la ventana',
	autor: 'John Boyne',
	anio: '2009',
	editorial: 'Salamandra', 
	isbn: '9781982606336',
	cantidadDeVecesPedido: 0,
	estado: 'disponible',

},
{
	titulo: 'Diario de Ana Frank',
	autor: 'Anne Frank',
	anio: '1947',
	editorial: 'Cuspide', 
	isbn: '9781101871799',
	cantidadDeVecesPedido: 5,
	estado: 'no disponible',
}, 
{
	titulo: 'Cometas en el cielo',
	autor: 'Khaled Hosseini',
	anio: '2003',
	editorial: 'Riverhead Books', 
	isbn: '9781442364219',
	cantidadDeVecesPedido: 6,
	estado: 'no disponible',

},
];

const buscarDisponibilidad = saberDisponibilidad(libros, 9781982606336)
console.log (buscarDisponibilidad)


const buscarLista = BuscarPorAutor (libros, 'John Boyne')
console.log (buscarLista)

const mejoresLibros = top10libros (libros)
console.log (mejoresLibros)

