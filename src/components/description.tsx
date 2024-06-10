'use client';
import React from 'react';
import { Heading, Flex, Icon, Text, As, Image, Box } from '@chakra-ui/react';
import { FaFighterJet, FaKey, FaShieldAlt } from 'react-icons/fa';

const datacontent = [
  {
    image: '/wa-icon.png',
    content:
      'Kami adalah perusahaan yang Khusus menangani Pengolahan Air limbah, di mana telah di terangkan dalam Akta pendirian perusahaan kategori bidang usaha yang di jalankan sebagai General contraktor (Mekanikal Eliktrikal), Treatment Air, Treatment Air limbah dan Produsen pembuatan Fibergalss sekaligus perusahaan yang melakukan perdagangan produk Septictank, IPAL,STP, WTP dan bahan bahan fiber lainnya.',
  },

  {
    image: '/wa-icon.png',
    content:
      'Resmi berdiri menjadi perseroan terbatas pada tanggal 24 April 2024, Diamana sebelumnya di naungi oleh PT. Bumi Elok Perkasa. Setelah berjalan satu tahun melakukan operasional dan observasi dampak limbah cair yang semakin menjadi jadi, maka itulah yang membuat WMS ini berdiri sendiri agar bisa fokus menjadi SOLUSI PENANGANAN LIMBAH CAIR yang terkemuka di Indonesia',
  },
];

const Description: React.FC = () => {
  return (
    <Box>
      {datacontent.map((item, index) => (
        <Flex
          key={index}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={12}
          p={6}
          alignItems={'center'}
          justify={'center'}
          w="full"
          maxW="container.xl"
        >
          <Box flex={1} order={{ base: 0, md: index % 2 === 0 ? 1 : 0 }}>
            <Text mb={{ base: 6, md: 12 }} fontSize={'xl'} color={'brand.500'}>
              {item.content}
            </Text>
          </Box>

          <Image
            rounded={'xl'}
            order={{ base: 1, md: index % 2 === 0 ? 0 : 1 }}
            src={item.image}
            alt="Hero"
            width={300}
            flex={1}
          />
        </Flex>
      ))}
    </Box>
  );
};

export default Description;
