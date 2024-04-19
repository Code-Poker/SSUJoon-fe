import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'
import { SolvedUser } from '@/utils/types'
import { getSolvedRanking } from '@/utils/api';

export default async () => {
  const users: SolvedUser[] = await getSolvedRanking(1)

  return (
    <TableContainer>
    <Table>
      <Tbody>
        {
          users.map((user, index) =>
            <Tr>
              <Td>{index+1}</Td>
              <Td>{user.handle}</Td>
              <Td>{user.bio}</Td>
              <Td>{user.rating}</Td>
            </Tr>
          )
        }
      </Tbody>
    </Table>
  </TableContainer>
  )
}
