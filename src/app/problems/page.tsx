import { Table, Thead, Tbody, Tr, Td, TableContainer, Text, Link, Image } from '@chakra-ui/react'
import { SolvedProblem } from '@/utils/types'
import { getProblems } from '@/utils/api';
import { tierToAltText } from '@/utils/tier';

export default async () => {

  const problems: SolvedProblem[] = await getProblems(false, 1, 'id', 'asc')

  return (
    <>
      <Text>숭실대학교에서 아직 풀지 않은 문제</Text><br />
      <TableContainer>
        <Table>
          <Thead>
            <Tr fontWeight={700}>
              <Td>#</Td>
              <Td>제목</Td>
              <Td>태그</Td>
            </Tr>
          </Thead>
          <Tbody>
            {
              problems.map((prob) =>
                <Tr>
                  <Td>
                    <Link href={`https://www.acmicpc.net/problem/${prob.problemId}`} _hover={{ textDecoration: 'none' }}>
                      <Image
                        src={`/tier/${prob.level}.svg`}
                        width={16}
                        height={16}
                        alt={tierToAltText(prob.level!)}
                        style={{
                          display: 'inline',
                          width: '1.2em',
                          height: '1.2em',
                          verticalAlign: 'middle',
                        }} />
                      &nbsp;
                      <Text _hover={{ textDecoration: 'underline' }} style={{ display: 'inline' }}>{prob.problemId}</Text>
                    </Link>
                  </Td>
                  <Td><Link href={`https://www.acmicpc.net/problem/${prob.problemId}`}>{prob.titleKo}</Link></Td>
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
