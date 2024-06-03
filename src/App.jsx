import { Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { itemCount } from './components/itemCount/itemCount'
import { CategoriesPerview } from './components/categories-perview/categories-perview'
import { Products } from './router/products/products'
import { CategoryHome } from './router/category-home/category-home'

export function App() {
   
  const [countCart, setcountCart] = useState(1)

 

  return (
    <>
     <Routes>
        <Route path='/*' element={<Navigation/>}>

          <Route index element={<Home/>}/>
          <Route path='products' element={<Products />} />
          <Route path=':category' element={<CategoryHome />} />
          
          
          
        </Route>
     </Routes> 
     
    </>
  )
}

