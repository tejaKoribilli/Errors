// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const darkClassName = isDarkTheme ? 'dark-theme' : ''
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`navbar-container ${darkClassName}`}>
          <img
            className="website-logo"
            src={websiteLogoUrl}
            alt="website logo"
          />
          <ul className={`home-about-container ${darkClassName}`}>
            <li key="1">
              <Link to="/" className={`navbar-link ${darkClassName}`}>
                Home
              </Link>
            </li>
            <li key="2">
              <Link to="/about" className={`navbar-link ${darkClassName}`}>
                About
              </Link>
            </li>
          </ul>
          <button type="button" className="theme-btn" data-testid="theme">
            <img
              className="theme-img"
              onClick={onClickToggleTheme}
              src={themeUrl}
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
