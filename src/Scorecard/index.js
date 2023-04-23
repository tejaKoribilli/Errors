import './index.css'

const Scorecard = props => {
  const {score, onResetGame} = props
  console.log(score)

  const resetGame = () => {
    onResetGame()
  }

  return (
    <div className="score-card">
      <img
        alt="trophy"
        className="trophy-img"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="your-score">YOUR SCORE</p>
      <p className="score">{score}</p>
      <button type="button" className="reset-btn" onClick={resetGame}>
        <img
          alt="reset"
          className="reset-icon"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        />
        <p className="play-again">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default Scorecard
