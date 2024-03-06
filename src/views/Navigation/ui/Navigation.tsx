import { Button } from 'components/ui'
import {
  BadgeDollarSign,
  CalendarClock,
  Library,
  LucideIcon,
  ShoppingCart
} from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface LinkHelperType {
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
  const { pathname } = useLocation()
  return (
    <div className=" text-md flex flex-col">
      {navLinks &&
        navLinks.map((link) => (
          <Button
            asChild
            key={link.name}
            variant={pathname === link.path ? 'default' : 'ghost'}
            className="text-left justify-start hover:bg-primary/90 hover:text-secondary rounded-none"
          >
            <Link to={link.path}>
              {<link.Icon className="w-4 h-4 mr-2" />}
              {link.name}
            </Link>
          </Button>
        ))}
    </div>
  )
}
