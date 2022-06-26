import { ReactNode } from 'react'
import { Page as BasePage } from 'ui'

export default function Page({ children, pageTitle }: { pageTitle: string; children: ReactNode }) {
  return (
    <BasePage className="min-h-screen bg-gray-100" heading={pageTitle}>
      <div className="mx-auto max-w-7xl ">{children}</div>
    </BasePage>
  )
}
