import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import Card from '../../Layout/Card'
import Paragraph from '../../atoms/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import circleDocument from '../../../assets/graphics/circleDocument.svg'

const Stats = ({ isEditable }) => (
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
        <Paragraph tag="h3" title="DZISIAJ ZAPISAŁO SIĘ" content="5 ZESPOŁÓW, 25 UCZESTNIKÓW" />
        <Paragraph tag="h3" title="JEST ICH CORAZ WIECEJ " color="green" content="50 OSÓB W 10 ZESPOŁACH " />
      </div>
    </Card>
  </>
)

Stats.propTypes = {
  isEditable: PropTypes.bool,
}

export default Stats
