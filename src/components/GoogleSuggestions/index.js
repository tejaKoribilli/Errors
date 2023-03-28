// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: '', id: null}

  onSearch = event => {
    const inputValue = event.target.value
    this.setState({searchInput: inputValue})
  }

  selectSuggestion = (evenId, suggestion) => {
    const {searchInput} = this.state
    this.setState({id: evenId})
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput, id} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="google-image"
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        />
        <div className="search-container">
          <div className="input-container">
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-bar"
              onChange={this.onSearch}
            />
          </div>
          <ul className="list-container">
            {searchResult.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                selectSuggestion={this.selectSuggestion}
                eachItem={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
