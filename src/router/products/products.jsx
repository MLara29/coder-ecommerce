import { Route, Routes } from "react-router-dom";
import { CategoriesPerview } from "../../components/categories-perview/categories-perview";
import { CategoryHome } from "../category-home/category-home";

export function Products() {
  return (
    <>
     <Routes>
        <Route index element={<CategoriesPerview />} />
        
     </Routes>
     
    </>
    
    
  )
}