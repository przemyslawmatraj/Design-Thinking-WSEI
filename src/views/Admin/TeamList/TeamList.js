import React from 'react'
import styles from './index.module.scss'
import TeamCard from '../../../components/molecules/TeamCard/TeamCard'

const TeamList = () => (
  <div className={styles.wrapper}>
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
    <TeamCard />
  </div>
)

export default TeamList