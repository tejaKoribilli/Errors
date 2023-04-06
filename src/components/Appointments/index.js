// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', isStarredActive: false}

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onStarFavourite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  getStarredAppointments = () => {
    const {isStarredActive} = this.state

    if (isStarredActive) {
      this.setState({isStarredActive: false})
    } else {
      this.setState({
        isStarredActive: true,
      })
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {appointmentsList, title, date, isStarredActive} = this.state
    const StarredBtnClass = isStarredActive ? 'starred-active' : ''

    const StarredResults = appointmentsList.filter(
      each => each.isStarred === true,
    )

    const ResultList = isStarredActive ? StarredResults : appointmentsList

    return (
      <div className="bg-container">
        <div className="container">
          <div className="main-container">
            <div className="content-container">
              <h1 className="add-heading">Add Appointment</h1>
              <form className="appointment-form" onSubmit={this.addAppointment}>
                <label htmlFor="title-input" className="label-name">
                  Title
                </label>
                <input
                  id="title-input"
                  type="text"
                  className="input-field"
                  placeholder="Title"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <label htmlFor="date-input" className="label-name">
                  Date
                </label>
                <input
                  id="date-input"
                  type="date"
                  className="input-field"
                  placeholder="dd/mm/yyyy"
                  onChange={this.onChangeDate}
                  value={date}
                />
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <img
              className="appointments-image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="appointments-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              type="button"
              className={`starred-btn ${StarredBtnClass}`}
              onClick={this.getStarredAppointments}
            >
              Starred
            </button>
          </div>

          <ul className="list-container">
            {ResultList.map(eachAppointment => (
              <AppointmentItem
                eachAppointment={eachAppointment}
                key={eachAppointment.id}
                onStarFavourite={this.onStarFavourite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
