import React from 'react'

export const Alert = ({ badge, label }: { badge?: string; label: string }) => (
  <div
    className="flex items-center bg-indigo-700 p-2 leading-none text-indigo-100 lg:inline-flex lg:rounded-full"
    role="alert"
  >
    {badge && (
      <span className="flex rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold uppercase">
        {badge}
      </span>
    )}

    <span className="ml-3 mr-2 flex-auto text-left font-semibold">{label}</span>
    <svg
      className="h-4 w-4 fill-current opacity-75"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
    </svg>
  </div>
)
