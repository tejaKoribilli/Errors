import './index.css'

const TabItem = props => {
  const {eachTab, onChangeTab, isTabActive} = props
  const {displayText, tabId} = eachTab

  const activeClassName = isTabActive ? 'active-tab' : ''

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-name ${activeClassName}`}
      >
        {displayText}
      </button>
      {isTabActive ? <hr className="under-line" /> : ''}
    </li>
  )
}

export default TabItem
