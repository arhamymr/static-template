'use client';

import React from 'react';
import { Center, Image, Box, Flex, Text, Icon } from '@chakra-ui/react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaTiktok,
} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <Flex gap={6} justify={'center'}>
      <a
        href="https://www.facebook.com/profile.php?id=100087230781855"
        target="_blank"
      >
        {' '}
        <Icon fontSize={'3xl'} as={FaFacebookSquare} />
      </a>
      <a
        href="https://www.instagram.com/anugrah_cctv_indonesia"
        target="_blank"
      >
        <Icon fontSize={'3xl'} as={FaInstagram} />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=6285317831333&text=Halo%20kak,%20mau%20tanya-tanya%20tentang%20Anugrah%20Computer"
        target="_blank"
      >
        <Icon fontSize={'3xl'} as={FaWhatsapp} />
      </a>
      <a href="mailto:anugrahteknologiindonesia@gmail.com" target="_blank">
        <Icon fontSize={'3xl'} as={FaEnvelope} />
      </a>

      <a href="https://www.tiktok.com/@anugrahcomputercctv" target="_blank">
        <Icon fontSize={'3xl'} as={FaTiktok} />
      </a>
    </Flex>
  );
};

const Footer: React.FC = () => {
  return (
    <Center p={6} flexDirection={'column'} gap={6}>
      <Box>
        <Image flex={1} src="/assets/logo-white.png" alt="Logo" width={210} />
        <SocialMedia />
      </Box>
      <Text p={2}>
        {' '}
        &copy; {new Date().getFullYear()} Anugrah Teknologi Indonesia. All
        rights reserved.
      </Text>
    </Center>
  );
};

export default Footer;
