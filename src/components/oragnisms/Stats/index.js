import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import Card from '../../Layout/Card'
import Paragraph from '../../atoms/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import circleDocument from '../../../assets/graphics/circleDocument.svg'
import useAuth from '../../../hooks/useAuth'

const Stats = ({ isEditable }) => {
  const { teams } = useAuth()
  const [stats, setStats] = React.useState({
    teamCount: 0,
    teamToday: 0,
    membersToday: 0,
  })

  useEffect(() => {
    const getPreviousDay = (date = new Date()) => {
      const previous = new Date(date.getTime())
      previous.setDate(date.getDate() - 1)
      return previous
    }
    const checkDate = (team, teamToday, membersToday) => {
      const today = new Date()
      const yesterday = getPreviousDay()
      const dateToCheck = new Date(team.dateOfRegistry)
      if (dateToCheck >= yesterday && dateToCheck <= today) {
        teamToday += 1
        membersToday += team.members.length
      }
      return { teamToday, membersToday }
    }
    if (teams) {
      let teamCount = 0
      let teamToday = 0
      let membersToday = 0
      teams.forEach((team) => {
        teamCount += team.members.length
        let result = checkDate(team, teamToday, membersToday)
        teamToday = result.teamToday
        membersToday = result.membersToday
      })
      setStats((prev) => ({
        ...prev,
        teamCount,
        teamToday,
        membersToday,
      }))
    }
  }, [teams])

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
          content={`${stats.teamToday} ZESPOŁÓW, ${stats.membersToday} UCZESTNIKÓW`}
        />
        <Paragraph
          tag="h3"
          title="W SUMIE UCZESTNICZY"
          color="green"
          content={`${stats.teamCount} OSÓB W ${teams.length} ZESPOŁACH`}
        />
      </div>
    </Card>
  )
}

Stats.propTypes = {
  isEditable: PropTypes.bool,
}

export default Stats
