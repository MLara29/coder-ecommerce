import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { CategoriesProvider } from "./context/categoriesContext.jsx"
import { CartProvaider } from "./context/cartContext.jsx"
import { capturaDadoscontext } from './components/captura-dados/captura-dados.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <CategoriesProvider>
       < CartProvaider>
        < capturaDadoscontext>
          <App />
        </capturaDadoscontext>
       </CartProvaider>
      </CategoriesProvider>
    </BrowserRouter> 
  </React.StrictMode>,
)
