import './cartwidget.css'

export function CartWidget(){
    return(
        <>
         <div className='Container-Cart'>
           <a><i className="material-icons">shopping_cart</i></a>
           <div className='Counter-Cart'>2</div>
           
         </div>
        </>
    )
}