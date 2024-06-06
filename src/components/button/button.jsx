import { CartWidget } from '../../router/navigation/cart/cartwidget'
import './button.css'
import { useState, useContext } from 'react'
import { Navigation } from '../../router/navigation/navigation'
import { itemCount}  from '../itemCount/itemCount'
import { CartContext } from '../../context/cartContext'


export function Button(){

    const{counterCart, setCounterCart} = useContext(CartContext)

    const setCounterCarrinho = () => setCounterCart(counterCart + 1)
    const setCounterCarrinhoAdd = () => setCounterCart(counterCart + 1)
    const setCounterCarrinhoSub = () => setCounterCart(counterCart - 1)

    
    
   // console.log(counterCart)
    

    return(
        <>
           <button onClick={setCounterCarrinho} className="button-card" >Adicionar ao Carrinho</button>
           <div className='container-botoes-add-sub'>
           <button onClick={setCounterCarrinhoAdd} className="button-card-Add">+</button>
           <span className='info-cart-card'>{counterCart}</span>
           <button onClick={setCounterCarrinhoSub} className="button-card-Sub">-</button>
           </div>
           
           <CartWidget  />
          
        </>
    )   
       
}