import React from 'react';
import css from './index.module.scss';

import undraw from '../../../assets/graphics/undrawContact.svg';

const Contact = () => (
  <div className={css.container} id="contact">
    <h1 className={css.title}>Napisz do nas</h1>
    <p className={css.description}>Lorem ipsum dolor sit amet , consectetur adipsicing elit.</p>
    <div className={css.bottom}>
      <form className={css.form} name="contact">
        <label htmlFor="contact-email">Email:</label>
        <input type="email" name="contact-email" id="contact-email" />
        <label htmlFor="contact-name">Imię:</label>
        <input type="text" name="contact-name" id="contact-name " />
        <label htmlFor="contact-message">Wiadomość:</label>
        <input type="textarea" name="contact-message" id="contact-message" />
        <input type="submit" value="Wyślij" />
      </form>
      <img loading="lazy" className={css.undraw} src={undraw} alt="kontakt email" />
    </div>
  </div>
);

export default Contact;
