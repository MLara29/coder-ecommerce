import { useContext, useEffect, useState } from 'react'
import './cartwidget.css'
import { CartContext } from '../../../context/cartContext'
import { capturadados } from '../../../components/captura-dados/captura-dados'
import { capturaDadoscontext } from '../../../components/captura-dados/captura-dados'





export function CartWidget(){

  const itemsData= useContext(capturaDadoscontext)

  const value = useContext(CartContext)

  const {counterCart} = value

  const {itemsdata} = itemsData

 
    return(
        
         <div className='Container-Carrinho'>
          
           <a><i className="material-icons">shopping_cart </i></a>
           <span className='Counter-Cart'>{counterCart}</span>
         </div>
        
    )
}