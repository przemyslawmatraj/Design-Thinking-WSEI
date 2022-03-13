import React from 'react';
import css from './index.module.scss';

import undraw from '../../../assets/graphics/undrawContact.svg';

const Contact = () => (
  <div className={css.container} id="contact">
    <h1 className={css.title}>Napisz do nas</h1>
    <p className={css.description}>Lorem ipsum dolor sit amet , consectetur adipsicing elit.</p>
    <div className={css.bottom}>
      <form className={css.form} action="/" name="contact">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="name">Imię:</label>
        <input type="text" name="name" id="name " />
        <label htmlFor="message">Wiadomość:</label>
        <input type="textarea" name="message" id="message" />
        <input type="submit" value="Wyślij" />
      </form>
      <img loading="lazy" className={css.undraw} src={undraw} alt="kontakt email" />
    </div>
  </div>
);

export default Contact;
