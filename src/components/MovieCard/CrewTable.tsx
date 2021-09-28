import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

type CrewProps = {
  crew: [
    {
      name: string
      job: string
    }
  ]
}

export const CrewTable = ({ crew }: CrewProps) => {
  return (
    <Box py={4}>
      {crew && (
        <Table size='sm' overflow='scroll'>
          <Thead>
            <Tr>
              <Th>Job</Th>
              <Th>Crew Member</Th>
            </Tr>
          </Thead>
          <Tbody>
            {crew.map((member: any, idx: any) => {
              member.name
              return (
                <Tr key={idx}>
                  <Td>{member.job}</Td>
                  <Td>{member.name}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </Box>
  )
}
