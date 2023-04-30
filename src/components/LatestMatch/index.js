// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeamLogo,
    competingTeam,
    date,
    venue,
    result,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
  } = latestMatchDetails

  return (
    <div className="latestMatches-inside-container">
      <div className="latestMatches-left-container">
        <p className="competing-team">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="latestMatches-right-container">
        <p className="latestMatches-right-headings">First Innings</p>
        <p>{firstInnings}</p>
        <p className="latestMatches-right-headings">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="latestMatches-right-headings">Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="latestMatches-right-headings">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
