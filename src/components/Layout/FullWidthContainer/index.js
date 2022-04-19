import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import clsx from 'clsx'

import Container from '../Container'

const FullWidthContainer = ({ children, bgColor }) => (
  <div
    className={clsx(css.fullWidth, {
      [css[bgColor || 'white']]: true,
    })}
  >
    <Container>{children}</Container>
  </div>
)

FullWidthContainer.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
}

export default FullWidthContainer
