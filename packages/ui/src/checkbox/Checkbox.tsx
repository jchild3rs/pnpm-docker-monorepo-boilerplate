import React, { ComponentProps } from 'react'
import { Input } from '../'

export const Checkbox = (props: ComponentProps<typeof Input>) => (
  <input
    type="checkbox"
    {...props}
    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
  />
)
