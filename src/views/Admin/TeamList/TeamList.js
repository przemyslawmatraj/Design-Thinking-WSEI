import React from 'react'
import useAuth from '../../../hooks/useAuth'
import Search from '../../../components/molecules/Search/Search'
import Container from '../../../components/Layout/Container'

const TeamList = () => {
  const { teams } = useAuth()
  console.log(teams)
  return <Container>{teams.length > 0 ? <Search /> : <h1>Jeszcze nikt się nie zapisał!</h1>}</Container>
}

export default TeamList
