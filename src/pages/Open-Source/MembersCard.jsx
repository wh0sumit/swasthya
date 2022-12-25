import {
  Tag,
  Box,
  useColorModeValue,
  Avatar,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';

export default function MembersCard({
  name,
  username,
  role,
  image,
  techStack,
}) {
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
  return (
    <HStack align={'top'}>
      <Box color={'green.400'} px={2}>
        <Avatar
          size="xl"
          name={name}
          src={image}
          border={'4px solid'}
          borderColor={useColorModeValue('green.400', 'gray.100')}
        ></Avatar>
      </Box>
      <VStack align={'start'}>
        <Text fontWeight={600}>{name}</Text>
        <Text color={'gray.400'} fontWeight={600} fontSize={'sm'}>
          {' '}
          — {username}
        </Text>
        <Text color={'gray.500'} mt={0}>
          {role}
        </Text>
        <Tags tags={techStack} />
      </VStack>
    </HStack>
  );
}
