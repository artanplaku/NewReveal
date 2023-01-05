import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/product-card/ProductCard'
import './Category.scss'

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

  return (
    <div className='category-container'>
        {products &&
            products.map((product)=> (
                <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}
//Alternative way___________________________________________________________________
// if (Array.isArray(categoriesMap[category])) {
    //         return (
    //           <div className='category-container'>
    //               {categoriesMap[category].map((product)=> (
    //                   <ProductCard key={product.id} product={product}/>
    //               ))}
    //           </div>
    //         );
    //       } else {
    //         return <div>No products found</div>;
    //       }
    //     }

export default Category



