import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'

const Paragraph = ({ tag, title, color, content }) => {
  const Tag = tag

  return (
    <>
      <div className={css.paragraph}>
        <Tag className={css[color || 'black']}>{title}</Tag>
        {content && <p className={css.paragraph}>{content}</p>}
      </div>
    </>
  )
}

Paragraph.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
}

export default Paragraph
