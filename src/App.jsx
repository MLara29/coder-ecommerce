import { Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { itemCount } from './components/itemCount/itemCount'
import { CategoriesPerview } from './components/categories-perview/categories-perview'
import { Products } from './router/products/products'
import { CategoryHome } from './router/category-home/category-home'
import { capturadados } from './components/captura-dados/captura-dados'
import axios from "axios"


export function App() {

   
  const [aplleProducts, setAplleProducts]= useState({})

  useEffect(()=>{

    capturadados()
     .then(data=>console.log(data))

  },[])
  
 

  return (
    <>
     <Routes>
        <Route path='/*' element={<Navigation/>}>

          <Route index element={<Home/>}/>
          <Route path='products/*' element={<Products />} />
          <Route path=':category' element={<CategoryHome />} />
          
          
          
        </Route>
     </Routes> 
     
    </>
  )
}

