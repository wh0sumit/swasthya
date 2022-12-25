import React from 'react';
import { Avatar, chakra, Flex, useColorModeValue } from '@chakra-ui/react';

export default function TestimonialCard(props) {
  const { name, role, content, avatar } = props;
  return (
    <Flex
      boxShadow={'md'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'3xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('gray.800', 'gray.100')}
      border={'4px solid'}
      borderColor={'green.400'}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}
          color={useColorModeValue('gray.100', 'gray.800')}
        >
          {content}
        </chakra.p>
        <chakra.p
          fontWeight={'bold'}
          fontSize={14}
          color={useColorModeValue('gray.100', 'gray.800')}
        >
          {name}
          <chakra.span fontWeight={'medium'} color={'gray.500'}>
            {' '}
            — {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        border={'2px solid'}
        borderColor={'green.400'}
      />
    </Flex>
  );
}
