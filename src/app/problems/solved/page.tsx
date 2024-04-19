import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'
import { SolvedProblem } from '@/utils/types'
import { getProblems } from '@/utils/api';

export default async () => {
  const problems: SolvedProblem[] = await getProblems(true, 1, 'id', 'asc')

  return (
    <TableContainer>
      <Table>
        <Tbody>
          {
            problems.map((prob) =>
              <Tr>
                <Td>{prob.problemId}</Td>
                <Td>{prob.titleKo}</Td>
                <Td>{prob.tags!.map((tag) => tag.key).join(', ')}</Td>
              </Tr>
            )
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}
