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
  SimpleGrid,
} from '@chakra-ui/react';

import GoalsData from '../data/GoalsData';

import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet';
import GoalsCard from '../components/Cards/GoalsCard';
import { NavLink } from 'react-router-dom';

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

const supportedBy = [
  {
    name: 'HEKORS Community',
    link: 'https://hekors.vercel.app/',
    logo: 'https://hekors.vercel.app/hekors-logo.svg',
  },
];

export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swasthya - Home</title>
        <link rel="canonical" href="https://swasthya.vercel.app/" />
      </Helmet>
      <Container maxW={'7xl'} my={20}>
        <Box
          marginY={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          flexWrap="wrap"
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
            <Box
              width={{ base: '100%' }}
              zIndex="2"
              margin={{
                base: '0',

                md: '10',
                lg: '30',
              }}
            >
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="3xl"
                  border={'4px solid'}
                  borderColor={useColorModeValue('green.400', 'gray.100')}
                  src={
                    'https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  }
                  alt="some good alt text"
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
              <NavLink to="/login">
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
              </NavLink>
              <Button size="md" variant={'outline'} colorScheme="green">
                Share 🙌🏻
              </Button>
            </HStack>
          </Box>
        </Box>

        {/* Supported By  */}
        <Box>
          <Heading
            as="h2"
            marginTop={{
              base: '5',
              sm: '10',
            }}
          >
            Supported By 🙌🏻
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            We are supported by some amazing people and organizations, We are
            thankful to them for their support.
          </Text>
          <Divider marginTop="5" />

          <Box
            marginY={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            gap={10}
            py={10}
            alignItems="center"
            textColor={useColorModeValue('gray.700', 'gray.400')}
          >
            communities & organizations :
            {supportedBy.map((item, index) => {
              return (
                <Image
                  src={item.logo}
                  alt="some good alt text"
                  h={{ base: '55px' }}
                  objectFit="contain"
                  key={index}
                />
              );
            })}
          </Box>
        </Box>
        <Box>
          <Heading
            as="h2"
            marginTop={{
              base: '5',
              sm: '10',
            }}
          >
            Goals & Milestones 🎯
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            We are working on some amazing goals, We are thankful to them for
            their support.
          </Text>
          <Divider marginTop="5" />
          <Container maxW={'6xl'} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={7}>
              {GoalsData.map((item, index) => {
                return (
                  <GoalsCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    emoji={item.emoji}
                  />
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>

        <Box
          mt={{
            base: '20',
          }}
        >
          <Heading
            as="h2"
            marginTop={{
              base: '5',
              sm: '10',
            }}
          >
            Testimonials 🌟
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
          >
            See what people are saying about us. We are thankful to them for
            their support.
          </Text>
          <Divider marginTop="5" />
          <Testimonials />
        </Box>
      </Container>
    </React.Fragment>
  );
}
