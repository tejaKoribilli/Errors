import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class Passwords extends Component {
  state = {isChecked: false, deleteIds: [], searchInput: ''}

  onCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onDeleteWebsite = id => {
    this.setState(prevState => ({deleteIds: [...prevState.deleteIds, id]}))
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {usersList} = this.props
    const {isChecked, deleteIds, searchInput} = this.state

    const filteredList = usersList.filter(each => {
      if (deleteIds.includes(each.id)) {
        return null
      }
      return each
    })

    const searchResults = filteredList.filter(eachWebsite =>
      eachWebsite.website.toLowerCase().includes(searchInput),
    )

    const userListLen = searchResults.length
    const isUserListEmpty = userListLen === 0

    return (
      <div className="passwords-bg-container">
        <div className="passwords-top-container">
          <div className="your-passwd-container">
            <h1 className="your-passwd-heading">Your Passwords</h1>
            <p className="passwd-count">{userListLen}</p>
          </div>
          <div className="pswd-search-container">
            <img
              alt="search"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            />
            <input
              placeholder="Search"
              className="search-field"
              onChange={this.onSearchInput}
              type="search"
              value={searchInput}
            />
          </div>
        </div>
        <hr className="top-container-line" />
        <div className="paswd-bottom-container">
          <div className="show-pswd-container">
            <input id="checkbox" type="checkbox" onClick={this.onCheckBox} />
            <label htmlFor="checkbox" className="show-paswd">
              Show Passwords
            </label>
          </div>
          {isUserListEmpty ? (
            <>
              <img
                alt="no passwords"
                className="no-paswd-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p className="no-passwd">No Passwords</p>
            </>
          ) : (
            <ul className="website-details-list">
              {searchResults.map(each => (
                <PasswordItem
                  each={each}
                  key={each.id}
                  isChecked={isChecked}
                  onDeleteWebsite={this.onDeleteWebsite}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Passwords
