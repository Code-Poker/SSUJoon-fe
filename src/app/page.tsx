import { Flex, Heading } from '@chakra-ui/react'
import { Statistics } from '@/app/components/common/Statistics';
import { getOrganization } from '@/utils/api';

export default async () => {
  const org = await getOrganization()

  return (
    <main>
      <Heading size='lg'>숭실대학교의 문제해결 통계</Heading>

      <Flex flexWrap='wrap' direction={{ base: 'column', md: 'row' }} gap={4} mt={6}>
        <Statistics text="구성원 수 (BOJ)" value={org.bojUserCount} unit='명' diff={1234} />
        <Statistics text="구성원 수 (solved.ac)" value={org.userCount} unit='명' />
        <Statistics text="푼 문제" value={org.solvedCount} unit='문제' />
        <Statistics text="기여한 문제" value={org.voteCount} unit='문제' />
        <Statistics text="AC Rating" value={org.rating} />
      </Flex>
    </main>
  );
}
