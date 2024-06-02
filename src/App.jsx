import { Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { itemCount } from './components/itemCount/itemCount'
import { CategoriesPerview } from './components/categories-perview/categories-perview'



export function App() {
   
  const [countCart, setcountCart] = useState(1)

 

  return (
    <>
       <Navigation/>
       <Home/>
       <CategoriesPerview/>


      
      
    </>
  )
}

