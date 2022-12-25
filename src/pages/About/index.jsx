import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  useColorModeValue,
  Container,
  Button,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Swasthya - About</title>
      </Helmet>
      <Box>
        <Container maxW={'7xl'} my={20}>
          <Box
            marginY={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            pt={10}
          >
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              margin={{ base: '3', sm: '0' }}
            >
              <Heading as="h2">About Us 🌟</Heading>
              <Text as="p" marginTop="2" color={useColorModeValue('gray.700')}>
                Learn more about Swasthya and our mission to help you thrive ✌
              </Text>

              <Divider marginY="2" />
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="xl"
              >
                Swasthya is an ally for those in the tech industry who may be
                struggling with the impact of job layoffs on their mental
                health. We offer a range of resources and support services to
                help individuals cope with the challenges of job loss and
                navigate the job search process. Our team of mental health
                professionals is here to listen and provide guidance and support
                to help you build resilience and move forward in a positive
                direction.
              </Text>
            </Box>
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
                    borderRadius="3xl"
                    border={'4px solid'}
                    borderColor={useColorModeValue('green.400', 'gray.100')}
                    src={
                      'https://images.unsplash.com/photo-1459433312032-29eb4bea7d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGdyZWVuJTIwbWVudGFsJTIwaGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    }
                    alt="some good alt text"
                    objectFit="contain"
                    minW="100%"
                    minH="80%"
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
          </Box>
        </Container>
        <Container maxW={'6xl'}>
          <Heading as="h5" size="lg" my="4">
            Our Mission 🌱
          </Heading>
          <Divider />
          <Text fontSize="xl" my="4">
            Job layoffs can be a difficult and stressful experience for anyone,
            and the impact on mental health can be significant. Losing a job can
            lead to feelings of uncertainty, anxiety, and depression, and can
            even contribute to the development of more severe mental health
            conditions such as post-traumatic stress disorder (PTSD).
          </Text>
          <Text fontSize="xl" my="4">
            It is important for individuals who have experienced a job layoff to
            take care of their mental health by seeking support from friends and
            family, engaging in self-care activities, and seeking professional
            help if needed.
          </Text>
          <HStack spacing={2} marginBottom="16">
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
        </Container>
      </Box>
    </React.Fragment>
  );
}
