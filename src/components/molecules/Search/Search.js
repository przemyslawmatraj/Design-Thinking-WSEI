import React, { useState } from 'react'
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import TeamCard from '../../../components/molecules/TeamCard/TeamCard'
import DefaultImg from '../../../assets/graphics/default.webp'
import { returnStatus, singleTeam } from '../../../constants/dropdownOptions'
import Dropdown from '../Dropdown/Dropdown'
import Paragraph from '../../atoms/Paragraph'

const Search = () => {
  const { teams } = useAuth()
  const [substring, setSubstring] = useState('')
  const [filteredTeams, setFilteredTeams] = useState(teams)
  const [selected, setSelected] = useState('')
  return (
    <div className={css.wrapper}>
      <label htmlFor="search">
        <Paragraph tag="h1" color="green" title="Wyszukaj drużynę" />
        <input
          type="text"
          id="search"
          placeholder="Wyszukaj zespół"
          value={substring}
          onChange={(e) => {
            setSubstring(e.target.value)
            if (e.target.value === '') {
              setFilteredTeams(teams)
            } else {
              setFilteredTeams(
                teams.filter(
                  (team) =>
                    team.username.toLowerCase().includes(e.target.value.toLowerCase()) &&
                    (team.idea?.status === selected ||
                      selected === '' ||
                      (!team.idea?.status && selected === 'PENDING'))
                )
              )
            }
          }}
        />
      </label>
      <Dropdown
        defaultValue="Wszystkie drużyny"
        className={css.dropdown}
        setSelected={setSelected}
        selected={selected}
        options={singleTeam}
        onChange={(e) => {
          setSelected(e.target.value)
          if (e.target.value === '') {
            setFilteredTeams(teams)
          } else {
            setFilteredTeams(
              teams.filter(
                (team) =>
                  team.username.toLowerCase().includes(substring.toLowerCase()) &&
                  (team.idea?.status === e.target.value ||
                    e.target.value === '' ||
                    (!team.idea?.status && e.target.value === 'PENDING'))
              )
            )
          }
        }}
      />
      <div className={css.teams}>
        {filteredTeams.length > 0 ? (
          filteredTeams.map((team) => (
            <TeamCard
              key={team.id}
              id={team.id}
              name={team.username}
              img={DefaultImg}
              leaderEmail={team.email}
              leaderPhone={team.members[0].phoneNumber}
              statusTitle="Status"
              statusContent={team.idea ? returnStatus(team.idea.status) : 'Oczekuje na akceptację'}
            />
          ))
        ) : (
          <h1>Nie znaleziono zespołów</h1>
        )}
      </div>
    </div>
  )
}

export default Search
