/* This example requires Tailwind CSS v2.0+ */
import { ReactNode, Suspense } from 'react'

export default function Layout({
  children,
  pageTitle
}: {
  pageTitle: string
  children: ReactNode
}) {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{pageTitle}</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  )
}
