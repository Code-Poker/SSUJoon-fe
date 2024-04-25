'use client'

import { Container, Box, Flex, Collapse, Stack, Text, IconButton, useColorMode, useColorModeValue, Link, useDisclosure, useBreakpointValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// TODO: Create a type for navbar items
// TODO: Support sub-menu

const NAVBAR_ITEMS = [
  {
    text: '문제',
    href: '/problems',
  },
  {
    text: '랭킹',
    href: '/ranking',
  }
]

export const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  const pathname = usePathname()

  return (
    <Box
      w='100%'
      px={26}
      py={2}
      borderBottom='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Container maxW='container.xl'>
        <Flex
          margin='auto'
          minH='60px'
          align='center'
        >
          <Flex
            flex={{ base: 1, md: 'auto'}}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none '}}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant='ghost'
              aria-label='Toggle menu'
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}
          >
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={700}
              my='auto'
              cursor='pointer'
            >
              <Link
                href='/'
                _hover={{
                  textDecoration: 'none',
                }}>SSUJoon</Link>
            </Text>

            <Flex
              display={{ base: 'none', md: 'flex' }}
              ml={10}
            >
              <NavbarDesktopItems pathname={pathname} />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify='flex-end'
            direction='row'
            spacing={6}
          >
            <IconButton
              fontSize='md'
              aria-label='Toggle color mode'
              icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
              variant='link'
              onClick={toggleColorMode}
            />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <NavbarMobileItems pathname={pathname} />
        </Collapse>
      </Container>
    </Box>
  )
}

const NavbarDesktopItems = ({ pathname }: { pathname: string }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.400')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack
      direction='row'
      spacing={2}
    >
      {NAVBAR_ITEMS.map((navbarItem) => (
        <Box
          key={navbarItem.text}
        >
          <Box
            p={2}
            fontSize='md'
            color={pathname === navbarItem.href ? linkHoverColor : linkColor}
          >
            <Link
              href={navbarItem.href ?? '#'}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
            >
              {navbarItem.text}
            </Link>
          </Box>
        </Box>
      ))}
    </Stack>
  )
}

const NavbarMobileItems = ({ pathname }: { pathname: string }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.400')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none '}}
    >
      {NAVBAR_ITEMS.map((navbarItem) => (
        <Box
          py={2}
          justifyContent='space-between'
          alignItems='center'
          color={pathname === navbarItem.href ? linkHoverColor : linkColor}
        >
          <Link
            href={navbarItem.href ?? '#'}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navbarItem.text}
          </Link>
        </Box>
      ))}
    </Stack>
  )
}