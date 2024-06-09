import Gallery from '@/components/gallery';
import { Container, Box, Divider } from '@chakra-ui/react';
import Hero from '@/components/hero';
import React from 'react';
import VisiMisi from '@/components/visi-misi';
import Services from '@/components/services';
import Whyus from '@/components/whyus';
import Footer from '@/components/footer';
import QR from '@/components/qr';
import Map from '@/components/map';
import Testimoni from '@/components/testimoni';
import Legalitas from '@/components/legalitas';

const BlueBackground = ({ children }: { children: React.ReactNode }) => (
  <Box mt={100} bg="brand.900" color={'white'}>
    {children}
  </Box>
);

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <Container maxW="container.lg">
        <Hero />
      </Container>

      <Divider />

      {/* WHY US*/}
      <Container maxW="container.lg">
        <Whyus />
      </Container>

      {/* VISI MISI */}
      <BlueBackground>
        <Container maxW="container.lg">
          <VisiMisi />
        </Container>
      </BlueBackground>

      {/* SERVICES */}
      <Container maxW="container.lg">
        <Services />
      </Container>

      {/* QR SEction*/}
      <BlueBackground>
        <Container maxW="container.lg">
          <QR />
        </Container>
      </BlueBackground>

      {/* Testimony */}
      <Container maxW="container.lg">
        <Testimoni />
      </Container>

      <Divider />

      {/* GALLERY */}
      <Container maxW="container.lg">
        <Gallery />
      </Container>

      {/* LEGALITAS */}
      <Container maxW="container.lg">
        <Legalitas />
      </Container>

      <Divider />

      <Container maxW="container.lg">
        <Map />
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
