import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const TeamCard = ({ name, img, leaderEmail, leaderPhone, statusTitle, statusContent }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt={`team ${name} - img`} />
      <section className={styles.dataWrapper}>
        <h4 className={styles.title}>{name}</h4>
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
  leaderPhone: PropTypes.number,
  statusTitle: PropTypes.string,
  statusContent: PropTypes.string,
}

export default TeamCard
