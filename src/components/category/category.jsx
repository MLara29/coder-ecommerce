import './category.css'
import { NavLink } from 'react-router-dom'


export function Category({ category }) {

  const { imageUrl , title} = category

  return (
    <div className="category-container">
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${imageUrl})`}}
      />
        <div className="category-body-container">
        
              <NavLink className='Link-Nav' to={title}>
                   <h2>{title}</h2>
               </NavLink>
               <a href="" onClick={<capturadados/>}>Info</a>
               
               
        
      </div>
    </div>
  )
}