'use client'

import { Flex, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'

export const Statistics = ({ text, value, unit, diff }: { text: string, value: number, unit?: string, diff?: number }) => {
  return (
    <Flex
      borderWidth='1px'
      borderRadius='lg'
      padding={3}
      flex={1}
    >
      <StatGroup>
        <Stat>
          <StatLabel>{ text }</StatLabel>
          <StatNumber>{ value.toLocaleString() }{ unit ?? '' }</StatNumber>
          { diff &&
            <StatHelpText mb={0}>
              { diff !== 0 && 
                <StatArrow type={ (diff > 0) ? 'increase' : 'decrease' } />
              }
              { diff.toLocaleString() }
            </StatHelpText>
          }

        </Stat>
      </StatGroup>
    </Flex>
  )
}