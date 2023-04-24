import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Passwords from '../Passwords'
import './index.css'

class Home extends Component {
  state = {usersList: [], website: '', username: '', password: ''}

  onChangeWebsite = event => {
    const websiteValue = event.target.value
    this.setState({website: websiteValue})
  }

  onChangeUsername = event => {
    const websiteValue = event.target.value
    this.setState({username: websiteValue})
  }

  onChangePassword = event => {
    const websiteValue = event.target.value
    this.setState({password: websiteValue})
  }

  addWebsiteDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const websiteDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      usersList: [...prevState.usersList, websiteDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {usersList} = this.state
    const {website, username, password} = this.state

    return (
      <div className="bg-container">
        <img
          alt="app logo"
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="input-main-container">
          <div className="form-input-container">
            <h1 className="add-passwd-heading">Add New Password</h1>
            <form className="form-container" onSubmit={this.addWebsiteDetails}>
              <div className="input-container">
                <img
                  alt="website"
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  className="input-feild"
                  onChange={this.onChangeWebsite}
                  value={website}
                  placeholder="Enter Website"
                />
              </div>
              <div className="input-container">
                <img
                  alt="username"
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  className="input-feild"
                  onChange={this.onChangeUsername}
                  value={username}
                  placeholder="Enter Username"
                />
              </div>
              <div className="input-container">
                <img
                  alt="password"
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  type="password"
                  className="input-feild"
                  onChange={this.onChangePassword}
                  value={password}
                  placeholder="Enter Password"
                />
              </div>
              <button
                type="submit"
                className="add-user-btn"
                data-testid="delete"
              >
                Add
              </button>
            </form>
          </div>
          <img
            alt="password manager"
            className="password-manager-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          />
        </div>
        <Passwords usersList={usersList} />
      </div>
    )
  }
}

export default Home
