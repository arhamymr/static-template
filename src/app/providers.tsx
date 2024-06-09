'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import modifyComponent from '@/styles/component';
import '@fontsource-variable/plus-jakarta-sans';
import FloatingButton from '@/components/floating-button';

const theme = extendTheme({
  colors: {
    brand: {
      '100': '#BFBFBF',
      '200': '#A6A6A6',
      '300': '#8C8C8C',
      '400': '#737373',
      '500': '#595959',
      '600': '#404040',
      '700': '#262626',
      '800': '#0D0D0D',
      '900': '#000000',
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
      <FloatingButton />
    </ChakraProvider>
  );
}
