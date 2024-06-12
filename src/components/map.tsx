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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9855451689123!2d119.5061572389029!3d-5.10602944041297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefbf2ca8e3ba3%3A0x70d6b5cab4ff8174!2sJl.%20Perintis%20Kemerdekaan%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1718105238710!5m2!1sid!2sid';

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
