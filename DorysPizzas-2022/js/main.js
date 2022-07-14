import paintProd from './Componets/products.js'
import { paintArt,addArt } from './Componets/car.js'

const cartconteiner = document.getElementById("cart-conteiner")

document.addEventListener('DOMContentLoaded', () =>{
    paintProd()
    paintArt()
   

    cartconteiner.addEventListener("click", (e)=> {
        const target = e.target
        if(target.classList.contains('boton')){
            const id =target.dataset.id
            alert("asdafasfs")
            addArt(+id,1)
        }
        paintArt()
    })
})
