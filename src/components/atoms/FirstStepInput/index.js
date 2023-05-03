import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import css from './index.module.scss'

const FirstStepInput = ({errorMessage, fieldName, register, label, getValues}) => {
    return <div className={css.stepOneGroup}>
    <label htmlFor={fieldName} className={css.stepOneLabel}>
      <span className={css.stepOneLabelText}>
        {label}
        <span className={css.star}>*</span>
      </span>
  
      <input
        {...register(fieldName)}
        className={clsx(css.stepOneInput, {
          [css.stepOneInputError]: !!errorMessage,
          [css.stepOneInputSuccess]: !!!errorMessage && getValues(fieldName),
        })}
        autoComplete="nope"
      />
    </label>
    {errorMessage && (
      <span className={css.stepOneError}>
        {errorMessage}
      </span>
    )}
  </div>
  }


FirstStepInput.propTypes = {
    errorMessage: PropTypes.string,
    fieldName: PropTypes.string,
    register: PropTypes.func,
    label: PropTypes.string,
    getValues: PropTypes.func,
  }

  
  export default FirstStepInput