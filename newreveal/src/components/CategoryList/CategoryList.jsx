import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem';
import './CategoryList.scss'

const CategoryList = ({ categories }) => {
    
      return (
          <div className='categoriesContainer'>
            {categories.map((category)=>(
              <CategoryItem key={category.id} category={category} />
            ))}
            
          </div>
      );
}

export default CategoryList