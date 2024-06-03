import './navigation.css'
import { CartWidget } from './cart/cartwidget'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export function Navigation() {
    return(
        <>
         <div className="navigation">
            <div className='Logo-NavBar'>
                <a><i className="material-icons">all_inclusive</i></a>
                <NavLink to="/">
                   <a className='Nome-Loja'>Infinity Shop</a>
                </NavLink>
                
            </div>
            <div className="Nav-Links">
               <NavLink className='Link-Nav' to='/'>
                    Início
               </NavLink>
               <NavLink className='Link-Nav' to='/products'>
                    Produtos
               </NavLink>
              
                <CartWidget/>
            </div>
         </div>
         <Outlet/>
        </>
    )
}