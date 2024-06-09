'use client';

import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Button,
  Heading,
  Image,
  Divider,
  Text,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';

const datacontent = [
  {
    say: 'Penempatan CCTV tepat sekali bos. CS nya fast respon, teknisinya juga sangat rapih, dan ramah. Serta selalu menginfokan jika ada CCTV yang mulai bermasalah. Mantap, Anugrah Teknologi Indonesia',
    name: 'Pak Burhan',
  },
  {
    say: 'Alhamdulillah, gak kecewa beli printer di sini. Pelayanannya, sangat super sekali, dan kualitas barangnya oke.',
    name: 'Bu Damri',
  },
  {
    say: 'Alhamdulillah, AC kami sudah terpasang dengan baik, posisinya tepat, dan Teknisi sangat ramah serta memberikan pengetahuan cara menjaga agar AC bisa tahan lama. Sukses selalu untuk Anugrah Teknologi Indonesia',
    name: 'Pak Bisri',
  },
  {
    say: 'Hampir putus asa pas laptop tiba-tiba selalu mati. udah bolak-balik ke beberapa servisan laptop tetep aja gak mau hidup lagi..tapi akhirnya nemu Anugrah dimana teknisinya pro, udah gitu cukup terjangkau, cepat, dan akhirnya laptop yang cuma satu-satunya bisa berfungsi lagi dengan baik',
    name: 'Bu Anti',
  },
];

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

      {datacontent.map((item, index) => (
        <Box key={index}>
          <Flex gap={{ base: 4, md: 6 }}>
            <Icon
              p={2}
              as={FaQuoteLeft}
              fontSize={'5xl'}
              color="white"
              rounded={'lg'}
              bg="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
            />
            <Box>
              <Text fontSize={{ base: 'lg', md: '2xl' }} mb={4}>
                {item.say}
              </Text>
              <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight={'bold'}>
                {' '}
                - {item.name}
              </Text>
            </Box>
          </Flex>

          <Divider my={6} />
        </Box>
      ))}
    </Box>
  );
};

export default Testimoni;
