import React from 'react'

import css from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <footer className={css.container}>
    <div className={css.row}>
      <h5>Znajdź nas na: </h5>
      <div className={css.socialMedia}>
        <a href="https://www.facebook.com/dthwsei" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} />
          Facebook
        </a>
      </div>
      <div className={css.socialMedia}>
        <a href="https://www.instagram.com/kns_wsei_designthinkinghub/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagramSquare} />
          Instagram
        </a>
      </div>
    </div>
    <div className={css.row}>
      <h5>Twórcy platformy:</h5>
      <div className={css.github}>Przemysław Matraj</div>
      <div className={css.github}>Adam Wasylewicz</div>
    </div>
  </footer>
)

export default Footer
