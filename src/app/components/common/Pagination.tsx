'use client'

import { Button, Center } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useColorModeValue } from '@chakra-ui/react'

export const Pagination = ({ url, currentPage, maxPage, solved, sortCriteria, orderBy }: { url: string, currentPage: number, maxPage: number, solved: boolean, sortCriteria: string, orderBy: string }) => {
  const router = useRouter()
  const pages = new Set<number>()
  const buttonColor = useColorModeValue('gray.100', 'gray.700')
  const selectedButtonColor = useColorModeValue('gray.300', 'gray.500')

  const loCnt = currentPage - Math.max(2, currentPage-2)
  const hiCnt = Math.min(maxPage, currentPage+2) - currentPage

  pages.add(1)
  for(let i=Math.max(1, currentPage - (4 - hiCnt)); i<=Math.min(maxPage, currentPage + (4 - loCnt)); i++) pages.add(i)
  pages.add(maxPage)

  return (
    <>
      <Center pt={8}>
        {Array.from(pages).map((page) => (
          <Button backgroundColor={page === currentPage ? selectedButtonColor : buttonColor} ml={1} mr={1} onClick={() => router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=${sortCriteria}&orderBy=${orderBy}`)}>{page}</Button>
        ))}
      </Center>
    </>
  )
}