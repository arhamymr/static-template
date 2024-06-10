import React from 'react';
import { Box, Flex, Heading, Image, Center, Text } from '@chakra-ui/react';
const Hero: React.FC = () => {
  return (
    <Box>
      <Box w="full" bg="secondary.500" p="24">
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          gap={12}
          alignItems={'center'}
          justify={'center'}
          w="full"
          maxW="container.xl"
        >
          <Box flex={1} color={'brand.500'}>
            <Heading as="h1" size="xl" mb={1}>
              Selamat Datang di <br /> PT. Wastewater Management Service
            </Heading>
            <Text>
              Kami adalah perusahaan yang Khusus menangani Pengolahan Air
              limbah, di mana telah di terangkan dalam Akta pendirian perusahaan
              kategori bidang usaha yang di jalankan sebagai General contraktor
              (Mekanikal Eliktrikal), Treatment Air, Treatment Air limbah dan
              Produsen pembuatan Fibergalss sekaligus perusahaan yang melakukan
              perdagangan produk Septictank, IPAL,STP, WTP dan bahan bahan fiber
              lainnya,
            </Text>
          </Box>

          <Image
            rounded={'xl'}
            src="/img/foto-1.png"
            alt="Hero"
            width={300}
            flex={1}
          />
        </Flex>
      </Box>
      <Box bg="secondary.300" p={12}>
        <Center>
          <Text
            fontSize={'lg'}
            textAlign={'center'}
            maxW={800}
            color="brand.500"
          >
            Resmi berdiri menjadi perseroan terbatas pada tanggal 24 April 2024,
            Diamana sebelumnya di naungi oleh PT. Bumi Elok Perkasa. Setelah
            berjalan satu tahun melakukan operasional dan observasi dampak
            limbah cair yang semakin menjadi jadi, maka itulah yang membuat WMS
            ini berdiri sendiri agar bisa fokus menjadi{' '}
            <b>SOLUSI PENANGANAN LIMBAH CAIR</b> yang terkemuka di Indonesia
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Hero;
