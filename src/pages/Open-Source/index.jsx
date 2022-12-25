import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Heading,
  Text,
  Divider,
  Container,
  SimpleGrid,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import MembersCard from './MembersCard';

export default function OpenSource() {
  const TeamMembers = [
    {
      name: 'Sumit Singh',
      username: 'wh0sumit',
      role: 'Frontend Developer & Designer',
      image: 'https://avatars.githubusercontent.com/u/76095902?v=4',
      techStack: ['React', 'Chakra UI', 'Tailwind CSS'],
      socials: {
        github: 'https://github.com/wh0sumit',
        linkedin: 'https://www.linkedin.com/in/wh0sumit/',
        twitter: 'https://twitter.com/wh0sumit',
      },
    },
    {
      name: 'Monesh Goeyal',
      username: '2201monesh',
      role: 'Frontend Developer',
      image:
        'https://images-ext-2.discordapp.net/external/CtnFPz4vm_UtxI80l4ZOrWhzs-1I4HLRvdICRF_jjGI/%3Fv%3D4/https/avatars.githubusercontent.com/u/75907582',
      techStack: ['Angular', 'Javascript'],
      socials: {},
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
              We 💕 Open-Source Softwares!
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg"
            >
              How we are contributing to the open source community and how you
              can contribute to us.
            </Text>
            <Divider marginTop="5" />
            <Text as="p" marginTop="5" fontSize="xl">
              We are a team of developers who are passionate about open source
              software. As a team, we believe that open source software is the
              future of software development that's why we build this platform
              fully open source and free for everyone.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h2"
              marginTop={{
                base: '5',
                sm: '10',
              }}
            >
              Get to know our team 🦸‍♂️
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg"
            >
              Learn more about our team members and how they are contributing to
              the open source community.
            </Text>
            <Divider marginTop="5" />
            <Container maxW={'6xl'} my={16}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {
                  // eslint-disable-next-line array-callback-return
                  TeamMembers.map((member, index) => {
                    return (
                      <MembersCard
                        key={index}
                        name={member.name}
                        username={member.username}
                        role={member.role}
                        image={member.image}
                        techStack={member.techStack}
                      />
                    );
                  })
                }
              </SimpleGrid>
              <Text
                as="p"
                marginTop="10"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="xl"
              >
                We are always looking for new members to join our team. If you
                are interested in joining us, please contact us at{' '}
                <Link
                  href="mailto:sumikumar1608@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  color="green.400"
                  textDecoration="underline"
                >
                  email.
                </Link>
              </Text>
            </Container>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
