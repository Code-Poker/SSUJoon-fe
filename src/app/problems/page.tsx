import { Table, Tbody, Tr, Td, TableContainer, Text } from '@chakra-ui/react'
import { SolvedProblem } from '@/utils/types'
import { getProblems } from '@/utils/api';

export default async () => {

  const problems: SolvedProblem[] = await getProblems(false, 1, 'id', 'asc')

  return (
    <>
      <Text>숭실대학교에서 아직 풀지 않은 문제</Text><br />
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
    </>
  )
}
