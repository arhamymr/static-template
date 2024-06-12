'use client';

import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Heading,
  Divider,
  Text,
  Grid,
  Card,
} from '@chakra-ui/react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const datacontent = [
  {
    say: 'Pipa wc ku pernah tersumbat dan sudah banyak tukang yang kerja tidak ada yang berhasil, begitu saya tahu WMS langsung saya hubungi dan asli dikerja dengan Drain Cleaning pipa wcku langsung lancar, tanpa bongkar lagi Terimakasih WMS sukses selalu ya',
    name: 'Pak Adriansyah – Jl Haji Kalla No. 12',
  },
  {
    say: 'Terimakasih WMS sudah memberikan solusi wc kami yang full dan memberikan edukasi positif tentang penggunaan wc yang baik dan benar',
    name: 'Ibu Ummu – BTN Angkasa pura',
  },
  {
    say: 'Terimakasih WMS, Alhamdulillah setelah berbulan bulan menderita pipa wc buntu akhirnya sudah wc kami sudah bisa digunakan lagi “Terbaik memang Tawwana”',
    name: 'Ibu Fitri – Jl Biologi',
  },

  {
    say: 'WMS memang solusi yang terbaik dengan pelayanan yang profesioanal dalam penanganan wc full dan pipa buntu rumahku dan rumahnya mertua teratasi dengan cepat dan tuntas “Terimakasih Tim WMS selaluberikan yang terbai ya”',
    name: 'Pak Rasul – Jl Cendrawasih',
  },
  {
    say: 'WMS memang mantap tawwa pelayananny cepat dan profesional dalam pelayanannya.',
    name: 'Pak Anto – Jl Tamangapa Raya No. 115',
  },
];

const ComponentStar = () => (
  <Flex gap={2} mt={4}>
    <Icon color="secondary.500" as={FaStar} />
    <Icon color="secondary.500" as={FaStar} />
    <Icon color="secondary.500" as={FaStar} />
    <Icon color="secondary.500" as={FaStar} />
    <Icon color="secondary.500" as={FaStar} />
  </Flex>
);

const Testimoni: React.FC = () => {
  return (
    <Box my={100} id="testimoni">
      <Heading
        mb={12}
        as="h1"
        size="2xl"
        color={'brand.500'}
        textAlign={{ base: 'center', md: 'left' }}
      >
        Testimoni
      </Heading>
      <Divider mb={12} />
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        {datacontent.map((item, index) => (
          <Card variant={'outline'} key={index} p={6}>
            <Flex gap={{ base: 4, md: 6 }}>
              <Icon
                p={2}
                as={FaQuoteLeft}
                fontSize={'5xl'}
                color="white"
                rounded={'lg'}
                bg="brand.500"
              />

              <Box>
                <Text fontSize={{ base: 'lg' }} mb={4}>
                  {item.say}
                </Text>

                <Text fontSize={{ base: 'lg' }} fontWeight={'bold'}>
                  {' '}
                  - {item.name}
                </Text>
                <ComponentStar />
              </Box>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimoni;
