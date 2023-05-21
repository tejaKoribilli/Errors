import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const ToggleShowContent = () => {
        onToggleShowContent()
      }

      const ToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const ToggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="ConfigurationController-container">
          <h1>Layout</h1>
          <button
            type="button"
            className="checkbox-container"
            onClick={ToggleShowContent}
          >
            <input type="checkbox" checked={showContent} id="content" />
            <label htmlFor="content" className="label">
              Content
            </label>
          </button>
          <button
            type="button"
            className="checkbox-container"
            onClick={ToggleShowLeftNavbar}
          >
            <input type="checkbox" checked={showLeftNavbar} id="left-nav" />
            <label htmlFor="left-nav" className="label">
              Left Navbar
            </label>
          </button>
          <button
            type="button"
            onClick={ToggleShowRightNavbar}
            className="checkbox-container"
          >
            <input type="checkbox" checked={showRightNavbar} />
            <label htmlFor="right-side" className="label">
              Right Navbar
            </label>
          </button>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
