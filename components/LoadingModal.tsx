import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface IChakraModal {
  isOpen: boolean;
  onClose: () => void;
  callback: (value: boolean) => void;
}

export const LoadingModal = ({ isOpen, onClose, callback }: IChakraModal) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent bgColor={"gray.900"}>
          <ModalBody>Carregando</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
