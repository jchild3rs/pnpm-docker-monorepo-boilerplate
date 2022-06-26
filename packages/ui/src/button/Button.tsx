import React, { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Optional click handler
   */
  onClick?: () => void
  children: ReactNode
  type?: 'submit' | 'button'
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold rounded'
    : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded'

  const disabled = props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  let sizes = ''
  if (size === 'small') {
    sizes = 'py-1 px-2'
  } else if (size === 'large') {
    sizes = 'py-3 px-6'
  } else {
    sizes = 'py-2 px-4'
  }

  return (
    <button type={type} {...props} className={[sizes, mode, disabled].join(' ')}>
      {children}
    </button>
  )
}
