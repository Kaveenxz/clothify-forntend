'use client'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  WalletIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  NewspaperIcon,
  HomeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import {
    
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navigation = [
  { name: 'Dashboard', href: 'admin-panel', icon: HomeIcon },
  { name: 'Add Products', href: 'admin-add-product', icon: BuildingStorefrontIcon },
  { name: 'Customers', href: '/vendor-orders', icon: NewspaperIcon },
  { name: 'Products', href: '/vendor-returns', icon: WalletIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState(pathname)

  useEffect(() => {
    setActiveItem(pathname)
  }, [pathname])

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>
            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                    <p className="text-2xl font-bold text-black ml-[15%]">ClothiFy</p>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-5">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    activeItem === item.href
                                      ? 'bg-[#1837DB] text-white'
                                      : 'text-black hover:text-white hover:bg-[#1837DB]',
                                    'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                                  )}
                                  onClick={() => setActiveItem(item.href)}
                                >
                                  <item.icon
                                    className={classNames(
                                      activeItem === item.href ? 'text-white' : 'text-[#1837DB] group-hover:text-white',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                      
                          <Link
                            href="/vendor-settings"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-black hover:bg-[#1837DB] hover:text-white"
                            onClick={() => setActiveItem('/vendor-settings')}
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-[#1837DB] group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 rounded-r-xl">
            <div className="flex h-16 shrink-0 items-center">
                    <p className="text-2xl font-bold text-black ml-[15%]">ClothiFy</p>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-7">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            activeItem === item.href
                              ? 'bg-[#1837DB] text-white'
                              : 'text-black hover:text-white hover:bg-[#1837DB]',
                            'group flex gap-x-6 rounded-md p-3 text-sm leading-6 font-semibold'
                          )}
                          onClick={() => setActiveItem(item.href)}
                        >
                          <item.icon
                            className={classNames(
                              activeItem === item.href ? 'text-white' : 'text-[#1837DB] group-hover:text-white',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-sm font-semibold leading-6 text-gray-500">Help</div>
                  <ul role="list" className="-mx-2 mt-1 space-y-3">
                    <li>
                     
                    </li>
                    <li>
                      <Link
                        href="/vendor-settings"
                        className={classNames(
                          activeItem === '/vendor-settings'
                            ? 'bg-[#1837DB] text-white'
                            : 'text-black hover:text-white hover:bg-[#1837DB]',
                          'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                        )}
                        onClick={() => setActiveItem('/vendor-settings')}
                      >
                        <Cog6ToothIcon
                          className={classNames(
                            activeItem === '/vendor-settings' ? 'text-white' : 'text-[#1837DB] group-hover:text-white',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        Settings
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="lg:pl-56">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  border-gray-200 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
