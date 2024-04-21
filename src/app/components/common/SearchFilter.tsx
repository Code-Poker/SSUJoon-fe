'use client'

import { HStack, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from'@chakra-ui/icons'
import { useRouter } from 'next/navigation'

// TODO: make it resuable
// TODO: add type

// TODO: rewrite the function below
const getSortCriteriaText = (key: string) => {
  if(key == 'id') return 'ID'
  else if(key == 'level') return '레벨'
  else if(key == 'title') return '제목'
  else if(key == 'solved') return '푼 사람 수'
  else if(key == 'average_try') return '평균 시도'
  else if(key == 'random') return '랜덤'
  else return '(알 수 없음)'
}

const getOrderByText = (key: string) => {
  if(key == 'asc') return '오름차순'
  else if(key == 'desc') return '내림차순'
  else return '(알 수 없음)'
}

export const SearchFilter = ({ url, page, solved, sortCriteria, orderBy }: { url: string, page: number, solved: boolean, sortCriteria: string, orderBy: string }) => {
  const router = useRouter()

  return (
    <HStack gap={4} pb={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{solved ? '푼 문제' : '안 푼 문제'}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=true&sortCriteria=${sortCriteria}&orderBy=${orderBy}`); }}>푼 문제</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=false&sortCriteria=${sortCriteria}&orderBy=${orderBy}`); }}>안 푼 문제</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{getSortCriteriaText(sortCriteria)}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=id&orderBy=${orderBy}`); }}>ID</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=level&orderBy=${orderBy}`); }}>레벨</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=title&orderBy=${orderBy}`); }}>제목</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=solved&orderBy=${orderBy}`); }}>푼 사람 수</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=average_try&orderBy=${orderBy}`); }}>평균 시도</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=random&orderBy=${orderBy}`); }}>랜덤</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{getOrderByText(orderBy)}</MenuButton>
        <MenuList>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=${sortCriteria}&orderBy=asc`); }}>오름차순</MenuItem>
          <MenuItem onClick={() => { router.push(`${url}?page=${page}&solved=${solved}&sortCriteria=${sortCriteria}&orderBy=desc`); }}>내림차순</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  )
}