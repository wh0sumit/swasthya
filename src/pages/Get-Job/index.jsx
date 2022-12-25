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
  List,
  ListItem,
} from '@chakra-ui/react';

export default function GetJob() {
  const listData = [
    {
      title: 'Providing counseling services',
      description:
        'Our team of mental health professionals is here to listen and provide guidance and support to help you cope with the emotions and stress that can come with job loss.',
    },
    {
      title: 'Offering financial planning assistance',
      description:
        'We understand that job loss can have a significant impact on your financial situation, and we are here to help you navigate this difficult time and build a plan for your financial future.',
    },
    {
      title: 'Providing job search support',
      description:
        'We offer a range of resources and support services to help you navigate the job search process and find a job that is a good fit for you.',
    },
    {
      title: 'Offering a supportive community',
      description:
        'Swasthya is also a supportive and understanding community of individuals who are all committed to improving their mental health and well-being. We believe in the power of connection and support, and are here to provide a safe and welcoming space where you can share your experiences, seek guidance, and find the help and support you need to thrive in your personal and professional life.',
    },
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Swasthya - Team</title>
      </Helmet>
      <Box>
        <Container maxW={'7xl'} my={20}>
          <Box marginY={{ base: '1', sm: '5' }} py={10}>
            <Heading as="h2" marginY={{ base: '1', sm: '5' }}>
              How will our team at Swasthya your mental health ally in the tech
              world will help you? Let's find out!
            </Heading>
            <Divider marginTop="5" />
            <Text as="p" marginTop="5" fontSize="xl">
              At Swasthya, our team is committed to helping individuals in the
              tech industry navigate the challenges of job loss and improve
              their mental health and well-being. We offer a range of resources
              and support services to help you cope with the impact of job
              layoffs on your mental health and navigate the job search process.
              Some of the ways that our team can help you include:
            </Text>{' '}
            <List as="ol" margin="5" fontSize="xl">
              {listData.map((item, index) => (
                <ListItem as="li" key={index} listStyleType="disc">
                  <Text as="p" marginTop="5" fontSize="xl">
                    <Text as="strong" fontWeight="bold" color="green.400">
                      {item.title}
                    </Text>{' '}
                    - {item.description}
                  </Text>
                </ListItem>
              ))}
            </List>
            <Text as="p" marginTop="5" fontSize="xl">
              If you are struggling with the impact of job loss on your mental
              health, we encourage you to reach out and connect with our team at
              Swasthya. We are here to help you navigate this difficult time and
              build the healthy, fulfilling life you deserve.
            </Text>{' '}
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
              Comming Soon
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
