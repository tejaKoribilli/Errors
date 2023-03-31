// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  lastReview = () => {
    const {index} = this.state

    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  nextReview = () => {
    const {index} = this.state

    if (index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const reviewItem = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="main-container">
          <button type="button" className="arrow-btn" data-testid="leftArrow">
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.lastReview}
            />
          </button>

          <div className="review-app-container">
            <img
              className="profile-image"
              src={reviewItem.imgUrl}
              alt={reviewItem.username}
            />
            <p className="name">{reviewItem.username}</p>
            <p className="company-name">{reviewItem.companyName}</p>
            <p className="description">{reviewItem.description}</p>
          </div>
          <button type="button" className="arrow-btn" data-testid="rightArrow">
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              onClick={this.nextReview}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
