import React from 'react';
import { Box, Flex, Button, Heading, Image, Text } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
const Hero: React.FC = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      gap={12}
      alignItems={'center'}
      mb={100}
    >
      <Image
        rounded={'xl'}
        src="/assets/gallery/galeri1.png"
        alt="Hero"
        width={400}
        flex={1}
      />
      <Box flex={1}>
        <Heading
          mb={{ base: 6, md: 12 }}
          as="h1"
          size="2xl"
          color={'brand.500'}
        >
          Anugrah Teknologi Indonesia
        </Heading>
        <Text mb={12} fontSize={{ base: 'lg', md: '2xl' }}>
          Perusahaan yang bergerak dibidang pengadaan barang dan jasa, seperti
          Perlengkapan komputer dan laptop, CCTV, AC, dan lainnya. Perusahaan
          ini berdiri sejak 2013 hingga sekarang. Dengan berjalannya waktu,
          perusahaan ini  menerapkan budaya kerja jujur, disiplin, bertanggung
          jawab, kerja sama, terbuka, serta loyal.
        </Text>
        <a
          href="https://api.whatsapp.com/send?phone=6285317831333&text=Halo%20kak,%20mau%20tanya-tanya%20tentang%20Anugrah%20Computer"
          target="_blank"
        >
          <Flex
            px="4"
            py="3"
            gap={2}
            color={'white'}
            alignItems={'center'}
            rounded={'lg'}
            w={200}
            justifyContent={'center'}
            fontSize={'lg'}
            fontWeight={'bold'}
            bg="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          >
            <FaWhatsapp />
            <Text>Hubungi Kami </Text>
          </Flex>
        </a>
      </Box>
    </Flex>
  );
};

export default Hero;
