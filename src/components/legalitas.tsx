import { Box, Flex, Divider, Heading, Text, Spacer } from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

const datadocument = [
  {
    name: 'PERIZINAN BERUSAHA BERBASIS RISIKO',
    src: '/assets/legalitas/Legalitas1.png',
  },
  {
    name: 'PERIZINAN PERUSAHAAN BERBASIS RISIKO',
    src: '/assets/legalitas/Legalitas2.png',
  },
  {
    name: 'NOTARIS KABUPATEN SIDENRENG RAPPANG',
    src: '/assets/legalitas/Legalitas3.png',
  },
  {
    name: 'SURAT KETERANGAN TERDAFTAR',
    src: '/assets/legalitas/Legalitas4.png',
  },
];

const DownloadItem = ({ name, src }: { name: string; src: string }) => {
  return (
    <>
      <Flex gap={2} alignItems={'center'} id="legalitas">
        <Text>{name}</Text>
        <Spacer />
        <a target="_blank" href={src}>
          <Flex
            px="2"
            py="1"
            gap={2}
            color={'white'}
            alignItems={'center'}
            rounded={'lg'}
            justifyContent={'center'}
            bg="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          >
            <FaDownload />

            <Text>Download </Text>
          </Flex>
        </a>
      </Flex>
      <Divider />
    </>
  );
};

const Legalitas = () => {
  return (
    <Box my={100}>
      <Heading as="h2" size="2xl" color={'brand.500'} mb={12}>
        Legalitas
      </Heading>

      <Flex gap={4} flexDirection={'column'}>
        {datadocument.map((document, index) => (
          <DownloadItem key={index} src={document.src} name={document.name} />
        ))}
      </Flex>
    </Box>
  );
};
export default Legalitas;
