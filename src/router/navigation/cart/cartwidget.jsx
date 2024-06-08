import { useContext, useEffect, useState } from 'react'
import './cartwidget.css'
import { CartContext } from '../../../context/cartContext'





export function CartWidget(){

  const value = useContext(CartContext)

  const {counterCart} = value

  

  
  
   
     
    return(
        
         <div className='Container-Carrinho'>
          
           <a><i className="material-icons">shopping_cart </i></a>
           <span className='Counter-Cart'>{counterCart}</span>
         </div>
        
    )
}