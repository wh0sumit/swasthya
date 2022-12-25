import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Heading,
  Text,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Team() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Swasthya - Team</title>
      </Helmet>
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
          Learn more about our team and our mission to help you thrive ✌
        </Text>
        <Divider marginTop="5" />
      </Box>
    </React.Fragment>
  );
}
