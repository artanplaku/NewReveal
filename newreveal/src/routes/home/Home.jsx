import React from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'

const Home = () => {

    const categories = [
        {
          id: 1,
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
          id: 2,
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
          id: 3,
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
          id: 4,
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
          id: 5,
          title: "mens",
          // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          imageUrl: "https://cdn.shopify.com/s/files/1/0692/4255/files/SL_Fall18_Sneak002_3_x800.jpg?v=1664891645",
        }
      ]

  return (
    <div>
    <CategoryList categories={categories}/>
    </div>
  )
}

export default Home