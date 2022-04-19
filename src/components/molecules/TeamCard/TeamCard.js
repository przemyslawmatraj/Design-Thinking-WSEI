import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const TeamCard = ({ name, img, leaderEmail, leaderPhone, statusTitle, statusContent, id }) => {
  const navigate = useNavigate()

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        navigate(`/admin/user/${id}`)
      }}
    >
      <img className={styles.img} src={img} alt={`team ${name} - img`} />
      <section className={styles.dataWrapper}>
        <h4 className={styles.title}>
          {id - 2}. {name}
        </h4>
        <div className={styles.dataContent}>
          <p>{leaderEmail}</p>
          <p>Tel. {leaderPhone}</p>
        </div>
        <h5 className={styles.statusTitle}>{statusTitle}</h5>
        <p className={styles.statusContent}>{statusContent}</p>
      </section>
    </div>
  )
}

TeamCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  leaderEmail: PropTypes.string,
  leaderPhone: PropTypes.string,
  statusTitle: PropTypes.string,
  statusContent: PropTypes.string,
  id: PropTypes.number,
}

export default TeamCard
