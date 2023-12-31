import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from "@chakra-ui/react";

interface IChakraModal {
  isOpen: boolean;
  onClose: () => void;
  callback: (value: boolean) => void;
}

export const WelcomeModal = ({ isOpen, onClose, callback }: IChakraModal) => {
  const handleCloseModal = () => {
    callback && callback(false);
    onClose();
  };
  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={handleCloseModal}
      size={"2xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Zakayá | Sabores do Oriente</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image
            src="./welcome-image.jpg"
            alt="salmon illustration"
            w="100%"
            h="300px"
            objectFit={"cover"}
            justifyContent={"center"}
            mb="16px"
          />
          <Text mb="1rem">
            🍣 Olá, amante da comida oriental! Bem-Vindo ao Zakayá! 🎉🍣🥢
          </Text>
          <Text mb="1rem">
            🍱 Estamos começando devagar para garantir a melhor qualidade em
            cada pedido.
          </Text>
          <Text mb="1rem">
            A padronização e organização são prioridade. Agradecemos sua
            compreensão enquanto crescemos e expandimos para atender a todos.
            Faça seu pedido agora e aproveite nossa comida japonesa incrível!
            🎉🍣🥢
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="whatsapp"
            mr={3}
            onClick={handleCloseModal}
            w="100%"
          >
            Fazer pedido
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
