import { Category } from "../category/category"

import './categories.css'

export function Categories( { categories } ){

   console.log(categories)
  
  return (

    <div className="categories-container">
      {
        categories.map((category) => {
          return (
            <Category category={category} key={category.title}/>
          )
        })
      }
    </div>
  )
}