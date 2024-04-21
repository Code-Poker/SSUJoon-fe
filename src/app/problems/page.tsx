import { Table, Thead, Tbody, Tr, Td, TableContainer, Text, Link, Image, Heading } from '@chakra-ui/react'
import { SolvedProblem } from '@/utils/types'
import { getProblems } from '@/utils/api';
import { tierToAltText } from '@/utils/tier';
import { Pagination } from '../components/common/Pagination';

export default async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const currentPage = searchParams['page'] ? Number(searchParams['page']) : 1
  const problems: SolvedProblem[] = await getProblems(false, currentPage, 'id', 'asc')

  return (
    <>
      <Heading pb={8}>문제</Heading>
      <TableContainer pb={8}>
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

      <Pagination url='/problems' currentPage={currentPage} maxPage={100} />
    </>
  )
}
