/*
Crear una aplicación web que inicialmente muestre una mesa vacía.
Utilizando el tablero de control (un botón de agregar y uno de borrar) 
se podrán agregar y borrar, de a una, las sillas que rodean la mesa. 
La mesa soporta hasta 8 mesas.
1. Habria que ponerle a todas las sillas en css display none.
2. Programar para que cada vez que aprete el boton verde se agreue una silla



*/
window.onload = function () {
	const greenbutton = document.querySelector('.greenbutton')
	const redbutton = document.querySelector('.redbutton')
	const sillaf1 = document.querySelector('.sillaf1')
	const sillaf2 = document.querySelector('.sillaf2')
	const sillaf3 = document.querySelector('.sillaf3')
	const sillab = document.querySelector('.sillab')
	const sillad = document.querySelector('.sillad')
	const sillab1 = document.querySelector('.sillab1')
	const sillab2 = document.querySelector('.sillab2')
	const sillab3 = document.querySelector('.sillab3')



	let clicks = 0

	function showChair () {
		
		clicks=clicks+1

		if (clicks == 1) {
			sillaf1.style = "display: block"

		} if (clicks == 2) {
			sillaf2.style = "display: block"
		
		} if (clicks == 3) {
			sillaf3.style = "display: block"
		
		} if (clicks == 4) {
			sillad.style = "display: block"

		} if (clicks == 5) {
			sillab3.style = "display: block"
		
		} if (clicks == 6) {
			sillab2.style = "display: block"
		
		} if (clicks == 7) {
			sillab1.style = "display: block"

		} if (clicks == 8) {
			sillab.style = "display: block"
		}

	}

	greenbutton.addEventListener ('click', showChair)




	let click = 0
	
	function eliminateChair () {
		
	click=click+1

		if (click == 1) {
			sillaf1.style = "display: none"

		} if (click == 2) {
			sillaf2.style = "display: none"
		
		} if (click == 3) {
			sillaf3.style = "display: none"
		
		} if (click == 4) {
			sillad.style = "display: none"

		} if (click == 5) {
			sillab3.style = "display: none"
		
		} if (click == 6) {
			sillab2.style = "display: none"
		
		} if (click == 7) {
			sillab1.style = "display: none"

		} if (click == 8) {
			sillab.style = "display: none"
		}

	}

	redbutton.addEventListener ('click', eliminateChair)

}