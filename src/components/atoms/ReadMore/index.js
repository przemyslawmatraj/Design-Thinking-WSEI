import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import css from './index.module.scss'
import clsx from 'clsx'
import formatContent from '../../../helpers/formatContent'

const ReadMore = ({ children, className, btnColor, type }) => {
  const [isFull, setFullText] = useState(false)

  return (
    <>
      {type === 'html' ? (
        <div
          className={clsx({
            [className]: className,
            [css.notFull]: !isFull,
            [css.full]: isFull,
          })}
          dangerouslySetInnerHTML={{ __html: formatContent(children) }}
        ></div>
      ) : (
        <div
          className={clsx({
            [className]: className,
            [css.notFull]: !isFull,
            [css.full]: isFull,
          })}
        >
          {children}
        </div>
      )}

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
  type: PropTypes.string,
}

export default ReadMore
