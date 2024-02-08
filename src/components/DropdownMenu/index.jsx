import { Link } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { IconMenu } from '../../icons/IconMenu'
import { LogoGithub } from '../../icons/LogoGithub'
import { LogoLinkedin } from '../../icons/LogoLinkedin'
import { LogoProjects } from '../../icons/LogoProjects'
import { LogoHome } from '../../icons/LogoHome'

export function DropdownMenu() {
  const ROUTES = [
    { href: '/', label: 'Inicio' },
    { href: '/proyectos', label: 'Proyectos' },
  ]

  const SOCIALNETWORKS = [
    {
      href: 'https://www.linkedin.com/in/daniel-vasquez-nepomuceno/', label: 'LinkedIn'
    },
    {
      href: 'https://github.com/Daniel-Vasquez', label: 'GitHub'
    },
  ]

  const LOGOS = [
    {
      name: 'github',
      logoSvg: <LogoGithub className="w-8 h-8 text-purple-600" />,
    },
    {
      name: 'linkedin',
      logoSvg: <LogoLinkedin className="w-8 h-8 text-blue-400" />,
    },
    {
      name: 'proyectos',
      logoSvg: <LogoProjects className="w-8 h-8 text-orange-300" />,
    },
    {
      name: 'inicio',
      logoSvg: <LogoHome className="w-8 h-8 text-black" />,
    }
  ]

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="p-2 rounded-md hover:bg-blue-light dark:hover:bg-light">
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
          <Menu.Items className="absolute top-14 w-64 focus:outline-none">
            <div className="bg-blue flex flex-col gap-3 px-4 py-7 rounded-xl border-2 border-white dark:bg-light dark:border-black">
              {ROUTES.map(({ href, label }, index) => (
                <Menu.Item key={index}>
                  <Link
                    to={href}
                    className="bg-white flex gap-2 items-center text-black rounded-md px-3 py-2 font-bold hover:text-gray-500 dark:text-black dark:hover:text-gray-500"
                  >
                    {LOGOS.find(({ name, logoSvg }) => name.toLowerCase() === label.toLowerCase())?.logoSvg || label}
                    {label}
                  </Link>
                </Menu.Item>
              ))}
              {SOCIALNETWORKS.map(({ href, label }, index) => (
                <Menu.Item key={index}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white flex gap-2 items-center text-black px-3 py-2 rounded-md font-bold hover:text-gray-500 dark:text-black dark:hover:text-gray-500"
                  >
                    {LOGOS.find(({ name, logoSvg }) => name.toLowerCase() === label.toLowerCase())?.logoSvg || label}
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
