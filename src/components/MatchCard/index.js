// Write your code here
import './index.css'

const MatchCard = props => {
  const {each} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = each
  const matchStatusClass = matchStatus === 'Won' ? 'green-class' : 'red-class'

  return (
    <li className="MatchCard-list-item-container">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`match-status ${matchStatusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
