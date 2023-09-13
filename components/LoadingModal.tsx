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
}

export const LoadingModal = ({ isOpen, onClose }: IChakraModal) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
        blockScrollOnMount={true}
      >
        <ModalOverlay />
        <ModalContent bgColor={"gray.900"}>
          <ModalBody>Carregando</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
