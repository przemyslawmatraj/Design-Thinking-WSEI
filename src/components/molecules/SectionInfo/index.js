import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'

import Button from '../../atoms/Button'

const SectionInfo = ({ title, subTitle, button, btnPath, btnColor, header, children, className }) => (
  <>
    <div className={css.mainSection}>
      <h5 className={css.subTitle}>{subTitle}</h5>
      <div>
        {header === 1 ? <h1 className={css.title}>{title}</h1> : <h2 className={css.title}>{title}</h2>}
        <div className={css.description}>{children}</div>
      </div>
      {button ? (
        <Button path={btnPath} color="black">
          {button}
        </Button>
      ) : (
        ''
      )}
    </div>
  </>
)

SectionInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  button: PropTypes.string,
  btnPath: PropTypes.string,
  btnColor: PropTypes.string,
  header: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default SectionInfo
