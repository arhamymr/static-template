'use client';

import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const MapEmbed = ({ location }: { location: string }) => {
  return (
    <Box flex={1}>
      <Box mb={4}>
        <iframe
          src={location}
          width="100%"
          height="350"
          allowFullScreen={false}
          loading="lazy"
          style={{ borderRadius: 16 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

const Map = () => {
  const embed =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3973.748122070747!2d119.4817699!3d-5.1441967!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee36fa21c991f%3A0x2e0a0d3b1009be87!2sTukang%20Sedot%20Buntu!5e0!3m2!1sid!2sid!4v1718168563125!5m2!1sid!2sid';

  return (
    <Box>
      <Heading as="h2" size="2xl" color={'brand.500'} mb={12}>
        Alamat Workshop
      </Heading>
      <MapEmbed location={embed} />
    </Box>
  );
};

export default Map;
