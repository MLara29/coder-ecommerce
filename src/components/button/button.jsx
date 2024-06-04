import { CartWidget } from '../../router/navigation/cart/cartwidget'
import './button.css'
import { useState } from 'react'
import { Navigation } from '../../router/navigation/navigation'


export function Button(variavel){

    const[QuantidadeCarrinho, SetQuantidadeCarrinho] = useState(0)

    const count = QuantidadeCarrinho

   // console.log(count)

    

    return(
        <>
           <button onClick={()=>SetQuantidadeCarrinho(QuantidadeCarrinho + 1)} className="button-card" >Adicionar ao Carrinho</button>
           <CartWidget variavel={count} value={QuantidadeCarrinho} />
          
        </>
    )   
       
}