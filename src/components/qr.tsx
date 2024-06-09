'use client';

import React from 'react';
import { Center, Image, Box, Flex, Text, Divider } from '@chakra-ui/react';

const QR: React.FC = () => {
  return (
    <Box>
      <Center px={4} py={16}>
        <Flex gap={6} flexDirection={{ base: 'column', md: 'row' }}>
          <Box flex={1}>
            <Text>Info Selengkapnya</Text>
            <Text fontWeight={'bold'} fontSize="3xl">
              Scan disini!
            </Text>
          </Box>
          <Center flexDirection={'column'} gap={2}>
            <Image
              flex={1}
              src="/assets/qr-code/qr_contact.png"
              alt="qrcode-contact"
              width={210}
            />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              Admin
            </Text>
          </Center>

          <Center flexDirection={'column'} gap={2}>
            <Image
              flex={1}
              src="/assets/qr-code/qr_ekatalog.png"
              alt="qrcode-ekatalog"
              width={210}
            />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              E-Katalog
            </Text>
          </Center>

          <Center flexDirection={'column'} gap={2}>
            <Image
              flex={1}
              src="/assets/qr-code/qr_siplah.png"
              alt="qrcode-siplah"
              width={210}
            />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              Siplah
            </Text>
          </Center>

          <Center flexDirection={'column'} gap={2}>
            <Image
              flex={1}
              src="/assets/qr-code/qr_mbizmarket.png"
              alt="qrcode-website"
              width={210}
            />
            <Text fontSize={'xl'} fontWeight={'bold'}>
              Website
            </Text>
          </Center>
        </Flex>
      </Center>

      <Divider />
    </Box>
  );
};

export default QR;
