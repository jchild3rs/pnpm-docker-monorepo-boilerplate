import React from 'react'
// import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

  return (
    <button
      type="button"
      className={[
        'ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md',
        `storybook-button--${size}`,
        mode
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <div className="scale-125 opacity-50 hover:scale-150 hover:opacity-75">test</div>
      {label}
    </button>
  )
}
