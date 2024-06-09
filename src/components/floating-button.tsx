import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton: React.FC = () => {
  return (
    <Box position="fixed" right={5} bottom={5}>
      <a
        href="https://api.whatsapp.com/send?phone=6285317831333&text=Halo%20kak,%20mau%20tanya-tanya%20tentang%20Anugrah%20Computer"
        target="_blank"
      >
        <Flex
          px="4"
          py="3"
          gap={2}
          color={'green'}
          alignItems={'center'}
          rounded={'lg'}
          w={200}
          justifyContent={'center'}
          fontSize={'lg'}
          fontWeight={'bold'}
          bg="white"
        >
          <Icon as={FaWhatsapp} fontSize={'xl'} />
          <Text>Hubungi Kami </Text>
        </Flex>
      </a>
    </Box>
  );
};

export default FloatingButton;
