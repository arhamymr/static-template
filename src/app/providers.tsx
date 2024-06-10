'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import modifyComponent from '@/styles/component';
import '@fontsource-variable/plus-jakarta-sans';
// import FloatingButton from '@/components/floating-button';

const theme = extendTheme({
  colors: {
    brand: {
      '100': '#2E8B57',
      '200': '#277A50',
      '300': '#206849',
      '400': '#195641',
      '500': '#12443A',
      '600': '#0B6132',
      '700': '#045E2B',
      '800': '#005524',
      '900': '#004C1D',
    },
    secondary: {
      '50': '#F2D16B',
      '100': '#F2DB8A',
      '200': '#F2E5A9',
      '300': '#F2EFC8',
      '400': '#F2F9E7',
      '500': '#F2C94C', // Base color
      '600': '#C2B942',
      '700': '#928938',
      '800': '#63592E',
      '900': '#342924',
    },
  },
  components: {
    ...modifyComponent,
  },

  fonts: {
    heading: "'Plus Jakarta Sans', sans-serif;",
    body: "'Plus Jakarta Sans', sans-serif;",
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
      {/* <FloatingButton /> */}
    </ChakraProvider>
  );
}
