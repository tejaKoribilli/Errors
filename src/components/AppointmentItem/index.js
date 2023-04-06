// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, onStarFavourite} = props
  const {date, isStarred, title, id} = eachAppointment
  const dayDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const starUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    onStarFavourite(id)
  }

  return (
    <li className="list-item">
      <div className="title-star-container">
        <p className="title-heading">{title}</p>
        <button type="button" data-testid="star" className="star-btn">
          <img
            className="star-img"
            src={starUrl}
            alt="star"
            onClick={onClickStar}
          />
        </button>
      </div>
      <p className="date-para">Date: {dayDate}</p>
    </li>
  )
}

export default AppointmentItem
