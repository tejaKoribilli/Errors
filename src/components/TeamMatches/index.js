// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatches: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()

    const latestMatchDetailUpdated = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const updatedRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

    const updatedTeamMatchesData = {
      latestMatchDetails: latestMatchDetailUpdated,
      recentMatches: updatedRecentMatches,
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({teamMatches: updatedTeamMatchesData, isLoading: false})
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let backgroundColorClass = ''

    if (id === 'RCB') {
      backgroundColorClass = 'rcb-background'
    } else if (id === 'KKR') {
      backgroundColorClass = 'kkr-background'
    } else if (id === 'KXP') {
      backgroundColorClass = 'kxp-background'
    } else if (id === 'CSK') {
      backgroundColorClass = 'csk-background'
    } else if (id === 'RR') {
      backgroundColorClass = 'rr-background'
    } else if (id === 'MI') {
      backgroundColorClass = 'mi-background'
    } else if (id === 'SH') {
      backgroundColorClass = 'srh-background'
    } else if (id === 'DC') {
      backgroundColorClass = 'dc-background'
    }

    return backgroundColorClass
  }

  render() {
    const {teamMatches, isLoading} = this.state
    const {latestMatchDetails, teamBannerUrl, recentMatches} = teamMatches
    const listContainerBakcground = this.getBackgroundColor()

    return (
      <div className={`teamMatches-container ${listContainerBakcground}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <img
              className="team-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <p className="latestMatches-label">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recentMatches-list-container">
              {recentMatches.map(each => (
                <MatchCard each={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
