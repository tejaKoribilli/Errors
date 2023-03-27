// Write your code here
import './index.css'

const Login = props => {
  const {onUserClick} = props

  const onLogin = () => {
    onUserClick()
  }

  return (
    <button type="button" className="login-btn" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
