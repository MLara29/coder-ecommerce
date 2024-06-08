import { useEffect, useState } from "react";
import { addCollentionAdDocuments, getCategoriesAndDocuments } from "../../utils/firebase";
import { SHOP_DATA } from "../../shop-data";
import { CategoryPreview } from "../category-preview/category-preview";


export function CategoriesPerview(){

    const [categories, setCategories] = useState({})

    useEffect(()=>{
       addCollentionAdDocuments('categories', SHOP_DATA)
    },[])

    useEffect(()=>{
        const getCategories = async ()=> {
            const category = await getCategoriesAndDocuments()
            
            setCategories(category)
        }

        getCategories()
        
    },[])

 //   console.log(categories)
    return(
       <>
        {
            Object.keys(categories).map(title=>{
                const products = categories[title]
                return <CategoryPreview key={title} title={title} products={products}/>
            })
        }
       </>
       
    )
}
