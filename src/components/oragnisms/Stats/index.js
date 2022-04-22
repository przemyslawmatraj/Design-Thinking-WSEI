import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import Card from '../../Layout/Card'
import Paragraph from '../../atoms/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import circleDocument from '../../../assets/graphics/circleDocument.svg'

const Stats = ({ isEditable, teams }) => {
  let teamCount = 0
  let teamToday = 0
  let membersToday = 0
  function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime())
    previous.setDate(date.getDate() - 1)

    return previous
  }
  const checkDate = (team, teamToday, membersToday) => {
    const today = new Date()
    const yesterday = getPreviousDay()
    const dateToCheck = new Date(team.dateOfRegistry)
    if (dateToCheck >= yesterday && dateToCheck <= today) {
      teamToday++
      membersToday += team.members.length
      return { teamToday, membersToday }
    }
  }
  teams.forEach((team) => {
    teamCount += team.members.length
    teamToday = checkDate(team, teamToday, membersToday).teamToday
    membersToday = checkDate(team, teamToday, membersToday).membersToday
  })

  return (
    <Card className={css.stats}>
      {isEditable && (
        <div className={css.edit}>
          Redaguj
          <FontAwesomeIcon icon={faPen} />
        </div>
      )}
      <img src={circleDocument} alt="" className={css.statsImage} />
      <div className={css.right}>
        <Paragraph
          tag="h3"
          title="DZISIAJ ZAPISAŁO SIĘ"
          content={`${teamToday} ZESPOŁÓW, ${membersToday} UCZESTNIKÓW`}
        />
        <Paragraph
          tag="h3"
          title="W SUMIE UCZESTNICZY"
          color="green"
          content={`${teamCount} OSÓB W ${teams.length} ZESPOŁACH`}
        />
      </div>
    </Card>
  )
}

Stats.propTypes = {
  isEditable: PropTypes.bool,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Stats
