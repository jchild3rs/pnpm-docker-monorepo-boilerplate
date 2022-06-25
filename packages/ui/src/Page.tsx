import React, { ReactNode } from 'react'

import { Header } from './'

type User = {
  name: string
}

export const Page: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User>()

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>{children}</section>
    </article>
  )
}
