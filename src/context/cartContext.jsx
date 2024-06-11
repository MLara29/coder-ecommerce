import { useEffect, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    
    
    counterCart: 0

})

export const CartProvaider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false) 
    
    const [counterCart, setCounterCart] = useState(0)

    
    
    const value = { isCartOpen, setIsCartOpen, counterCart, setCounterCart}

    

  return(

    <CartContext.Provider value={value}>
      {children}

    </CartContext.Provider>
  )
}