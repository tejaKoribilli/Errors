// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftSide = () => (
        <div className="left-side-container">
          <h1 className="leftSide-navbar-heading">Left Navbar Menu</h1>
          <ul className="left-side-list-container">
            <li className="left-side-item">Item 1</li>
            <li className="left-side-item">Item 2</li>
            <li className="left-side-item">Item 3</li>
            <li className="left-side-item">Item 4</li>
          </ul>
        </div>
      )

      const renderMiddleBody = () => (
        <div className="renderMiddleBody-container">
          <h1 className="renderMiddleBody-heading">Content</h1>
          <p className="renderMiddleBody-content">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
            dolor sit amet, consectetur
          </p>
        </div>
      )

      const renderRightSide = () => (
        <div className="renderRightSide-container">
          <h1 className="renderRightSide-heading">Right Navbar</h1>
          <div className="right-ad-box">
            <p>Ad 1</p>
          </div>
          <div className="right-ad-box">
            <p>Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-bgComponent-container">
          {showLeftNavbar && renderLeftSide()}
          {showContent && renderMiddleBody()}
          {showRightNavbar && renderRightSide()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
