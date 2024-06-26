'use client';

import React, { ReactNode } from 'react';
import {
  Heading,
  Card,
  Box,
  Text,
  Grid,
  Icon,
  Flex,
  Center,
  As,
} from '@chakra-ui/react';
import { FaCheck, FaDiceD20, FaSink, FaWrench } from 'react-icons/fa';
import ContactUsButton from './contact-us-button';
const datacontent = [
  {
    icon: FaSink,
    title: 'Sedot WC',
    content: [
      <p key={0}>
        Penyedotan <b>WC rumah tinggal</b>
      </p>,
      <p key={1}>
        Penyedotan <b>WC rumah sakit dan Puskesmas</b>
      </p>,
      <p key={2}>
        Penyedotan <b>WC restoran dan mall</b>
      </p>,
      <p key={3}>
        Penyedotan <b>WC kantoran</b>
      </p>,
    ],
  },

  {
    icon: FaWrench,
    title: 'Service Pipa Buntu',
    content: [
      <p key={0}>
        Perbaikan <b>pipa buntu air bersih</b>
      </p>,
      <p key={1}>
        Perbaikan <b>pipa buntu air kotor</b>
      </p>,
      <p key={2}>
        Perbaikan <b>pipa buntu wc</b>
      </p>,
    ],
  },
];

const Item = ({
  title,
  content,
  icon,
}: {
  title: string;
  content: ReactNode[];
  icon: As;
}) => (
  <a href={`https://api.whatsapp.com/send?phone=628115558803`} target="_blank">
    <Card
      variant={'outline'}
      _hover={{ bg: 'secondary.100' }}
      p={12}
      mb={10}
      color={'brand.500'}
    >
      <Icon
        p={4}
        as={icon}
        bg={'brand.500'}
        rounded={'lg'}
        color={'white'}
        fontSize={'70px'}
        position={'absolute'}
        right={5}
        top={-5}
        mb={5}
      />
      <Text fontWeight={'bold'} fontSize={'2xl'} mb={5}>
        {title}
      </Text>
      <Box h={'200px'}>
        {' '}
        {content.map((item, index) => (
          <Flex key={index} mb={2} gap={2}>
            <Icon color={'green'} as={FaCheck} />
            {item}
          </Flex>
        ))}
      </Box>
      <Text mt={2}>
        {' '}
        * Area Layanan : <b>Kota Makassar, Gowa, dan Maros</b>{' '}
      </Text>
    </Card>
  </a>
);

const Services: React.FC = () => {
  return (
    <Box mt={100} id="services">
      <Center>
        <Heading
          textAlign={'center'}
          mb={100}
          as="h1"
          size="2xl"
          color={'brand.500'}
          maxW="600px"
        >
          Layanan Unggulan Kami
        </Heading>
      </Center>

      <Center>
        <Grid
          gap={12}
          maxW={800}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
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
      </Center>
      <Center
        flexDirection={'column'}
        gap={8}
        bg={'gray.100'}
        rounded={'lg'}
        p={12}
        position={'relative'}
        overflow={'hidden'}
      >
        <Icon
          as={FaDiceD20}
          fontSize={300}
          position={'absolute'}
          right={-20}
          top={-40}
          color={'secondary.100'}
          zIndex={0}
        />
        <Icon
          as={FaDiceD20}
          fontSize={300}
          position={'absolute'}
          left={-150}
          zIndex={0}
          bottom={'-175px'}
          color={'brand.100'}
        />
        <Text
          zIndex={1}
          textAlign="center"
          fontSize={{ base: 'lg', md: '5xl' }}
          fontWeight={'bold'}
        >
          Butuh layanan segera? <br /> Klik di sini untuk menghubungi kami!
        </Text>
        <ContactUsButton />
      </Center>
    </Box>
  );
};

export default Services;
