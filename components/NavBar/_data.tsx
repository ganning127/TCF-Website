import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdWeb } from 'react-icons/md'

export interface Link {
  label: string
  href?: string
  children?: Array<{
    label: string
    description?: string
    href: string
    icon?: React.ReactElement
  }>
}

export const links: Link[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Resources',
    children: [
      {
        label: 'Tutoring',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '#',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Workshops',
        description: 'Discover and join your local Sketch community.',
        href: '#',
        icon: <IoCalendar />,
      },
    ],
  },
  {
    label: 'Oppurtunities',
    children: [
      {
        label: 'Join Our Team',
        description: 'Read our documentation and FAQs, or get in touch.',
        href: '/join',
        icon: <IoHelpBuoy />,
      },
      {
        label: 'Events',
        description: 'Discover and join your local Sketch community.',
        href: '/events',
        icon: <IoCalendar />,
      },
    ],
  },
]
