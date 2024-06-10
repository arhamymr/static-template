'use client';

import React from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { FaMap } from 'react-icons/fa';

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
          style={{ borderRadius: 16 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

const datacontent = [
  {
    title: 'Alamat Kantor',
    address:
      'Jl Pengayoman No. 11 Ruko mirah 2 Hotel Al-Badar Lt 5/502, Makassar',
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4399.5111967658295!2d119.44713803710434!3d-5.160287082530178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2bf897fcbcf%3A0xec700d8e5081bda8!2sAl-Badar%20Hotel%20Syariah%20Makassar!5e0!3m2!1sid!2sid!4v1718027173024!5m2!1sid!2sid',
    link: 'https://maps.app.goo.gl/N3RaCGsQ7JGig4fGA',
  },
];

const MapItem = ({
  title,
  address,
  embed,
  link,
}: {
  title: string;
  address: string;
  embed: string;
  link: string;
}) => {
  return (
    <Flex
      gap={12}
      flexDirection={{ base: 'column', md: 'row' }}
      justify={'space-between'}
      my={100}
    >
      <Box flex={1}>
        <Text
          mb={4}
          color="brand.500"
          fontWeight={'bold'}
          fontSize={{ base: 'xl', md: '3xl' }}
        >
          {title}
        </Text>
        <Text mb={12} fontSize={{ base: 'lg', md: '2xl' }}>
          {address}
        </Text>
        <a href={link} target="_blank">
          <Button leftIcon={<FaMap />}>Buka Google Map</Button>
        </a>
      </Box>

      <MapEmbed location={embed} />
    </Flex>
  );
};

const Map = () => {
  return (
    <Box>
      {datacontent.map((item, index) => (
        <MapItem
          title={item.title}
          address={item.address}
          embed={item.embed}
          link={item.link}
          key={index}
        />
      ))}
    </Box>
  );
};

export default Map;
