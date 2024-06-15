import "./product-card.css"
import { Button } from "../button/button"
import { ItemInfoProduct } from "../item-info-product/item-info-product"
import { item } from "../item/item"
import { onValue } from "firebase/database"
import { useEffect, useState } from "react"

export function ProductCard({product}){
    
    const {name, price, imageUrl, id}= product

    const [infoProduct, setInfoproduct]= useState ({})

    const [infoProductCArd, setInfoproductCArd]= useState (false)

   

    useEffect(()=>{
        const handleInfoProduct = async ()=>{
            const res = await item()
            setInfoproduct(res)
        }

        handleInfoProduct()
       
    },[infoProductCArd])

   
   const ProducInfoCard = {infoProduct}

   //console.log(infoProduto.titulo)


    
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} className={`${id}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button/>
            <button onClick={()=>{
                if(infoProductCArd === false){
                    setInfoproductCArd(true)
                }
                else {
                    setInfoproductCArd(false)
                }
            }
                
                }>ver detalhes do Produto</button>
            {infoProductCArd && infoProduct.map((infoProduto)=> <ItemInfoProduct name={name} infoProduto={infoProduto} />)}
            
        </div>
    )

}