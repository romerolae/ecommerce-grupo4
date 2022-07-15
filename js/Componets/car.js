import products from '../Database/index.js';
//para guardar los articulos

let articulos = [];

const artcont = document.getElementById('cart-conteiner');

const totalPrice = document.getElementById('producto-costo');

//Pintar los articulos en el carro
function paintArt() {
	let html = ``;

	for (const art of articulos) {
		const filterProd = products.find((product) => product.id === art.id);

		html += `
      <div class="artics">
        <div class ="producto-img">
        <img src="${filterProd.imagen}" alt="${filterProd.nombre}"> 
        </div>
        <div class="description">
          <h2 >${filterProd.nombre} - $ ${art.cantidad * filterProd.precio} x${
			art.cantidad
		}</h2></dvi>
          <button class="remover" type="button" data-id="${
						filterProd.id
					}">-</button>
          <span>${art.cantidad}</span>
          <button class="agregar" type="button" data-id="${
						filterProd.id
					}">+</button>
          <div>
            <button class="removerTodo" type="eliminar" data-id="${
							filterProd.id
						}">eliminar</button>
          </div>
        </div>
      </div>
      
      </div>  
        `;
	}

	artcont.innerHTML = html;
	//precio
	totalPrice.innerHTML = showTotal();
}

//Agregar Articulo

function addArt(id, cantidad) {
	const filterProd = products.find((product) => product.id === id);

	//Revisar la cantidad de productos

	if (filterProd && filterProd.cantidad > 0) {
		//si no esta se agrega y si esta se suma la cantidad

		const filterArt = articulos.find((arti) => arti.id === id);

		if (filterArt) {
			//si la cantidad no supera el stock, aumentamos la cantidad, si no se muestra un mensaje
			if (checkInv(id, cantidad + filterArt.cantidad)) {
				filterArt.cantidad += cantidad;
			} else {
				window.alert('No hay suficiente en stock');
			}
		} else {
			articulos.push({ id, cantidad });
		}
	} else {
		window.alert('Lo sentimos, no hay stock');
	}
}

//remover articulo

function removeArt(id, cantidad) {
	const filterArt = articulos.find((artic) => artic.id === id);

	if (filterArt.cantidad - cantidad > 0) {
		filterArt.cantidad -= cantidad;
	} else {
		const confirmar = window.confirm(
			'¿Estás Seguro de que quieres remover el articulo?'
		);

		if (confirmar) {
			//casi no entiendo
			articulos = articulos.filter((articulo) => articulo.id !== id);
		}
	}
}

//remover todo

function removerTodo(id) {
	//lo mismo
	articulos = articulos.filter((articulo) => articulo.id !== id);
}

//revisar stock

function checkInv(id, cantidad) {
	const filterProd = products.find((produc) => produc.id === id);

	return filterProd.cantidad - cantidad >= 0;
}

//Mostrar Total

function showTotal() {
	let total = 0;
	for (const art of articulos) {
		const filterProd = products.find((produc) => produc.id === art.id);
		total += art.cantidad * filterProd.precio;
	}
	return `$${total}`;
}

//carro vacio

function emptyCar() {
	articulos = [];
}

function buy() {
	for (const art of articulos) {
		const filterProd = products.find((produc) => produc.id === art.id);

		filterProd.cantidad -= art.cantidad;
	}

	emptyCar();
	window.alert('Gracias por tu compra');
}

export {
	paintArt,
	addArt,
	removeArt,
	removerTodo,
	checkInv,
	showTotal,
	emptyCar,
	buy,
	articulos,
};
