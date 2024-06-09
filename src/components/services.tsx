'use client';

import React from 'react';
import {
  Heading,
  Card,
  Box,
  Text,
  Button,
  Grid,
  Icon,
  Flex,
  Center,
  Spacer,
  As,
} from '@chakra-ui/react';
import { FaCheck, FaLaptop, FaCamera, FaKeyboard, FaFan } from 'react-icons/fa';
const datacontent = [
  {
    title: 'Laptop',
    icon: FaLaptop,
    content: [
      'Melayani Jual dan Beli Laptop serta komputer, baik baru maupun bekas',
      'Menerima jasa servis laptop/ komputer',
      'Menjual sparepart laptop/komputer',
    ],
  },
  {
    title: 'CCTV',
    icon: FaCamera,
    content: [
      'Menyediakan berbagai macam jenis CCTV',
      'Menyediakan berbagai perlengkapan CCTV',
      'Melayani pemasangan, pemindahan, serta perbaikan CCTV',
    ],
  },
  {
    title: 'AC',
    icon: FaFan,
    content: [
      'Menyediakan AC berbagai merek',
      'Menyediakan jasa servis AC',
      'Melayani pemasangan, pemindahan serta pencucian AC',
    ],
  },
  {
    title: 'Aksesoris',
    icon: FaKeyboard,
    content: [
      'Menjual berbagai macam keyboard dan mouse',
      'Menyediakaan flashdisk, modem, dan sebagainya',
      'Tersedia berbagai jenis printer, tinta, dan perlengkapan lainnya',
    ],
  },
];

const Item = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: string[];
  icon: As;
}) => (
  <Card variant={'outline'} p={4} mb={10}>
    <Text
      fontSize="lg"
      color={'white'}
      fontWeight={'bold'}
      textAlign={'center'}
      px={3}
      py={2}
      rounded={'100px'}
      bg="brand.500"
      mt={'-35px'}
      mb={5}
    >
      {title}
    </Text>
    <Center my={2} mb={5}>
      <Icon
        bg={
          'linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
        }
        color="white"
        p={4}
        as={icon}
        rounded={'lg'}
        fontSize={'80px'}
      />
    </Center>

    {content.map((item, index) => (
      <Flex key={index} gap={3} mb={4}>
        <Icon mt={1} color={'green'} as={FaCheck} />
        {item}
      </Flex>
    ))}
    <Spacer />
    <Center>
      <a
        href={`https://api.whatsapp.com/send?phone=6285317831333&text=Halo%20kak,%20mau%20tanya-tanya%20tentang%20${title}`}
        target="_blank"
      >
        <Button variant={'outline'} colorScheme="green">
          Hubungi Kami
        </Button>
      </a>
    </Center>
  </Card>
);

const Services: React.FC = () => {
  return (
    <Box mt={100} id="layanan">
      <Heading
        textAlign={'center'}
        mb={100}
        as="h1"
        size="2xl"
        color={'brand.500'}
      >
        Layanan Kami
      </Heading>
      <Grid
        gap={6}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
      >
        {datacontent.map((item, index) => (
          <Item
            title={item.title}
            content={item.content}
            key={index}
            icon={item.icon}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
