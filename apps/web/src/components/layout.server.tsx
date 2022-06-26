/* This example requires Tailwind CSS v2.0+ */
import { ReactNode, Suspense } from 'react'
import { Page } from 'ui'

export default function Layout({
  children,
  pageTitle
}: {
  pageTitle: string
  children: ReactNode
}) {
  return (
    <Page heading={pageTitle}>
      <div className="mx-auto max-w-7xl py-6">{children}</div>
    </Page>
  )
}
