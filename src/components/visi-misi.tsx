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

const datacontent = [
  {
    title: 'Visi',
    content:
      'Menjadi perusahaan yang memberikan solusi permasalahan IT dan jasa yang bermutu berintegritas, sinergis, dan profesional, dan berkelanjutan',
  },

  {
    title: 'Misi',
    content: (
      <>
        <UnorderedList>
          <ListItem>
            Membangun SDM yang unggul dan berintegritas serta loyal dengan
            perusahaan
          </ListItem>
          <ListItem>Melengkapi kebutuhan pelanggan sesuai permintaan</ListItem>
          <ListItem>
            Memberikan edukasi dan informasi tentang kebutuhan IT saat ini
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
];
const VisiMisi: React.FC = () => {
  return (
    <Box p={{ base: 4, md: 16 }}>
      {datacontent.map((item, index) => (
        <Flex gap={8} key={index} flexDirection={{ base: 'column', md: 'row' }}>
          <StarIcon
            fontSize={'5xl'}
            color={'yellow'}
            bg={
              'linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)'
            }
            p={2}
            rounded={'md'}
          />
          <Box>
            <Heading as="h2" size="2xl" color={'white'} mb={2}>
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
