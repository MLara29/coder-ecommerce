import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments, addCollentionAdDocuments } from "../utils/firebase";
import { SHOP_DATA } from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children}) =>{

    useEffect(()=>{
        addCollentionAdDocuments('categories', SHOP_DATA)
    },[])

    const [categoriesMap, setCategoriesMap]= useState({})

    

    useEffect(()=>{
        const getCategories = async () =>{
           const categoryMap =  await getCategoriesAndDocuments()
           setCategoriesMap(categoriesMap)
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

