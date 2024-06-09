'use client';
import React from 'react';
import { Heading, Flex, Icon, Text, Center, As } from '@chakra-ui/react';
import { FaFighterJet, FaKey, FaShieldAlt } from 'react-icons/fa';

const Item = ({ icon, label }: { icon: As; label: string }) => (
  <Flex flex={1} flexDirection={'column'} gap={4} alignItems={'center'}>
    <Icon
      bg="linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      as={icon}
      w={100}
      h={100}
      p={6}
      color="white"
      rounded={'lg'}
    />
    <Text
      textAlign={'center'}
      maxW={'200px'}
      fontWeight={'bold'}
      fontSize={'2xl'}
      color={'brand.500'}
    >
      {label}
    </Text>
  </Flex>
);

const datacontent = [
  {
    icon: FaFighterJet,
    label: 'Cepat',
  },
  {
    icon: FaKey,
    label: 'Tepat',
  },
  {
    icon: FaShieldAlt,
    label: 'Bertanggung Jawab',
  },
];

const WhyUs: React.FC = () => {
  return (
    <Center flexDirection={'column'} my={100}>
      <Heading
        textAlign={'center'}
        mb={12}
        as="h1"
        size="2xl"
        color={'brand.500'}
      >
        Kenapa Harus Kami ?
      </Heading>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: 10, md: 100 }}
      >
        {datacontent.map((item, index) => (
          <Item key={index} icon={item.icon} label={item.label} />
        ))}
      </Flex>
    </Center>
  );
};

export default WhyUs;
