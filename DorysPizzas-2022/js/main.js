import paintProd from './Componets/products.js';
import {
	paintArt,
	addArt,
	removeArt,
	removerTodo,
	articulos,
	buy,
	emptyCar,
} from './Componets/car.js';

const productConteiner = document.getElementById('contProduc');

const artCont = document.getElementById('cart-conteiner');

const btnsAct = document.getElementById('btnsAcciones');
const carrt = document.querySelector('.cart-conteiner');
const icon = document.querySelector('.bar__toggle');

// carrito

icon.addEventListener('click', () => {
	carrt.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
	paintProd();
	paintArt();

	productConteiner.addEventListener('click', (e) => {
		const target = e.target;
		if (target.classList.contains('boton')) {
			const id = target.dataset.id;

			addArt(+id, 1);
		}
		paintArt();
	});

	artCont.addEventListener('click', (e) => {
		const target = e.target;
		if (target.classList.contains('agregar')) {
			const id = target.dataset.id;
			addArt(+id, 1);
		}
		if (target.classList.contains('remover')) {
			const id = target.dataset.id;
			removeArt(+id, 1);
		}
		if (target.classList.contains('removerTodo')) {
			const id = target.dataset.id;
			removerTodo(+id, 1);
		}
		paintArt();
	});
	btnsAct.addEventListener('click', (e) => {
		const target = e.target;

		if (target.classList.contains('limpiar')) {
			emptyCar();
		}

		if (target.classList.contains('comprar')) {
			if (articulos.length > 0) {
				buy();
				paintProd();
			} else {
				window.alert('No hay artículos en el carrito, agregue unos cuantos');
			}
		}
		paintArt();
	});
});
