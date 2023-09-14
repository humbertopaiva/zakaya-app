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
  adaptiveHeight: true,
};

import { getMenu } from "../utils/getMenu";

export const ChakraModal = ({ isOpen, onClose }: IChakraModal) => {
  const { combo25, combo50, combo70 } = getMenu();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bgColor={"gray.100"} />
      <ModalContent px="8px" mx={"8px"} w="100%">
        <ModalCloseButton />
        <ModalHeader color={"gray.700"}>
          <Flex align={"center"} fontSize={"lg"}>
            Arraste para o lado <Icon ml="8px" as={BiRightArrowAlt} />
          </Flex>
        </ModalHeader>
        <ModalBody pt={"16px"} w="100%">
          <Slider {...sliderSettings}>
            <ChakraCard
              combo={combo25}
              title="Combo de 25 peças"
              price="R$47,90"
              cardImage="./combo-25.jpg"
              onClose={onClose}
            />
            <ChakraCard
              combo={combo50}
              title="Combo de 50 peças"
              price="R$89,90"
              cardImage="./combo-50.png"
              onClose={onClose}
            />
            <ChakraCard
              combo={combo70}
              title="Combo de 70 peças"
              price="R$114,90"
              cardImage="./combo-70.png"
              onClose={onClose}
            />
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
