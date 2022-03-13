import React from 'react';

import css from './index.module.scss';

import Navbar from '../../molecules/Navbar';

const Footer = () => (
  <>
    <div className={css.container}>
      <Navbar color="white" />
    </div>
  </>
);

export default Footer;
