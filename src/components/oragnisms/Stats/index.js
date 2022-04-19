import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import Card from '../../Layout/Card'
import Paragraph from '../../atoms/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import circleDocument from '../../../assets/graphics/circleDocument.svg'

const Stats = ({ isEditable, teams }) => (
  <>
    <Card className={css.stats}>
      {isEditable && (
        <div className={css.edit}>
          Redaguj
          <FontAwesomeIcon icon={faPen} />
        </div>
      )}
      <img src={circleDocument} alt="" className={css.statsImage} />
      <div className={css.right}>
        <Paragraph tag="h3" title="DZISIAJ ZAPISAŁO SIĘ" content="Y ZESPOŁÓW, X UCZESTNIKÓW" />
        <Paragraph tag="h3" title="W SUMIE UCZESTNICZY" color="green" content="X OSÓB W Y ZESPOŁACH " />
      </div>
    </Card>
  </>
)

Stats.propTypes = {
  isEditable: PropTypes.bool,
  teams: PropTypes.object,
}

export default Stats
