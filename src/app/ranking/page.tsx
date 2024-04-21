import { Table, Thead, Tbody, Tr, Td, TableContainer, Text, Link, Heading } from '@chakra-ui/react'
import { SolvedUser } from '@/utils/types'
import { getSolvedRanking } from '@/utils/api';
import Image from 'next/image'
import './tier.css'
import { tierToAltText, tierToColor, tierToClassName } from '@/utils/tier';
import { Pagination } from '@/app/components/common/Pagination';

export default async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const currentPage = searchParams['page'] ? Number(searchParams['page']) : 1
  const users: SolvedUser[] = await getSolvedRanking(currentPage)

  return (
    <>
      <Heading pb={8}>랭킹</Heading>
      <TableContainer pb={8}>
        <Table>
          <Thead>
            <Tr fontWeight={700}>
              <Td>#</Td>
              <Td>핸들</Td>
              <Td display={{ base: 'none', md: 'table-cell' }}>소개</Td>
              <Td>AC 레이팅</Td>
              <Td>푼 문제</Td>
              <Td display={{ base: 'table-cell', md: 'none' }}>소개</Td>
            </Tr>
          </Thead>
          <Tbody>
            {
              users.map((user, index) =>
                <Tr>
                  <Td>{index+1}</Td>
                  <Td>
                    <Link href={`https://solved.ac/profile/${user.handle}`} _hover={{ textDecoration: 'none' }}>
                      <Image
                        src={`/tier/${user.tier}.svg`}
                        width={16}
                        height={16}
                        alt={tierToAltText(user.tier)}
                        style={{
                          display: 'inline',
                          width: '1.2em',
                          height: '1.2em',
                          verticalAlign: 'middle',
                        }} />
                      &nbsp;
                      <Text _hover={{ textDecoration: 'underline' }} style={{ display: 'inline' }} fontWeight={700} >{user.handle}</Text>
                    </Link>
                  </Td>
                  <Td display={{ base: 'none', md: 'table-cell' }}>{user.bio}</Td>
                  <Td><Text className={tierToClassName(user.tier)} color={tierToColor(user.tier)} fontWeight={800}>{user.rating}</Text></Td>
                  <Td>{user.solvedCount.toLocaleString()}</Td>
                  <Td display={{ base: 'table-cell', md: 'none' }}>{user.bio}</Td>
                </Tr>
              )
            }
          </Tbody>
        </Table>
      </TableContainer>
      
      <Pagination url='/ranking' currentPage={currentPage} maxPage={100} />
    </>
  )
}
