import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments, addCollentionAdDocuments } from "../utils/firebase";
//import { SHOP_DATA } from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({children}) =>{

    const [categoriesMap, setCategoriesMap] = useState({})

   // useEffect(()=>{
   //     addCollentionAdDocuments('categories', SHOP_DATA)
   // },[])

    console.log(categoriesMap)

    

    useEffect(()=>{
        const getCategories = async () =>{
           const categoryMap =  await getCategoriesAndDocuments()
           setCategoriesMap(categoryMap)
        }

        getCategories()
    },[])

    const value = { categoriesMap }

    return(
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}

