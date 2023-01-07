import React from 'react'
import DirectoryItem from '../directory-item/DirectoryItem';
import './Directory.scss'

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route:"shop/hats"
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route:"shop/jackets"
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route:"shop/sneakers"
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route:"shop/womens"
  },
  {
    id: 5,
    title: "mens",
    // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    imageUrl: "https://cdn.shopify.com/s/files/1/0692/4255/files/SL_Fall18_Sneak002_3_x800.jpg?v=1664891645",
    route:"shop/mens"
  }
]


const Directory = () => {
  
    
      return (
          <div className='directory-container'>
            {categories.map((category)=>(
              <DirectoryItem key={category.id} category={category} />
            ))}
            
          </div>
      );
}

export default Directory