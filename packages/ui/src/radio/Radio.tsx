import React, { ComponentProps } from 'react'
import { Input } from '../input/Input'

export const Radio = (props: ComponentProps<typeof Input>) => (
  <input
    type="radio"
    {...props}
    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
  />
)
