import React from 'react'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './Navigation.scss'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/Firebase'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)

  const signOutHandler = async () => {
    const res = await signOutUser();
    console.log(res);
    setCurrentUser(null);
  }
    

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
               {currentUser ? (
                  <span className='nav-link' onClick={signOutHandler}> SIGNOUT</span>
                  ): (<Link className='navLink' to='/auth'>
                  SIGN IN
                 </Link>
                 )}
            </div>
          </div>
          {/* Outlet renders the child component here: */}
          <Outlet />
        </Fragment>
      )
}

export default Navigation