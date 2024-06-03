import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { addCollentionAdDocuments, getCategoriesAndDocuments } from "../../utils/firebase"
import { ProductCard } from "../../components/product-card/product-card";
import { SHOP_DATA } from "../../shop-data";



export function CategoryHome(){

    

    const {category} = useParams()

    const [categoriesMap, setCategoriesMap] = useState({})
    const [products, setProducts] = useState(categoriesMap[category])

    
    
    useEffect(()=>{
        addCollentionAdDocuments('categories', SHOP_DATA)
    },[])


    useEffect(()=>{
        const getCategories = async ()=> {
            const categoryMap = await getCategoriesAndDocuments()
            
            setCategoriesMap(categoryMap)
            
        }

        getCategories()
        console.log(categoriesMap)
        
    },[])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category, categoriesMap[category]])

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