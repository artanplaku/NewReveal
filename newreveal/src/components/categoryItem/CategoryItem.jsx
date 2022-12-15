import React from 'react'
import './categoryItem.scss'

const categoryItem = ({ category }) => {
  return (
    <div  className='categoryContainer'>
          <div className='backgroundImg' style={{
            backgroundImage: `url(${category.imageUrl})`
            }}/>
          <div className='categoryBodyContainer'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
      </div>
  )
}

export default categoryItem