// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, selectSuggestion} = props
  const {id, suggestion} = eachItem

  const onSelectSearch = () => {
    const evenId = id
    selectSuggestion(evenId, suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <img
        alt="arrow"
        onClick={onSelectSearch}
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
