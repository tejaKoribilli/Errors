import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailList from '../ThumbnailList'
import Scorecard from '../Scorecard'
import './index.css'

class Home extends Component {
  state = {
    activeTab: 'FRUIT',
    score: 0,
    time: 60,
    imgIndex: 0,
    isMatchLost: false,
  }

  componentDidMount() {
    this.timerId = setInterval(this.stopWatch, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  stopWatch = () => {
    const {time} = this.state
    if (time > 0) {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }))
    }

    if (time === 0) {
      clearInterval(this.timerId)
      this.setState({
        imgIndex: 0,
        activeTab: 'FRUIT',
        isMatchLost: true,
      })
    }
  }

  onChangeTab = tabId => {
    this.setState({activeTab: tabId})
  }

  onSelectImage = id => {
    const {imgIndex} = this.state
    const {imagesList} = this.props
    const matchImgId = imagesList[imgIndex].id
    const len = imagesList.length

    if (id === matchImgId) {
      let num = Math.floor(Math.random() * 10)
      if (num >= len) {
        num = len % num
      }
      this.setState(prevState => ({score: prevState.score + 1, imgIndex: num}))
    } else {
      clearInterval(this.timerId)
      this.setState({
        imgIndex: 0,
        activeTab: 'FRUIT',
        isMatchLost: true,
      })
    }
  }

  onResetGame = () => {
    this.setState({
      activeTab: 'FRUIT',
      score: 0,
      time: 60,
      imgIndex: 0,
      isMatchLost: false,
    })

    this.timerId = setInterval(this.stopWatch, 1000)
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {activeTab, score, imgIndex, time, isMatchLost} = this.state

    const activeImageList = imagesList.filter(
      each => each.category === activeTab,
    )

    const matchimageurl = imagesList[imgIndex].imageUrl

    return (
      <div className="bg-container">
        <ul className="navbar-container">
          <li>
            <img
              alt="website logo"
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            />
          </li>

          <li className="score-time-container">
            <p className="score-name">
              Score:<span className="scored-points">{score}</span>
            </p>
            <div className="timer-container">
              <img
                alt="timer"
                className="timer-clock"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              />
              <p className="time-left">{time} sec</p>
            </div>
          </li>
        </ul>
        {isMatchLost ? (
          <Scorecard score={score} onResetGame={this.onResetGame} />
        ) : (
          <>
            <img src={matchimageurl} alt="match" className="thumbnail-img" />
            <ul className="tabs-list-container">
              {tabsList.map(eachTab => (
                <TabItem
                  eachTab={eachTab}
                  key={eachTab.tabId}
                  onChangeTab={this.onChangeTab}
                  isTabActive={eachTab.tabId === activeTab}
                />
              ))}
            </ul>
            <ul className="images-list-container">
              {activeImageList.map(eachImage => (
                <ThumbnailList
                  eachImage={eachImage}
                  key={eachImage.id}
                  onSelectImage={this.onSelectImage}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
