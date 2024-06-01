import { useEffect } from "react";
import { addCollentionAdDocuments } from "../../utils/firebase";
import { SHOP_DATA } from "../../shop-data";


export function CategoriesPerview(){

    useEffect(()=>{
        addCollentionAdDocuments('categories, SHOP_DATA')
    },[])
    return(
       <>
       </>
    )
}