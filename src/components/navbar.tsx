import React from 'react';
import { Box, Flex, Center, Text, Image, Divider } from '@chakra-ui/react';

const Item = ({ label }: { label: string }) => (
  <Box>
    <Text
      cursor={'pointer'}
      px={4}
      py={2}
      rounded={'lg'}
      fontSize={'lg'}
      fontWeight={'bold'}
      color="brand.900"
    >
      {label}
    </Text>
  </Box>
);

const Navbar: React.FC = () => {
  return (
    <>
      <Box>
        <Center>
          <Center p={6} flexDirection={'column'} gap={8}>
            <Image src="/assets/logo-black.png" alt="Logo" width={110} />
          </Center>
        </Center>
      </Box>
      <Center
        bg="white"
        mb={{ base: 20, md: 100 }}
        position="sticky"
        top="-1"
        flexDirection={'column'}
        zIndex={999}
      >
        <Flex
          justifyContent={'center'}
          flexWrap={'wrap'}
          gap={{ base: 0, md: 6 }}
          p={4}
        >
          <a href="#layanan">
            <Item label="Layanan" />
          </a>
          <a href="#galeri">
            <Item label="Galeri" />
          </a>
          <a href="#legalitas">
            <Item label="Legalitas" />
          </a>
          <a href="#testimoni">
            <Item label="Testimoni" />
          </a>
        </Flex>
        <Divider />
      </Center>
    </>
  );
};

export default Navbar;
