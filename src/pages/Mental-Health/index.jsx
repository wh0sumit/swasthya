import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Heading,
  Text,
  Divider,
  Container,
  HStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function MentalHealth() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Swasthya - Team</title>
      </Helmet>
      <Box>
        <Container maxW={'7xl'} my={20}>
          <Box marginY={{ base: '1', sm: '5' }} py={10}>
            <Heading as="h2" marginY={{ base: '1', sm: '5' }}>
              Why you need Swasthya as your ally in the tech world for mental
              health? 🤔
            </Heading>
            <Divider marginTop="5" />
            <Text as="p" marginTop="5" fontSize="xl">
              Swasthya is dedicated to supporting the mental health needs of
              individuals in the tech industry, and we understand the unique
              challenges and stressors that can come with working in this field.
              Our team of mental health professionals is here to listen and
              provide guidance and support to help you navigate the challenges
              of job loss and the job search process. We offer a range of
              resources and support services, including counseling, financial
              planning assistance, and job search support, to help you build
              resilience and move forward in a positive direction.
            </Text>{' '}
            <Text as="p" marginTop="5" fontSize="xl">
              In addition to these resources and services, Swasthya is also a
              supportive and understanding community of individuals who are all
              committed to improving their mental health and well-being. We
              believe in the power of connection and support, and are here to
              provide a safe and welcoming space where you can share your
              experiences, seek guidance, and find the help and support you need
              to thrive in your personal and professional life. So, if you are
              struggling with the impact of job loss on your mental health, we
              encourage you to reach out and connect with us. We are here to
              help you navigate this difficult time and build the healthy,
              fulfilling life you deserve.
            </Text>
          </Box>
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
              Learn More 📚
            </Button>
          </HStack>
        </Container>
      </Box>
    </React.Fragment>
  );
}
