import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td, TableContainer,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Organization } from '@/utils/types'
import { getOrganization } from '@/utils/api';
import Link from 'next/link'

export default async () => {
  const orgInfo: Organization = await getOrganization()

  return (
    <main>
      <TableContainer>
        <Table>
          <Tbody>
            <Tr>
              <Td>ID</Td>
              <Td>{orgInfo.organizationId}</Td>
            </Tr>
            <Tr>
              <Td>이름</Td>
              <Td>{orgInfo.name}</Td>
            </Tr>
            <Tr>
              <Td>유형</Td>
              <Td>{orgInfo.type}</Td>
            </Tr>
            <Tr>
              <Td>백준 유저 수</Td>
              <Td>{orgInfo.bojUserCount}</Td>
            </Tr>
            <Tr>
              <Td>레이팅</Td>
              <Td>{orgInfo.rating}</Td>
            </Tr>
            <Tr>
              <Td>solved.ac 유저 수</Td>
              <Td>{orgInfo.userCount}</Td>
            </Tr>
            <Tr>
              <Td>투표 수</Td>
              <Td>{orgInfo.voteCount}</Td>
            </Tr>
            <Tr>
              <Td>푼 문제 수</Td>
              <Td>{orgInfo.solvedCount}</Td>
            </Tr>
            <Tr>
              <Td>색상</Td>
              <Td>{orgInfo.color}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <UnorderedList>
        <ListItem><Link href="/problems/solved">푼 문제</Link></ListItem>
        <ListItem><Link href="/problems/unsolved">안 푼 문제</Link></ListItem>
        <ListItem><Link href="/ranking/boj">백준 랭킹</Link></ListItem>
        <ListItem><Link href="/ranking/solved">solved.ac 문제해결 랭킹</Link></ListItem>
        <ListItem><Link href="/ranking/arena">solved.ac 아레나 랭킹</Link></ListItem>
      </UnorderedList>
    </main>
  );
}
