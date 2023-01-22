import React from 'react'
import DirectoryItem from '../directory-item/DirectoryItem';
import './Directory.scss'

const categories = [
  {
    id: 1,
    title: "hats",
    // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    imageUrl: "https://t4.ftcdn.net/jpg/01/25/32/41/360_F_125324167_13XsyDI3CPNhuYGWgbnMkQ37n4aWJyYB.jpg",
    route:"shop/hats"
  },
  {
    id: 2,
    title: "jackets",
    // imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    imageUrl: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Mens-Jacket-Keanu-Black-110221-1.jpg?v=1636392243",
    route:"shop/jackets"
  },
  {
    id: 3,
    title: "sneakers",
    // imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    imageUrl: "https://thumbs.dreamstime.com/b/row-sneakers-flea-market-alun-area-bandung-indonesia-march-226470676.jpg",
    route:"shop/sneakers"
  },
  {
    id: 4,
    title: "womens",
    // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    imageUrl: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-ali-pazani-2584269.jpg&fm=jpg",
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