import './navigation.css'
import { CartWidget } from './cart/cartwidget'
import { Outlet } from 'react-router-dom'

export function Navigation() {
    return(
        <>
         <div className="navigation">
            <div className='Logo-NavBar'>
                <a><i className="material-icons">all_inclusive</i></a>
                <a className='Nome-Loja'>Infinity Shop</a>
            </div>
            <div className="Nav-Links">
                
                <a className='Link-Nav' href="">Início</a>
                <a className='Link-Nav' href="">Mac</a>
                <a className='Link-Nav' href="">iPhone</a>
                <a className='Link-Nav' href="">Watch</a>
                <a className='Link-Nav' href="LOGIN">Login</a>
                <CartWidget/>
            </div>
         </div>
         <Outlet/>
        </>
    )
}