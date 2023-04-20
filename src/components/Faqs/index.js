// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {faqList: this.props}

  componentDidMount() {}

  onShowDesc = (id, isVisible) => {
    console.log(id)
    console.log(isVisible)
  }

  getFaqList = () => {
    const {faqList} = this.state
    const {faqsList} = faqList

    const result = faqsList.map(each => (each.isVisible: false))

    return result
  }

  render() {
    const {faqList} = this.state
    const {faqsList} = faqList
    console.log(faqsList)
    // const resultFaqList = this.getFaqList()

    return (
      <div className="bg-container">
        <div className="faqs-container">
          <h1 className="faq-heading">FAQS</h1>
          <ul className="list-container">
            {faqsList.map(each => (
              <FaqItem
                eachFaq={each}
                key={each.id}
                onShowDesc={this.onShowDesc}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
