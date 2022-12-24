import React from 'react';

import { Box, useColorModeValue, Stack, Heading } from '@chakra-ui/react';

export default function Social() {
  // const Tags = props => {
  //   const tagsBg = useColorModeValue('green.400', 'green.800');
  //   return (
  //     <HStack spacing={2} marginTop={props.marginTop}>
  //       {props.tags.map(tag => {
  //         return (
  //           <Tag size={'md'} variant="solid" bg={tagsBg} key={tag}>
  //             {tag}
  //           </Tag>
  //         );
  //       })}
  //     </HStack>
  //   );
  // };
  return (
    <React.Fragment>
      <Stack
        marginTop="10"
        display={'flex'}
        flexDirection={{ base: 'column', sm: 'row' }}
        gap={10}
      >
        <Box
          marginY={{ base: '1', sm: '5' }}
          display="flex"
          flex="2"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
          p={10}
          rounded="3xl"
          bg={useColorModeValue('gray.50', 'gray.900')}
          shadow="sm"
        >
          <Box
            flex="1 "
            bg={useColorModeValue('gray.50', 'gray.900')}
            p={10}
            rounded="3xl"
            display={'flex'}
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h5" size="md" mt="2">
              Leaderboard coming soon!
            </Heading>
          </Box>
          <Box
            flex="1 "
            bg={useColorModeValue('gray.50', 'gray.900')}
            p={10}
            rounded="3xl"
            display={'flex'}
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
      </Stack>
    </React.Fragment>
  );
}
