import { Table, Thead, Tbody, Tr, Td, TableContainer, Text, Link, Image, Heading, HStack, Tag, TagLabel } from '@chakra-ui/react'
import { SolvedProblem } from '@/utils/types'
import { getProblems } from '@/utils/api';
import { tierToAltText } from '@/utils/tier';
import { Pagination } from '@/app/components/common/Pagination';
import { SearchFilter } from '@/app/components/common/SearchFilter';

// TODO: error handling on unexpected params

export default async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const currentPage = searchParams['page'] ? Number(searchParams['page']) : 1
  const solved = searchParams['solved'] === 'true' ? true : false
  const sortCriteria = searchParams['sortCriteria'] ? String(searchParams['sortCriteria']) : 'random'
  const orderBy = searchParams['orderBy'] ? String(searchParams['orderBy']) : 'asc'

  const problems = await getProblems(solved, currentPage, sortCriteria, orderBy)
  const problemCount = problems.count
  const problemItems = problems.items as SolvedProblem[]

  return (
    <>
      <Heading pb={8}>문제</Heading>
      <SearchFilter url='/problems' page={currentPage} solved={solved} sortCriteria={sortCriteria} orderBy={orderBy} />
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
              problemItems.map((prob) =>
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
                  <Td>
                    {prob.tags!.map((tag) =>
                      <HStack spacing={4} style={{ display: 'inline' }} overflowWrap='break-word'>
                        <Tag size='md' key='md' variant='subtle' ml={1} mr={1}>
                          <TagLabel>{tag.key}</TagLabel>
                        </Tag>
                      </HStack>
                    )}
                  </Td>
                </Tr>
              )
            }
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination url='/problems' currentPage={currentPage} maxPage={Math.floor(problemCount / 50) + (problemCount % 50 ? 1 : 0)} solved={solved} sortCriteria={sortCriteria} orderBy={orderBy} />
    </>
  )
}
