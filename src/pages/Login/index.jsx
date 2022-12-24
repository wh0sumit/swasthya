import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import * as RiIcons from 'react-icons/ri';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];

export default function JoinOurTeam() {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        alignItems={'center'}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading>
            If you are facing mental health issues or problems, then don't worry{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, green.400,purple.400)"
              bgClip="text"
            >
              we are here for your help buddy :)
            </Text>{' '}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <AvatarGroup>
              {avatars.map(avatar => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'green.900'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, green.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          shadow={'md'}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Join Swasthya{' '}
              <Text
                as={'span'}
                bgGradient="linear(to-t, green.400, green.800)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Click the button below to join swasthya and recover from your
              mental health issues. We are here to help you :)
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              {/* <Input
                placeholder="Firstname"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="firstname@lastname.io"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
              <Input
                placeholder="+1 (___) __-___-___"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              /> */}
            </Stack>
            <Box display="flex" mt={3}>
              <Button
                color="#fff"
                bg="#000"
                leftIcon={<RiIcons.RiGithubFill />}
                _hover={{
                  bg: 'gray.900',
                }}
                textAlign="start"
                me="4"
              >
                Login with Github
              </Button>
              <Button
                bgGradient={'linear(to-r, green.400, purple.400)'}
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, green.500, purple.500)',
                }}
                size="md"
                variant={'solid'}
                me="4"
                leftIcon={<RiIcons.RiGoogleFill />}
              >
                Login with Google
              </Button>
            </Box>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
