import products from '../Database/index.js';

const contProduc = document.getElementById('contProduc');

function paintProd() {
	let html = ``;

	for (let produc of products) {
		// Falta img
		html += `
                        <div class="columna columna-33 columna-mobile-100">
							<div class="bloque-recomendado">
								<div class="bloque-img-recomendado rectangulo-perfecto">
                                    <img src="${produc.imagen}"/>
								</div>
								<div class="bloque-contenido-recomendado">
                                    <h3>${produc.nombre}</h3>
									
									<p>Precio: $ <span>${produc.precio}</span></p>
                                    <span>Disponible ${produc.cantidad}</span>
									<button type="button" class="boton boton-blanco" data-id=${produc.id}> Agregar al carrito</button>
								</div>
							</div>
						</div>
        `;
	}
	contProduc.innerHTML = html;
}

export default paintProd;
