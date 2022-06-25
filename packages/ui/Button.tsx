import * as React from 'react'

export const Button = ({ children }: { children?: React.ReactNode }) => {
  return <button className="text-red-900 font-bold text-3xl">{children}</button>
}
