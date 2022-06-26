import React, { LabelHTMLAttributes } from 'react'

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label {...props} className="block text-sm font-medium text-gray-700" />
)
