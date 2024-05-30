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

      <div>
            
            <button onClick={ () => setcountCart(countCart + 1)}>Adicionar ao Carrinho</button>
            <p>{countCart}</p>
            
          </div>
      
    </>
  )
}

