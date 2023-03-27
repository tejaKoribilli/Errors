// Write your code here
import {Component} from 'react'
import './index.css'
import Login from './src/components/Login'
import Logout from './src/components/Logout'

class Home extends Component {
  state = {isLogged: false}

  onUserClick = () => {
    const {isLogged} = this.state

    if (isLogged) {
      this.setState({isLogged: false})
    } else {
      this.setState({isLogged: true})
    }
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <p className="message">Please Login</p>
          {isLogged && <Login onUserClick={this.onUserClick} />}
          {!isLogged && <Logout onUserClick={this.onUserClick} />}
        </div>
      </div>
    )
  }
}

export default Home
