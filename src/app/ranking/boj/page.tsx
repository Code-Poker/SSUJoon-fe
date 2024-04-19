import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'
import { getBojRanking } from '@/utils/api';

export default async () => {
  const handles: string[] = await getBojRanking(1)

  return (
    <TableContainer>
    <Table>
      <Tbody>
        {
          handles.map((handle, index) =>
            <Tr>
              <Td>{index+1}</Td>
              <Td>{handle}</Td>
            </Tr>
          )
        }
      </Tbody>
    </Table>
  </TableContainer>
  )
}
