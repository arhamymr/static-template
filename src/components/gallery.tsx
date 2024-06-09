'use client';

import React from 'react';
import Slider from 'react-slick';
import { Image, Box, Heading } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const images = [
  '/assets/gallery/galeri1.png',
  '/assets/gallery/galeri2.png',
  '/assets/gallery/galeri3.png',
  '/assets/gallery/galeri4.png',
  '/assets/gallery/galeri5.png',
  '/assets/gallery/galeri6.png',
  '/assets/gallery/galeri7.png',
  '/assets/gallery/galeri8.png',
  '/assets/gallery/galeri9.png',
  '/assets/gallery/galeri10.png',
  '/assets/gallery/galeri11.png',
  '/assets/gallery/galeri12.png',
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
        Gallery
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
