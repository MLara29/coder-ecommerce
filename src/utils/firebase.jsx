
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database';
import { collection, doc, getDocs, getFirestore, query, writeBatch } from 'firebase/firestore'

/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ,
  appId: import.meta.env.VITE_APP_ID,
} */

const firebaseConfig = {
  apiKey: "AIzaSyATTUmYeeqqWXifV1iJ5FOFo1Fa_lW6Uvo",
  authDomain: "coder-eletronico-ecommerce.firebaseapp.com",
  databaseURL: "https://coder-eletronico-ecommerce-default-rtdb.firebaseio.com/",
  projectId: "coder-eletronico-ecommerce",
  storageBucket: "coder-eletronico-ecommerce.appspot.com",
  messagingSenderId: "155128635978",
  appId: "1:155128635978:web:f4ce7ee659dc3b610e3cb3"
};



const app = initializeApp(firebaseConfig)

 export const database = getDatabase(app)

export const db = getFirestore()

export const addCollentionAdDocuments = async (collentionKey, objectsToAdd) => {
  const collectionRef = collection(db, collentionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log("done")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q)
  const categoryMap  = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}
