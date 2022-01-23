import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdComputer } from 'react-icons/md'
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";

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
        description: 'Take both private lessons and group sessions all for free!',
        href: '#',
        icon: <FaChalkboardTeacher />,
      },
      {
        label: 'Workshops',
        description: 'Learn to code through group lessons!',
        href: '#',
        icon: <MdComputer />,
      },
    ],
  },
  {
    label: 'Opportunities',
    children: [
      {
        label: 'Join Our Team',
        description: 'Join a team of talented developers, designers, and project managers.',
        href: '/join',
        icon: <AiOutlineTeam />,
      },
      {
        label: 'Events',
        description: 'Discover and join virtual TCF events!',
        href: '/events',
        icon: <IoCalendar />,
      },
    ],
  },
]
