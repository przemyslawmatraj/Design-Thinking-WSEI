import React from 'react'
import styles from './index.module.scss'
import TeamCard from '../../../components/molecules/TeamCard/TeamCard'
import DefaultImg from '../../../assets/graphics/default.svg'

const TeamList = () => (
  <div className={styles.wrapper}>
    <TeamCard name="testowy zespół" img={DefaultImg} leaderEmail="test@wsei.edu.pl" leaderPhone={12830324748} statusTitle="sprawdzony" statusContent='testowy status content'/>
    <TeamCard name="testowy zespół" img={DefaultImg} leaderEmail="test@wsei.edu.pl" leaderPhone={12830324748} statusTitle="sprawdzony" statusContent='testowy status content'/>
    <TeamCard name="testowy zespół" img={DefaultImg} leaderEmail="test@wsei.edu.pl" leaderPhone={12830324748} statusTitle="sprawdzony" statusContent='testowy status content'/>
    <TeamCard name="testowy zespół" img={DefaultImg} leaderEmail="test@wsei.edu.pl" leaderPhone={12830324748} statusTitle="sprawdzony" statusContent='testowy status content'/>
    <TeamCard name="testowy zespół" img={DefaultImg} leaderEmail="test@wsei.edu.pl" leaderPhone={12830324748} statusTitle="sprawdzony" statusContent='testowy status content'/>
  </div>
)

export default TeamList