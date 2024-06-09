'use client';

import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
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
    title: 'Cabang 1',
    address:
      'Jl. Poros Sengkang, Tanrutedong, Sidenreng Rappang, Sulawesi Selatan',
    embed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15922.417657319642!2d120.0058706!3d-3.8946333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95d1f4bdfdef01%3A0x6bedd4f01f9d9aa8!2sAnugrah%20computer%20%26%20CCTV!5e0!3m2!1sid!2sid!4v1714226978315!5m2!1sid!2sid',
    link: 'https://www.google.com/maps?ll=-3.89412,120.005871&z=15&t=m&hl=id&gl=ID&mapclient=embed&cid=7777106259326376616',
  },
  {
    title: 'Cabang 2',
    address: 'Jl. Ganggawa, Pangkajene, Sidenreng Rappang, Sulawesi Selatan',
    embed:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15921.947471527088!2d119.7916667!3d-3.9194071!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95c917d6e6338f%3A0x8a88be6ea4574462!2sAnugrah%20Computer%20dan%20CCTV%20Pangkajene%20Sidrap!5e0!3m2!1sid!2sid!4v1714315028378!5m2!1sid!2sid',
    link: 'https://www.google.com/maps/place/Anugrah+Computer+dan+CCTV+Pangkajene+Sidrap/@-3.9194071,119.7916667,15z/data=!4m6!3m5!1s0x2d95c917d6e6338f:0x8a88be6ea4574462!8m2!3d-3.9194071!4d119.7916667!16s%2Fg%2F11q2651y6k?hl=id&entry=ttu',
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
          <Flex
            px="3"
            py="2"
            gap={2}
            color={'white'}
            alignItems={'center'}
            rounded={'lg'}
            w={300}
            justifyContent={'center'}
            fontSize={'lg'}
            fontWeight={'bold'}
            bg="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          >
            <FaMap />
            <Text>Buka Google Map</Text>
          </Flex>
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
