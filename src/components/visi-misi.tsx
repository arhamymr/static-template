'use client';
import React from 'react';
import {
  Box,
  Link,
  Flex,
  Button,
  Heading,
  Center,
  Image,
  Text,
  Icon,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaCheck } from 'react-icons/fa';

const datacontent = [
  {
    title: 'Visi',
    content:
      'Menjadi perusahaan terkemuka di Indonesia yang berwawasan lingkungan, inovatif, dan unggul dalam usaha pengolahan limbah cair.',
  },
  {
    title: 'Misi',
    content: (
      <>
        <UnorderedList>
          <ListItem>
            Memberikan solusi pengelolaan air limbah yang inovatif dan efisien
            dalam rangka pemenuhan kebutuhan pelanggan.
          </ListItem>
          <ListItem>
            Berupaya memberikan konstribusi kepada stake holder (Masyarakat,
            Pemerintah, customer, Vendor, Karywan) dalam pelestarian lingkungan
            hidup untuk kesejahteraan sosial.
          </ListItem>
          <ListItem>
            Memberikan sumber daya manusia (SDA) yang berdaya saing, cerdas dan
            kompatibel.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
];
const VisiMisi: React.FC = () => {
  return (
    <Box p={{ base: 4, md: 16 }} color="secondary.500">
      {datacontent.map((item, index) => (
        <Flex gap={8} key={index} flexDirection={{ base: 'column', md: 'row' }}>
          <Icon as={FaCheck} fontSize={34} mt={2} />
          <Box>
            <Heading as="h2" size="2xl" mb={2}>
              {item.title}
            </Heading>
            <Box mb={12} fontSize={{ base: 'lg', md: '2xl' }}>
              {item.content}
            </Box>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default VisiMisi;
