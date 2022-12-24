import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Button,
} from '@chakra-ui/react';

const Tags = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="gray" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} my={20}>
      <Box
        marginY={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        py={10}
      >
        <Box
          display="flex"
          flesWrap="wrap"
          flex="1"
          marginRight="10"
          my={{ base: '5', sm: '0' }}
          position="relative"
          alignItems="center"
        >
          <Box width={{ base: '100%' }} zIndex="2" margin={'10'}>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="xl"
                border={'4px solid'}
                borderColor={useColorModeValue('gray.800', 'gray.100')}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box
            zIndex="1"
            width="100%"
            position="absolute"
            height="100%"
            rounded={'xl'}
          >
            <Box
              bgGradient={useColorModeValue(
                'radial(green.600 1px, transparent 1px)',
                'radial(green.100 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          margin={{ base: '3', sm: '0' }}
        >
          <Tags tags={['Mental Health', 'Growth']} />
          <Heading marginTop="2">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Swasthya: Your mental health ally in the tech world !
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            A platform for developers, designers, and techies to check and
            reduce their mental health problems.
          </Text>
          <HStack spacing={2} marginTop="5">
            <Button
              bg={useColorModeValue('green.600', 'green.200')}
              color={useColorModeValue('white', 'gray.800')}
              _hover={{
                bg: useColorModeValue('green.700', 'green.300'),
              }}
              size="md"
              variant={'solid'}
            >
              Get Started 🌱
            </Button>

            <Button size="md" variant={'outline'} colorScheme="green">
              Share 🙌🏻
            </Button>
          </HStack>
        </Box>
      </Box>

      <Heading as="h2" marginTop="32">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
    </Container>
  );
};

export default ArticleList;
