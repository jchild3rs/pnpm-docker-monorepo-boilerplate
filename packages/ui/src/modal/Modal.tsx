import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export type ModalProps = {
  isOpen?: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

/**
 *
 * @example
 * export function MyModal({ isOpen = false }: { isOpen?: boolean }) {
 *   let [open, setIsOpen] = useState(isOpen)
 *
 *   useEffect(
 *     function handleOpenPropChange() {
 *       setIsOpen(isOpen)
 *     },
 *     [isOpen]
 *   )
 *
 *   function closeModal() {
 *     setIsOpen(false)
 *   }
 *
 *   function openModal() {
 *     setIsOpen(true)
 *   }
 *
 *   return (
 *     <>
 *       <div className="fixed inset-0 flex items-center justify-center">
 *         <button
 *           type="button"
 *           onClick={openModal}
 *           className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
 *         >
 *           Open dialog
 *         </button>
 *       </div>
 *
 *       <Modal isOpen={open} onClose={closeModal} />
 *     </>
 *   )
 * }
 * @param param0
 * @returns
 */
export function Modal({ isOpen = false, onClose, title, children }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {title && (
                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                )}

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
