import * as React from 'react'
import { IoCalendar, IoGrid, IoHelpBuoy } from 'react-icons/io5'
import { MdComputer } from 'react-icons/md'
import { FaChalkboardTeacher } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { BiCodeCurly } from "react-icons/bi";

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
    label: 'Mentor',
    children: [
      {
        label: 'Mentor Requirements',
        description: 'Become a mentor and help students learn to code!',
        href: '/mentor',
        icon: <GiTeacher />,
      },
      {
        label: 'Mentor Application',
        description: 'Apply to become a mentor today!',
        href: '/mentor/apply',
        icon: <BiCodeCurly />,
      },
    ]
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
