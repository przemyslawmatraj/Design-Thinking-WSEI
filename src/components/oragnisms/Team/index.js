/* eslint-disable css-modules/no-unused-class */
import React from 'react'
import css from './index.module.scss'
import ConnectElements from '../../../helpers/ConnectElements'
import teamLogo from '../../../assets/logo/smallLogo.svg'
import persons from './persons'

const Team = () => (
  <>
    <div id="team" className={css.container}>
      <div className={css.teamLogo} id="teamLogo">
        <img loading="lazy" src={teamLogo} alt="Logo zespołu Design Thinking Hub" />
        <h3>
          <span>ZESPÓŁ</span>
          <br />
          DESIGN THINKING HUB
        </h3>
      </div>
      {persons.map((person, index) => (
        <div key={person.name} className={css.person} id={`person${index + 1}`}>
          <img
            loading="lazy"
            className={css.personImage}
            src={person.image != null ? person.image : `https://i.pravatar.cc/150?u=${person.name}`}
            alt="zdjęcie członka zespołu"
          />
          <h5>
            <span>{person.role}</span>
            <br />
            {person.name}
          </h5>
        </div>
      ))}
    </div>
    <ConnectElements
      color="#00000025"
      strokeWidth={1}
      selector="#team"
      overlay={-1}
      elements={[
        { from: '#person1', to: '#person3' },
        { from: '#person1', to: '#person2' },
        { from: '#person1', to: '#person6' },
        { from: '#person2', to: '#person3' },
        { from: '#person2', to: '#person7' },
        { from: '#person2', to: '#teamLogo' },
        { from: '#person3', to: '#person4' },
        { from: '#person3', to: '#person5' },
        { from: '#person3', to: '#teamLogo' },
        { from: '#person4', to: '#person5' },
        { from: '#person4', to: '#teamLogo' },
        { from: '#person4', to: '#person9' },
        { from: '#person4', to: '#person10' },
        { from: '#person5', to: '#person10' },
        { from: '#person6', to: '#person2' },
        { from: '#person6', to: '#person7' },
        { from: '#person7', to: '#teamLogo' },
        { from: '#person7', to: '#person8' },
        { from: '#person8', to: '#teamLogo' },
        { from: '#person8', to: '#person9' },
        { from: '#person9', to: '#teamLogo' },
        { from: '#person9', to: '#person10' },
        { from: '#person9', to: '#person11' },
        { from: '#person7', to: '#person11' },
      ]}
    />
  </>
)

export default Team
