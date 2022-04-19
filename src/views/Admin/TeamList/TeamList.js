import React from 'react'
import styles from './index.module.scss'
import TeamCard from '../../../components/molecules/TeamCard/TeamCard'
import DefaultImg from '../../../assets/graphics/default.svg'
import useAuth from '../../../hooks/useAuth'

const TeamList = () => {
  const { teams } = useAuth()
  console.log(teams)
  return (
    <div className={styles.wrapper}>
      {teams.length > 0 ? (
        teams.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            name={team.username}
            img={DefaultImg}
            leaderEmail={team.email}
            leaderPhone={team.members[0].phoneNumber}
            statusTitle="Status"
            statusContent={team.idea ? team.idea.status : 'Oczekuje na akceptację'}
          />
        ))
      ) : (
        <h1>Jeszcze nikt się nie zapisał!</h1>
      )}
    </div>
  )
}

export default TeamList
