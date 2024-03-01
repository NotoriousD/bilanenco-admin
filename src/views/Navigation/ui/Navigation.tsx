import { cn } from 'lib/utils/utils'
import {
  BadgeDollarSign,
  CalendarClock,
  Library,
  LucideIcon,
  ShoppingCart
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

type LinkHelperType = {
  name: string
  path: string
  Icon: LucideIcon
  linkStyles?: string
}

const navLinks: LinkHelperType[] = [
  {
    name: 'Orders',
    path: '/',
    Icon: ShoppingCart
  },
  {
    name: 'Events',
    path: '/events',
    Icon: CalendarClock
  },
  {
    name: 'Courses',
    path: '/courses',
    Icon: Library
  },
  {
    name: 'Presales',
    path: '/presales',
    Icon: BadgeDollarSign
  }
]

export const Navigation = () => {
  return (
    <div className="text-secondary p-2 text-md flex flex-col">
      {navLinks &&
        navLinks.map((link) => (
          <LinkHelper
            path={link.path}
            name={link.name}
            Icon={link.Icon}
            key={link.name}
          />
        ))}
    </div>
  )
}

export const LinkHelper: React.FC<LinkHelperType> = ({
  name,
  Icon,
  linkStyles,
  path
}) => {
  return (
    <Link
      to={path}
      className={cn(
        'flex justify-start items-center p-2 rounded-lg transition ease duration-300 hover:bg-secondary hover:text-primary',
        `${linkStyles}`
      )}
    >
      <Icon className="w-4 h-4 mr-2" />
      {name}
    </Link>
  )
}
