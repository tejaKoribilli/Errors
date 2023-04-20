// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachFaq, onShowDesc} = props
  const {questionText, isVisible, id} = eachFaq

  const onClickIcon = () => {
    onShowDesc(id, isVisible)
  }

  return (
    <li className="list-item">
      <div className="question-container">
        <h1 className="question-heading">{questionText}</h1>
        <button type="button" className="icon-btn" onClick={onClickIcon}>
          <img
            className="plus-icon"
            alt="plus"
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default FaqItem
