'use client';

import React from 'react';
import Slider from 'react-slick';
import { Image, Box, Heading } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const images = [
  '/img/foto1.jpeg',
  '/img/foto2.jpeg',
  '/img/foto3.jpeg',
  '/img/foto4.jpeg',
  '/img/foto5.jpeg',
  '/img/foto6.jpeg',
  '/img/foto7.jpeg',
  '/img/foto8.jpeg',
  '/img/foto9.jpeg',
  '/img/foto10.jpeg',
  '/img/foto11.jpeg',
  '/img/foto12.jpeg',
];

export default function Gallery() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box my={100} id="galeri">
      <Heading as="h2" size="2xl" color={'brand.500'} mb={12}>
        Foto Kegiatan
      </Heading>

      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} p={2}>
            <Image
              src={image}
              alt={`gallery-${index}`}
              width={'full'}
              height={300}
              objectFit={'cover'}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
