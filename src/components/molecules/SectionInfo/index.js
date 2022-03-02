import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

import Button from '../../atoms/Button';

const SectionInfo = ({ title, subTitle, button, header, children, className }) => (
  <>
    <div className={css.mainSection}>
      <h5 className={css.subTitle}>{subTitle}</h5>
      <div>
        {header === 1 ? <h1 className={css.title}>{title}</h1> : <h2 className={css.title}>{title}</h2>}
        <p className={css.description}>{children}</p>
      </div>
      <Button color="black">{button}</Button>
    </div>
  </>
);

SectionInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  button: PropTypes.string,
  header: PropTypes.number,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SectionInfo;
