import React from 'react'
import './DirectoryItem.scss'
import { useNavigate} from 'react-router-dom'

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () =>navigate(category.route);

  return (
    <div  className='directory-item-container' onClick={onNavigateHandler}>
          <div className='background-image' style={{
            backgroundImage: `url(${category.imageUrl})`
            }}/>
          <div className='body'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
      </div>
  )
}

export default DirectoryItem