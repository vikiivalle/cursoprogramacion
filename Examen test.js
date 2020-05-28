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
{
	titulo: 'Final del juego',
	autor: 'Julio Cortazar',
	anio: '1956',
	editorial: 'Sudamericana', 
	isbn: '9788479790691',
	cantidadDeVecesPedido: 1,
	estado: 'no disponible',
},
{
	titulo: 'Casa tomada',
	autor: 'Julio Cortazar',
	anio: '1946',
	editorial: 'Sudamericana', 
	isbn: '978987402176',
	cantidadDeVecesPedido: 10,
	estado: 'disponible',
},
{
	titulo: 'Bestiario',
	autor: 'Julio Cortazar',
	anio: '1951',
	editorial: 'Sudamericana', 
	isbn: '9788420417301',
	cantidadDeVecesPedido: 1,
	estado: 'disponible',
},
{
	titulo: 'Las armas secretas',
	autor: 'Julio Cortazar',
	anio: '1959',
	editorial: 'Sudamericana', 
	isbn: '9788437601199',
	cantidadDeVecesPedido: 8,
	estado: 'no disponible',
},
{
	titulo: 'Rayuela',
	autor: 'Julio Cortazar',
	anio: '1980',
	editorial: 'Sudamericana', 
	isbn: '9788466000512',
	cantidadDeVecesPedido: 7,
	estado: 'no disponible',
},
{
	titulo: 'La noche boca arriba',
	autor: 'Julio Cortazar',
	anio: '1956',
	editorial: 'Sudamericana', 
	isbn: '9782253063087',
	cantidadDeVecesPedido: 7,
	estado: 'disponible',
},
{
	titulo: 'Ficciones',
	autor: 'Borges',
	anio: '1944',
	editorial: 'Sudamericana', 
	isbn: '9789500734493',
	cantidadDeVecesPedido: 6,
	estado: 'disponible',
},

];

const buscarDisponibilidad = saberDisponibilidad(libros, 9781982606336)
console.log (buscarDisponibilidad)


const buscarLista = BuscarPorAutor (libros, 'John Boyne')
console.log (buscarLista)

const mejoresLibros = top10libros (libros)
console.log (mejoresLibros)


