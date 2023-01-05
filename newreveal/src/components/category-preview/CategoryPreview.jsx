import React from 'react'
import './CategoryPreview.scss'
import ProductCard from '../product-card/ProductCard'
import { Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => (
    <div className='category-preview-container'>
      <h2>
        <Link to={title}>
        <span className='title'>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
  
  export default CategoryPreview;