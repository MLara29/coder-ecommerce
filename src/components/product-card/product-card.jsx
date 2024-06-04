import "./product-card.css"
import { Button } from "../button/button"

export function ProductCard({product}){
    
    const {name, price, imageUrl, id}= product

   

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} className={`${id}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button/>
            
        </div>
    )

}