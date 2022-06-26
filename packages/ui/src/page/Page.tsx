import React, { ReactNode } from 'react'

import { Header } from '../'

type User = {
  name: string
  email?: string
  imageUrl?: string
}

const fakeUser: User = {
  name: 'Jane Doe',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

export const Page: React.FC<{ heading: string; children: ReactNode; user?: User }> = (props) => {
  const [user, setUser] = React.useState<User | undefined>(props.user)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        user={user}
        onLogin={() => setUser(fakeUser)}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser(fakeUser)}
      />

      {props.heading && (
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{props.heading}</h1>
          </div>
        </header>
      )}

      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{props.children}</main>
    </div>
  )
}
