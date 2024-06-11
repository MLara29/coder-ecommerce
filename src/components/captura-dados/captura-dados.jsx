
import { useEffect, useState, createContext } from "react"
import { QuerySnapshot, getFirestore } from "firebase/firestore";
import { firebase } from '../../utils/firebase'
import axios from "axios"


export const capturaDadoscontext = createContext({
    
})

export async function capturadados(){
  
    const response = await axios.get("https://mlara29.github.io/api-aplle")
    return response.data.result

   

  
  
  
  
  
}