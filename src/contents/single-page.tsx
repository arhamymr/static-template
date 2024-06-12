import Gallery from '@/components/gallery';
import { Container, Box, Divider } from '@chakra-ui/react';
import Hero from '@/components/hero';
import React from 'react';
import VisiMisi from '@/components/visi-misi';
import Services from '@/components/services';
import Description from '@/components/description';
import Footer from '@/components/footer';
import QR from '@/components/qr';
import Map from '@/components/map';
import Testimoni from '@/components/testimoni';

const BlueBackground = ({ children }: { children: React.ReactNode }) => (
  <Box mt={100} bg="brand.500" color={'white'}>
    {children}
  </Box>
);

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Container maxW="container.lg">
        <Services />
      </Container>

      {/* VISI MISI */}
      <BlueBackground>
        <Container maxW="container.lg">
          <VisiMisi />
        </Container>
      </BlueBackground>

      {/* Testimony */}
      <Container maxW="container.lg">
        <Testimoni />
      </Container>

      <Divider mb={20} />

      <Container maxW="container.lg">
        <Map />
      </Container>
      <Divider />
      {/* GALLERY */}
      <Container maxW="container.lg">
        <Gallery />
      </Container>
      {/* Footer*/}
      <BlueBackground>
        <Container maxW="container.lg">
          <Footer />
        </Container>
      </BlueBackground>
    </main>
  );
}
