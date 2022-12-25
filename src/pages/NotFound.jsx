import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Heading,
  Text,
  Divider,
  Container,
  Link,
  Image,
  HStack,
  Button,
  keyframes,
  useColorModeValue,
} from '@chakra-ui/react';
import * as RiIcons from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

import NotFoundImage from '../assets/NotFoundImage.png';

export default function NotFound() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Swasthya - Page Not Found</title>
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
              <Heading as="h2">It’s void out here!</Heading>
              <Text as="p" marginTop="2" color={useColorModeValue('gray.700')}>
                Error 404: We could not find the page you were looking for.
              </Text>

              <Divider marginY="2" />
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue('gray.700', 'gray.200')}
                fontSize="lg"
              >
                This may happen if the page you‘re looking for either does not
                exist or has been moved to a different location.
              </Text>
              <HStack spacing={2} marginTop="5">
                <NavLink to="/">
                  <Button
                    bg={useColorModeValue('green.600', 'green.200')}
                    color={useColorModeValue('white', 'gray.800')}
                    _hover={{
                      bg: useColorModeValue('green.700', 'green.300'),
                    }}
                    size="md"
                    variant={'solid'}
                    leftIcon={<RiIcons.RiArrowLeftLine />}
                  >
                    Return Home
                  </Button>
                </NavLink>
              </HStack>
              <Text
                as="p"
                marginTop="10"
                color={useColorModeValue('gray.700', 'gray.400')}
                fontSize="sm"
              >
                If you feel this was a mistake, feel free to reach out to us on
                Github or raise an issue on GitHub, or else send us an email.
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
                    src={NotFoundImage}
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
                height="100%"
                position="absolute"
                rounded={'full'}
              >
                <Box
                  bgGradient={useColorModeValue(
                    'radial(green.600 1px, transparent 1px)',
                    'radial(green.100 1px, transparent 1px)'
                  )}
                  backgroundSize="20px 20px"
                  opacity="0.4"
                  height="100%"
                  rounded={'full'}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
