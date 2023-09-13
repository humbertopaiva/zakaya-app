import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Icon,
  Flex,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraCard } from "./Card";
import { BiRightArrowAlt } from "react-icons/bi";

interface IChakraModal {
  isOpen: boolean;
  onClose: () => void;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

import { getMenu } from "../utils/getMenu";

export const ChakraModal = ({ isOpen, onClose }: IChakraModal) => {
  const { combo25, combo50, combo70 } = getMenu();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent px="8px" mx={"8px"}>
        <ModalCloseButton />
        <ModalHeader color={"gray.700"}>
          <Flex align={"center"} fontSize={"lg"}>
            Arraste para o lado <Icon ml="8px" as={BiRightArrowAlt} />
          </Flex>
        </ModalHeader>
        <ModalBody pt={"16px"}>
          <Slider {...sliderSettings}>
            <ChakraCard
              combo={combo25}
              title="Combo de 25 peças"
              price="R$47,90"
              cardImage="https://images.unsplash.com/photo-1590987337605-84f3ed4dc29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
            <ChakraCard
              combo={combo50}
              title="Combo de 50 peças"
              price="R$89,90"
              cardImage="https://www.mirassolconectada.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-06-at-20.36.23-1.jpeg"
            />
            <ChakraCard
              combo={combo70}
              title="Combo de 70 peças"
              price="R$114,90"
              cardImage="https://www.mirassolconectada.com.br/wp-content/uploads/2021/02/WhatsApp-Image-2021-02-06-at-20.36.23-1.jpeg"
            />
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
