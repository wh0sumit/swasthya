import React from 'react';

import {
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Button,
  Stack,
  Circle,
  Progress,
} from '@chakra-ui/react';
import TaskList from './TaskList';

export default function TaskData() {
  const Tags = props => {
    const tagsBg = useColorModeValue('green.400', 'green.800');
    return (
      <HStack spacing={2} marginTop={props.marginTop}>
        {props.tags.map(tag => {
          return (
            <Tag size={'md'} variant="solid" bg={tagsBg} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </HStack>
    );
  };
  return (
    <React.Fragment>
      <Stack
        marginTop="10"
        display={'flex'}
        flexDirection={{ base: 'column', sm: 'row' }}
        gap={10}
      >
        <Box
          display="flex"
          flex="2"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
          p={10}
          rounded="3xl"
          bg={useColorModeValue('gray.50', 'gray.900')}
          shadow="sm"
          maxHeight={{ base: '100%', sm: '100%' }}
        >
          <Box
            display="flex"
            flex="2"
            flexDirection="column"
            justifyContent="center"
            margin={{ base: '3', sm: '0' }}
          >
            <Tags tags={TaskList[0].tags} marginTop="0" />
            <Heading as="h5" size="md" mt="2">
              {TaskList[0].title}
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="md"
            >
              {TaskList[0].description}
            </Text>{' '}
            <Progress
              value={TaskList[0].progress}
              marginTop="5"
              hasStripe
              colorScheme="green"
              rounded={'full'}
            />
            <Button
              size="sm"
              marginTop="5"
              variant={'outline'}
              colorScheme="green"
              alignSelf={{ base: 'center', sm: 'flex-start' }}
            >
              Done ✔️
            </Button>
          </Box>
          {/* <Box flex="1" display="flex" justifyContent="center">
              <Image
                w={{ base: '100%', sm: '100%' }}
                src={
                  'https://o.remove.bg/downloads/0e7425c0-317f-4e5b-a10b-2795ec8450c1/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851-removebg-preview.png'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box> */}
        </Box>
        <Box
          flex="1 "
          bg={useColorModeValue('gray.50', 'gray.900')}
          p={10}
          rounded="3xl"
          display={'flex'}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          margin={{ base: '3', sm: '0' }}
        >
          <Circle
            size="120px"
            bg={useColorModeValue('gray.900', 'green.400')}
            fontSize={'3xl'}
            alignSelf="center"
          >
            <Circle
              size="100px"
              bg="gray.800"
              fontSize={'5xl'}
              alignSelf="center"
              filter={'grayscale(100%)'}
            >
              🔥
            </Circle>
          </Circle>
          <Text mt="5" fontWeight="bold" textAlign={'center'}>
            Complete 3 Quests to unlock Streak
          </Text>
        </Box>
      </Stack>
    </React.Fragment>
  );
}
