// Write your code here
import {Component} from 'react'
import React from 'react'
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

import 'reactjs-popup/dist/index.css'

import './index.css'

class Header extends Component {
  state = {showPopUp: false}

  onClickMenu = () => {
    this.setState(prevState => {
      showPopUp: !prevState.showPopUp
    })
  }

  renderPopUp = () => (
    <>
      <Popup trigger={<button>Open Popup</button>} modal>
        {close => (
          <div className="popup">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="content">
              <h2>Popup Content</h2>
              <p>This is the content of the popup.</p>
            </div>
          </div>
        )}
      </Popup>
    </>
  )

  renderHeader = () => (
    <>
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <button type="button" className="menu-btn" onClick={this.onClickMenu}>
        <GiHamburgerMenu className="menu-icon" />
      </button>
    </>
  )

  render() {
    const {showPopUp} = this.state

    return (
      <div className="header-container">
        {!showPopUp && this.renderHeader()}
        {showPopUp && this.renderPopUp()}
      </div>
    )
  }
}

export default Header
