'use client'

import { Link, Box, useColorModeValue } from  '@chakra-ui/react'

export const Footer = () => {

  return (
    <footer>
      <Box
        px={6}
        py={8}
        backgroundColor={useColorModeValue('gray.100', 'gray.900')}
      >
        This site is currently on alpha version. Some features can be removed or changed in the future.<br />
        <br />
        'Baekjoon online judge' is a trademark of <Link href='https://startlink.io/'>Startlink</Link><br />
        'solved.ac' is a trademark of <Link href='https://shiftpsh.com/'>shiftpsh.com</Link>
      </Box>
    </footer>
  )
}