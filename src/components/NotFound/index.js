// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const darkClassName = isDarkTheme ? 'dark-theme' : ''

      return (
        <>
          <Navbar />
          <div className={`notfound-container ${darkClassName}`}>
            <img
              className="notfound-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1>Lost Your Way?</h1>
            <p>We cannot seem to find the page you are looking for.</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
