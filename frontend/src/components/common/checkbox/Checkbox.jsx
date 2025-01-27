// @ts-nocheck
import React from 'react'

const Checkbox = ({
  label,
  field: { value, onChange, onBlur },
  form: { errors, touched },
  id,
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-slate-600 text-[12px] flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          className="mr-2"
        />
        {label}
      </label>
      {errors && touched && (
        <p className="text-red-500 text-[12px] mt-1">{errors}</p>
      )}
    </div>
  )
}

export default Checkbox
