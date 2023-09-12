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
import { SiInstagram } from "react-icons/si";

interface IChakraModal {
  isOpen: boolean;
  onClose: () => void;
  callback: (value: boolean) => void;
}

export const SoldOutModal = ({ isOpen, onClose, callback }: IChakraModal) => {
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
            src="https://as2.ftcdn.net/v2/jpg/01/38/75/49/1000_F_138754952_9dEdpio2A7KfFFAAFw59Ies3cN3UfBSe.jpg"
            alt="salmon illustration"
            w="100%"
            h="300px"
            objectFit={"cover"}
            mb="16px"
          />
          <Text mb="1rem">🍣 Pedidos esgotados! 🎉🍣🥢</Text>
          <Text mb="1rem">
            🍱 Estamos começando devagar para garantir a melhor qualidade em
            cada pedido. Somos apaixonados pelo que fazemos e escolhemos
            cuidadosamente ingredientes frescos e muito saborosos para que você
            tenha uma ótima experiência.
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
            leftIcon={SiInstagram}
          >
            zakaya.oriental
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
