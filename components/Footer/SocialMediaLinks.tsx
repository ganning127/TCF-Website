import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaTiktok, FaLinkedin, FaInstagram} from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.linkedin.com/in/the-coding-foundation-5832a8204/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://vm.tiktok.com/ZMLdGVB6V/" aria-label="Tiktok" icon={<FaTiktok fontSize="20px" />} />
    <IconButton as="a" href="https://www.instagram.com/thecodingfoundation_/" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
  </ButtonGroup>
)
