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
  VStack,
} from '@chakra-ui/react';

import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

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
  {
    name: 'HEKORS Community',
    link: 'https://hekors.vercel.app/',
    logo: 'https://hekors.vercel.app/hekors-logo.svg',
  },
];

const goals = [
  {
    id: 1,
    emoji: '🏃‍♂️',
    title: 'Exercise regularly',
    text: 'Exercise has been shown to improve mood, reduce stress and anxiety, and improve overall mental well-being.',
  },
  {
    id: 2,
    emoji: '🥦',
    title: 'Eat a healthy diet',
    text: ' A balanced diet that includes a variety of fruits, vegetables, whole grains, and lean proteins can help improve mental health.',
  },
  {
    id: 3,
    emoji: '💤',

    title: 'Get enough sleep',
    text: 'Adequate sleep is essential for good mental health. Lack of sleep can lead to irritability, difficulty concentrating and increased risk of depression and anxiety.',
  },
  {
    id: 4,
    emoji: '🧘‍♂️',
    title: 'Practice mindfulness',
    text: 'Mindfulness is a mental state achieved by focusing one’s awareness on the present moment, while calmly acknowledging and accepting one’s feelings, thoughts, and bodily sensations.',
  },
  {
    id: 5,
    emoji: '🚫',
    title: 'Avoid drugs and alcohol',
    text: 'Drugs and alcohol can have a negative impact on mental health. They can cause or worsen depression and anxiety, and lead to substance abuse disorders.',
  },
  {
    id: 6,
    emoji: '🧘‍♂️',
    title: 'Manage stress',
    text: 'Learning stress management techniques, such as deep breathing, meditation, and progressive muscle relaxation, can help reduce stress and improve mental well-being.',
  },
  {
    id: 7,
    emoji: '👨‍⚕️',
    title: 'Seek professional help',
    text: 'If you’re experiencing symptoms of mental illness, it’s important to seek professional help. A mental health professional can help you manage your symptoms and develop a treatment plan.',
  },
  {
    id: 8,
    emoji: '👨‍👩‍👧‍👦',
    title: 'Connect with others',
    text: 'Social support is an important part of mental health. Spending time with friends and family can help you feel less isolated and improve your mood.',
  },
  {
    id: 9,
    emoji: '👍',
    title: 'Maintain a positive attitude',
    text: 'Having a positive outlook can help you cope with stress and improve your overall mental health and well-being.',
  },
];

export default function Home() {
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
                borderRadius="3xl"
                border={'4px solid'}
                borderColor={useColorModeValue('green.400', 'gray.100')}
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
                // filter={'grayscale(100%)'}
                // _hover={{
                //   transition: 'all 0.2s ease-in-out',
                //   filter: 'grayscale(0%)',
                // }}
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
            {goals.map(items => (
              <HStack key={items.id} align={'top'} p={2} className="goals-card">
                <Box
                  color={'green.400'}
                  px={2}
                  fontSize={'3xl'}
                  className="goals-emoji"
                >
                  {items.emoji}
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{items.title}</Text>
                  <Text color={'gray.400'}>{items.text}</Text>
                </VStack>
              </HStack>
            ))}
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
          See what people are saying about us. We are thankful to them for their
          support.
        </Text>
        <Divider marginTop="5" />
        <Testimonials />
      </Box>

      <Footer />
    </Container>
  );
}
