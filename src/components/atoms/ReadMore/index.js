import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import css from './index.module.scss'
import clsx from 'clsx'

const ReadMore = ({ children, className, btnColor }) => {
  const [isFull, setFullText] = useState(false)

  return (
    <>
      <div
        className={clsx({
          [className]: className,
          [css.notFull]: !isFull,
          [css.full]: isFull,
        })}
      >
        {children}
      </div>
      <Button onClick={() => setFullText(!isFull)} tag="span" color={btnColor}>
        {isFull ? 'CZYTAJ MNIEJ' : 'CZYTAJ WIĘCEJ'}
      </Button>
    </>
  )
}

ReadMore.propTypes = {
  btnColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default ReadMore
