import React from 'react'
import styles from './index.module.scss'
import DefaultImg from '../../../assets/graphics/default.svg'

const TeamCard = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={DefaultImg} />
      <section className={styles.dataWrapper}>
        <h4 className={styles.title}>Team asdssd</h4>
        <div className={styles.dataContent}>
            <p>jupila.orange@gmail.com </p>
            <p>Tel. 457 347 235</p>
        </div>
        <h5 className={styles.statusTitle}>status zespołu</h5>
        <p className={styles.statusContent}>ssprawdzona poprawność</p>
      </section>
    </div>
  )
}

export default TeamCard