import React from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
export default function GoalsCard({ title, desc, emoji }) {
  return (
    <React.Fragment>
      <HStack align={'top'} p={2} className="goals-card">
        <Box
          color={'green.400'}
          px={2}
          fontSize={'3xl'}
          className="goals-emoji"
        >
          {emoji}
        </Box>
        <VStack align={'start'}>
          <Text fontWeight={600}>{title}</Text>
          <Text color={'gray.400'}>{desc}</Text>
        </VStack>
      </HStack>
    </React.Fragment>
  );
}
