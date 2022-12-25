import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

import TestimonialsData from '../../data/TestimonialsData';
import TestimonialCard from '../Cards/TestimonialCard';

export default function Testimonials() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
    >
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'10'}
        mt={16}
        mx={'auto'}
      >
        {TestimonialsData.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box fontSize={'3xl'} my={'10'}>
        💚
      </Box>
    </Flex>
  );
}
