import './index.css'

const PasswordItem = props => {
  const {each, isChecked, onDeleteWebsite} = props
  const {website, username, password, id} = each
  const iswebSiteEmpty = website === ''
  const websiteLetter = iswebSiteEmpty ? '' : website[0].toUpperCase()

  const onDelete = () => {
    onDeleteWebsite(id)
  }

  return (
    <li className="list-item">
      <p className="website-firstLetter">{websiteLetter}</p>
      <div className="website-passwd-container">
        <p className="website-name">{website}</p>
        <p className="user-name">{username}</p>
        {isChecked ? (
          <p className="pass-visible">{password}</p>
        ) : (
          <img
            alt="stars"
            className="stars-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
      </div>
      <button type="button" className="delete-btn" onClick={onDelete}>
        <img
          alt="delete"
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItem
