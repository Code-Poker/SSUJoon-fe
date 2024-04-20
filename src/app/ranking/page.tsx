import { Table, Thead, Tbody, Tr, Td, TableContainer, Text, Link } from '@chakra-ui/react'
import { SolvedUser } from '@/utils/types'
import { getSolvedRanking } from '@/utils/api';
import Image from 'next/image'
import './tier.css'
import { tierToAltText, tierToColor, tierToClassName } from '@/utils/tier';

export default async () => {
  const users: SolvedUser[] = await getSolvedRanking(1)

  return (
    <>
      <Text>숭실대학교의 solved.ac 문제해결 랭킹</Text><br />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Td>#</Td>
              <Td>핸들</Td>
              <Td>소개</Td>
              <Td>AC 레이팅</Td>
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
                  <Td>{user.bio}</Td>
                  <Td><Text className={tierToClassName(user.tier)} color={tierToColor(user.tier)} fontWeight={800}>{user.rating}</Text></Td>
                </Tr>
              )
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
