import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import clsx from 'clsx'

const Dropdown = ({ setSelected, selected, options, onChange, className, defaultValue }) => {
  setSelected(selected)
  return (
    <select
      className={clsx(css.dropdown, className)}
      id="dropdown"
      name="dropdown"
      aria-label="Wybierz status"
      onChange={onChange}
      value={selected}
    >
      <option value="">{defaultValue || 'Status'}</option>
      {options.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

Dropdown.propTypes = {
  setSelected: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
}

export default Dropdown
