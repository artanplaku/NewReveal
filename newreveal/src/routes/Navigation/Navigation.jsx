import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './Navigation.scss'

const Navigation = () => {
    return(
// Fragment acts like a parent div without adding anything to the DOM - no extra divs ----------------------------
        <Fragment>
          <div className='navigation'>
            <Link className='logoContainer' to='/'>
            <CrwnLogo className='logo' />
            </Link>
            <div className='linksContainer'>
               <Link className='navLink' to='/shop'>
                SHOP
               </Link> 
               <Link className='navLink' to='/auth'>
                SIGN IN
               </Link>
            </div>
          </div>
          {/* Outlet renders the child component here: */}
          <Outlet />
        </Fragment>
      )
}

export default Navigation