import './item-info-product.css'

export const ItemInfoProduct = ({infoProduto, name}) => {

    
   const {id, titulo} = infoProduto
  

   //console.log(key)
   //const nomeProduto = infoProduto.map(t=>t.titulo)

   return(
   <div className="InfoProductContainer">

     <div className="titleInfoProduct">{titulo}</div>
     <div className="cardInfoProduct"></div>
     <div className="imageInfoproduct"></div>
   
   </div>

   )
 
}