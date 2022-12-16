import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
const Navigation = () => {
    return(
// Fragment acts like a parent div without adding anything to the DOM - no extra divs ----------------------------
        <Fragment>
          <div className='navigation'>
            <Link className='logoContainer' to='/'>
            <div>Logo</div>
            </Link>
            <div className='linksContainer'>
               <Link className='navLink' to='/shop'>
                SHOP
               </Link> 
            </div>
          </div>
          {/* Outlet renders the child component here: */}
          <Outlet />
        </Fragment>
      )
}

export default Navigation