import React from 'react'

export default function PostListSkeleton({ count = 10 }) {
  return (
    <ul className="mb-4 divide-y overflow-hidden rounded-lg shadow">
      {new Array(count).fill(null)?.map((_post, i) => (
        <li key={i} className="animate-pulse">
          <span className="flex items-center bg-white p-4 leading-none text-indigo-600">
            <div className="h-4 w-full rounded-sm bg-slate-400"></div>
          </span>
        </li>
      ))}
    </ul>
  )
}
