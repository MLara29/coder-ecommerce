import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ProductCard } from "../../components/product-card/product-card";
import { CategoriesContext } from '../../context/categoriesContext'




export function CategoryHome(){

    

    const {category} = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

   console.log(category)
    
    return(
      <div>
         <h2>{category.toUpperCase()}</h2>
         <div>
            {    
               
                products && products.map((product) => <ProductCard key= {product.id} product={product} />)
            }
         </div>
         
      </div>
          
          
        
      
      
    )
    

}