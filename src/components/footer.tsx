'use client';

import React from 'react';
import {
  Center,
  Image,
  Box,
  Flex,
  Grid,
  Text,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

const MapEmbed = ({ location }: { location: string }) => {
  return (
    <Box flex={1}>
      <Box mb={4}>
        <iframe
          src={location}
          width="100%"
          height="250"
          allowFullScreen={false}
          loading="lazy"
          style={{ borderRadius: 4 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

const SocialMedia = () => {
  return (
    <Flex gap={6}>
      <a
        href="https://web.facebook.com/profile.php?id=61560700800200"
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
      <a href="mailto:Wms.bep@gmail.com" target="_blank">
        <Icon fontSize={'3xl'} as={FaEnvelope} />
      </a>
    </Flex>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <Center p={6} mt={300} flexDirection={'column'} gap={6}>
        <Grid w={'full'} templateColumns={'repeat(2,1fr)'} gap={16}>
          <Box>
            <Image
              flex={1}
              src="/logo.png"
              alt="Logo"
              width={210}
              filter={'brightness(0) invert(1)'}
              mb={12}
            />

            <Text> Alamat Kantor : </Text>
            <Text mb={6}>
              {' '}
              Jl pengayoman Ruko mira <br />
              No 11 Hotel Al badar lt 5 Ruang 502
            </Text>
            <SocialMedia />
          </Box>
          <Box>
            <MapEmbed location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4399.5111967658295!2d119.44713803710434!3d-5.160287082530178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2bf897fcbcf%3A0xec700d8e5081bda8!2sAl-Badar%20Hotel%20Syariah%20Makassar!5e0!3m2!1sid!2sid!4v1718027173024!5m2!1sid!2sid" />
          </Box>
        </Grid>
      </Center>
      <Box>
        <Text p={2} fontSize={'sm'} textAlign={'center'}>
          {' '}
          &copy; {new Date().getFullYear()} PT. Wastewater Management Service.
          All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
