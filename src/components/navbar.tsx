import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Spacer,
  Container,
  Button,
} from '@chakra-ui/react';

const Item = ({ label }: { label: string }) => (
  <Box>
    <Text
      cursor={'pointer'}
      px={4}
      py={2}
      rounded={'lg'}
      fontSize={'lg'}
      color="brand.900"
    >
      {label}
    </Text>
  </Box>
);

const Navbar: React.FC = () => {
  return (
    <Box
      zIndex={9999}
      position={'sticky'}
      top={'0'}
      boxShadow={'md'}
      bg="white"
      w="full"
    >
      <Container maxW="container.xl">
        <HStack alignItems={'center'} justifyContent={'center'}>
          <Box>
            <Image src="/logo.png" alt="Logo" width={110} />
          </Box>
          <Spacer />
          <Flex
            justifyContent={'center'}
            flexWrap={'nowrap'}
            gap={{ base: 0, md: 6 }}
            p={4}
            color="brand.500"
          >
            <a href="#layanan">
              <Item label="Layanan" />
            </a>
            <a href="#kontak">
              <Item label="Kontak" />
            </a>

            <a href="#testimoni">
              <Item label="Testimoni" />
            </a>
          </Flex>
          <Button> Hubungi Kami </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
