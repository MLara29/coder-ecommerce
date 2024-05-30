import { Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { Home } from './assets/components/router/home/home'
import { Navigation } from './assets/components/router/navigation/navigation'
import { ItemListContainer } from './assets/components/ItemListContainer/ItemListContainer'
import { itemCount } from './assets/components/itemCount/itemCount'



export function App() {
   
  const [countCart, setcountCart] = useState(1)

 console.log(countCart)

  return (
    <>
      
     

      <Routes>

         <Route path='/' element={<Navigation />}>

          
          <Route path='itemCount' element={<itemCount />} />

          

         </Route>
      </Routes>

          <div className='botoes-cart-container'>
            
            <div className='botoes-cart'>
            <button onClick={ () => setcountCart(countCart + 1)}>+</button>
            <p>{countCart}</p>
            <button onClick={ () => setcountCart(countCart - 1)}>-</button>
            </div>
            
            
            <button onClick={ () => setcountCart(countCart + 1)}>Adicionar ao Carrinho</button>
            
            
          </div>
      
    </>
  )
}

