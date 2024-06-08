import { useContext } from "react";
import { CategoryPreview } from "../category-preview/category-preview";
import { CategoriesContext} from '../../context/categoriesContext'


export function CategoriesPerview(){

    const { categoriesMap } = useContext(CategoriesContext)
    return(
       <>
        {
            Object.keys(categoriesMap).map(title=>{
                const products = categoriesMap[title]
                return <CategoryPreview key={title} title={title} products={products}/>
            })
        }
       </>
       
    )
}
