import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box,
  Divider,
  AbsoluteCenter,
  Center,
} from '@chakra-ui/react';

function ContactUsButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Hubungi Kami</Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hubungi Kami</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={10}>
            <Center>
              <a
                href="https://api.whatsapp.com/send?phone=628115558803"
                target="_blank"
              >
                <Button>Hubungi Sales</Button>
              </a>
              <Text p={6}>Atau</Text>
              <a
                href="https://api.whatsapp.com/send?phone=6282188864803"
                target="_blank"
              >
                <Button>Hubungi Admin</Button>
              </a>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactUsButton;
