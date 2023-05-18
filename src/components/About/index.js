// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-bg-container">
    <Header />
    <div className="about-popup-container">
      <img
        className="about-popup-img"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
