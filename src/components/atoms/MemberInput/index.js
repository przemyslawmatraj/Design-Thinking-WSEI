import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import css from './index.module.scss'

const MemberInput = ({index, errorMessage, register, fieldName, label, getValues, isAddress = false }) => {
    const fieldId = useMemo(() => `members.${index}.${isAddress ? `address.${fieldName}` : fieldName }`, [index, fieldName, isAddress])
    
    return <div className={css.memberField}>
    <label htmlFor={`member.${index}.name`}>
      {label}<span className={css.star}>*</span>
    </label>
    <input
      {...register(fieldId, { valueAsNumber: fieldName === 'phone' ? true : false})}
      className={clsx(css.input, {
        [css.inputError]: !!errorMessage,
        [css.inputValid]: !!!errorMessage && getValues(fieldId),
      })}
      id={`fieldId`}
      required
    />
    {errorMessage && (
      <span className={css.error}>
        {errorMessage}
      </span>
    )}
  </div>
  }

  MemberInput.propTypes = {
    errorMessage: PropTypes.string,
    fieldName: PropTypes.string,
    register: PropTypes.func,
    label: PropTypes.string,
    index: PropTypes.number,
    getValues: PropTypes.func,
    isAddress: PropTypes.bool,
  }

export default MemberInput