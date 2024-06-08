import { database } from "../../utils/firebase"
import {get, ref} from 'firebase/database'
import { useEffect, useState, createContext } from "react"

export const capturaDadoscontext = createContext({
    itemsdata:{}
})

export function capturadados(){
    const[itemsdata, setItemsdata]= useState({})

    

    useEffect(()=>{
        const  itemsDatabase = ref(database,items)

        get(itemsDatabase).then((snapshot)=>{
            if(snapshot.exists()){
                const itemsarray = object.entries(snapshot.val()).map((id, data)=>({id, ...data,}))
                setItemsdata(itemsarray)
            }
        })

        console.log(itemsDatabase)
    },[])
    
    return(
        <>
        </>
    )
}