// Write your code here
import './index.css'

const Logout = props => {
  const {onUserClick} = props

  const onLogout = () => {
    onUserClick()
  }

  return (
    <button type="button" className="logout-btn" onClick={onLogout}>
      Logout
    </button>
  )
}

export default Logout
