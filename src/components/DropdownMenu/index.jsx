import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IconMenu } from '../../icons/IconMenu'

export function DropdownMenu() {
  const ROUTES = [
    { href: '/', label: 'Inicio' },
    { href: '/proyectos', label: 'Proyectos' },
  ]

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="p-2 hover:bg-blue">
          <IconMenu className="text-white w-8 h-8 dark:text-black" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 focus:outline-none">
            <div className="bg-black flex flex-col gap-3 px-4 py-7 rounded-md border border-border">
              {ROUTES.map(({ href, label }, index) => (
                <Menu.Item key={index}>
                  <a
                    href={href}
                    className="bg-blue-medium text-white rounded-md px-3 py-2 font-bold hover:bg-golden hover:text-gray-700"
                  >
                    {label}
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}