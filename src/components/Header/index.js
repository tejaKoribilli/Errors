// Write your code here
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <button type="button" className="menu-btn">
      <GiHamburgerMenu className="menu-icon" />
    </button>
  </div>
)

export default Header
