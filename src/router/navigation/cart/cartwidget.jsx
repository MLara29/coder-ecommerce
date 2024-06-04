import { useEffect, useState } from 'react'
import './cartwidget.css'
import { count } from 'firebase/firestore/lite'
import { Button } from '../../../components/button/button'




export function CartWidget({variavel, value}){

   
  const [countCart, setCountCart]=useState(0)
  
  useEffect(()=>{setCountCart(countCart)},[])

  const counter = value
  
  console.log(value)
   
     
    return(
        <>
         <div className='Container-Cart'>
          
           <a><i className="material-icons">shopping_cart </i></a>
           <span className='Counter-Cart'>
            
            {counter}
            
            
            </span>
         </div>
        </>
    )
}