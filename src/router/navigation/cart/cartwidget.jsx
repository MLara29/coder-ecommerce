import { useContext, useEffect, useState } from 'react'
import './cartwidget.css'
import { CartContext } from '../../../context/cartContext'
import { capturaDadoscontext } from '../../../components/captura-dados/captura-dados'





export function CartWidget(){

  const capturaDadosCart = useContext(capturaDadoscontext)

  const value = useContext(CartContext)

  const {counterCart} = value

  console.log(capturaDadosCart)

  

  
  
   
     
    return(
        
         <div className='Container-Carrinho'>
          
           <a><i className="material-icons">shopping_cart </i></a>
           <span className='Counter-Cart'>{counterCart}</span>
         </div>
        
    )
}