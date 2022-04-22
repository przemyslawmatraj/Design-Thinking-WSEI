import React from 'react'
import useAuth from '../../../hooks/useAuth'
import Search from '../../../components/molecules/Search/Search'

const TeamList = () => {
  const { teams } = useAuth()
  console.log(teams)
  return teams.length > 0 ? <Search /> : <h1>Jeszcze nikt się nie zapisał!</h1>
}

export default TeamList
