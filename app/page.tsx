"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Center,
  Checkbox,
  Divider,
  HStack,
  Highlight,
  Icon,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { Image, Box, Text, VStack, Select } from "@chakra-ui/react";
import { spreadsheetsUrls } from "../utils/spreadsheets";
import { fetchSpreadsheetData } from "@/utils/fetchSpreadsheetData";
import { DeliveryData } from "@/types/DeliveryData";
import { handleDeliveryData } from "@/utils/handleDeliveryData";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { TbAlertSquareRounded } from "react-icons/tb";
import { RiMotorbikeFill } from "react-icons/ri";
import { ChakraModal } from "@/components/Modal";
import { WelcomeModal } from "@/components/WelcomeModal";

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [remainingOrders, setRemainingOrders] = useState<string>("");
  const [isLocalPickup, setIsLocalPickup] = useState<boolean>(true);
  const [selectedDay, setSelectedDay] = useState<string>("friday");
  const [selectedTimeRange, setSelectedTimeRange] = useState<
    string | [string, string]
  >("");
  const [deliveryData, setDeliveryData] = useState<{
    [key: string]: DeliveryData;
  }>({
    friday: { deliveryDay: "", timeRange: [] },
    saturday: { deliveryDay: "", timeRange: [] },
    sunday: { deliveryDay: "", timeRange: [] },
  });

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    callback: any
  ) => {
    callback(event.target.value);
  };

  const formatDay = (day: string) => {
    switch (day) {
      case "friday":
        return "Sexta";
      case "saturday":
        return "Sábado";
      case "sunday":
        return "Domingo";
      default:
        return "";
    }
  };

  const sendWhatsappMsg = () => {
    const formattedDay = formatDay(selectedDay);
    const msg =
      selectedTimeRange &&
      `Olá!%20Gostaria%20de%20agendar%20uma%20encomenda%20para%20*${formattedDay}*%20*${deliveryData[selectedDay].deliveryDay}*%20|%20*${selectedTimeRange}*`;

    const whatsappLink = `https://wa.me/5532999208896?text=${msg}`;

    if (selectedTimeRange !== "") {
      window.open(whatsappLink, "_blank");
    } else {
      window.open("https://wa.me/5532999208896");
    }
  };

  const fetchData = async () => {
    try {
      const dataFriday = await fetchSpreadsheetData(spreadsheetsUrls.friday);
      handleDeliveryData(dataFriday, "friday", setDeliveryData);

      const dataSaturday = await fetchSpreadsheetData(
        spreadsheetsUrls.saturday
      );
      handleDeliveryData(dataSaturday, "saturday", setDeliveryData);

      const dataSunday = await fetchSpreadsheetData(spreadsheetsUrls.sunday);
      handleDeliveryData(dataSunday, "sunday", setDeliveryData);

      const remainingOrdersSpreadsheetData = await fetchSpreadsheetData(
        spreadsheetsUrls.remainingOrders
      );

      const totalOrders = remainingOrdersSpreadsheetData[1];
      setRemainingOrders(totalOrders[0]);

      setIsLoadingData(false);
    } catch (error) {
      console.error("Erro ao buscar dados da planilha:", error);
    }
  };

  const handleCloseMenu = () => {
    setIsOpenMenu(false);
    onClose();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLocalPickup) {
      setSelectedTimeRange(deliveryData["friday"].timeRange[0]);
    } else {
      setSelectedTimeRange("");
    }
  }, [isLocalPickup]);

  return (
    <>
      {isLoadingData && (
        <Center
          bgColor={"gray.900"}
          minW="100vw"
          minH="100vh"
          w="100%"
          h="100%"
          position={"relative"}
        >
          <Spinner color="red.500" w="120px" h="120px" position={"absolute"} />
          <Image
            src="./zaka_simbolo.svg"
            w="100px"
            h="100px"
            alt="logo zakaya"
          />
          <Text position={"absolute"} color={"gray.400"} mt="180px">
            Carregando agendador...
          </Text>
        </Center>
      )}

      {isOpenMenu && (
        <Modal
          isOpen={isOpenMenu}
          onClose={handleCloseMenu}
          size={"full"}
          allowPinchZoom
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody w="100%">
              <Center>
                <VStack>
                  <Image alt="cardápio" src="./cardapio-zaka.jpg" w="100%" />
                  <Button colorScheme="whatsapp" onClick={handleCloseMenu}>
                    Fazer Pedido
                  </Button>
                </VStack>
              </Center>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      {isWelcomeModalOpen && !isLoadingData && (
        <WelcomeModal
          isOpen={isWelcomeModalOpen}
          onClose={onClose}
          callback={setIsWelcomeModalOpen}
        />
      )}
      {!isLoadingData && (
        <VStack
          maxW="600"
          w="100%"
          minH="100vh"
          justify={"start"}
          align={"center"}
          mt={8}
          spacing={8}
        >
          <Box w="200px">
            <Image src="./logo.png" alt="Logo" />
          </Box>

          <Text
            as={"span"}
            fontWeight={"bold"}
            fontSize={"lg"}
            color={"red.500"}
          >
            Pedidos até as 18h
          </Text>

          <VStack w="100%">
            <Box w="100%">
              <Image
                src="./foto-site.jpg"
                alt="Sushi"
                w={"100%"}
                h="200px"
                objectFit={"cover"}
              />
            </Box>

            <HStack
              bgColor={"red.500"}
              w="80%"
              justify={"center"}
              p={"16px"}
              mt="-40px"
              h="60px"
              borderRadius={6}
            >
              <Box>
                <Text fontWeight={"bold"} color={"gray.100"}>
                  Quantidade restante de pedidos
                </Text>
              </Box>
              <Divider orientation="vertical" />
              <Box fontWeight={"bold"} color={"gray.100"}>
                {isLoadingData ? <Spinner /> : remainingOrders}
              </Box>
            </HStack>
            <HStack w="80%">
              <Button
                w={"80%"}
                p="16px"
                h="60px"
                backgroundColor={"gray.800"}
                color={"white"}
                onClick={onOpen}
              >
                Combos
              </Button>
              <Button
                w={"80%"}
                p="16px"
                h="60px"
                color={"gray.800"}
                onClick={() => setIsOpenMenu(true)}
                variant={"outline"}
                colorScheme="red"
              >
                Cardápio
              </Button>
            </HStack>
          </VStack>

          <HStack justify={"start"} w={"80%"}>
            <Text minW={"180px"} fontWeight={"bold"}>
              Faça sua encomenda
            </Text>
            <Divider colorScheme="red" />
          </HStack>

          <VStack w="100%">
            <HStack
              justify={"start"}
              w="80%"
              bgColor={isLocalPickup ? "green.50" : "gray.50"}
              p="16px"
              spacing={4}
              border={"2px"}
              borderColor={isLocalPickup ? "green.200" : "gray.100"}
            >
              <Checkbox
                size={"lg"}
                justifyContent={"center"}
                defaultChecked
                onChange={() => setIsLocalPickup((e) => !e)}
                colorScheme="green"
                w="60px"
              />
              <VStack
                justify={"start"}
                w="100%"
                align={"flex-start"}
                spacing={0}
              >
                <Text fontWeight={"bold"} fontSize={"md"}>
                  Retirada no local
                </Text>
                <Text
                  color={"gray.800"}
                  fontSize={"md"}
                  fontWeight={"bold"}
                  mb={2}
                >
                  Sexta, Sábado e Domingo | 19h às 22h30
                </Text>
                <Text color={"gray.600"} fontSize={"sm"}>
                  Rua Leonides Moreira Campos, 104, apto 202 - Centro
                </Text>
                <Text color={"gray.600"} fontSize={"sm"}>
                  Lima Duarte (MG)
                </Text>
              </VStack>
            </HStack>
            <HStack w="80%" spacing={2} mt={2}>
              <Icon as={RiMotorbikeFill} color={"gray.600"} w={8} h={8} />
              <Text fontWeight={"bold"} fontSize={"md"} align={"start"}>
                Vai de delivey? Desmarque a caixa acima para escolher a Data e a
                Hora da sua entrega:
              </Text>
            </HStack>
          </VStack>

          <VStack
            w="80%"
            align={"start"}
            color={isLocalPickup ? "gray.100" : "gray.800"}
          >
            <HStack justify={"start"} w="100%">
              <VStack justify={"start"} w="100%" align={"flex-start"}>
                <Text fontWeight={"bold"}>Data da Entrega</Text>
                {deliveryData.friday && (
                  <>
                    <Select
                      size={"lg"}
                      onChange={(e) => handleSelectChange(e, setSelectedDay)}
                      isDisabled={isLocalPickup}
                    >
                      <option value="friday">{`Sex : ${deliveryData.friday.deliveryDay}`}</option>
                      <option value="saturday">{`Sáb : ${deliveryData.saturday.deliveryDay}`}</option>
                      <option value="sunday">{`Dom : ${deliveryData.sunday.deliveryDay}`}</option>
                    </Select>
                  </>
                )}
              </VStack>

              <VStack justify={"start"} w="100%" align={"flex-start"}>
                <Text fontWeight={"bold"}>Horário da Entrega</Text>
                {selectedDay && deliveryData[selectedDay] && (
                  <Select
                    size={"lg"}
                    onChange={(e) =>
                      handleSelectChange(e, setSelectedTimeRange)
                    }
                    isDisabled={isLocalPickup}
                  >
                    {deliveryData[selectedDay].timeRange?.map(
                      (range, index) => {
                        if (range) {
                          return (
                            <option key={index} value={range}>
                              {range}
                            </option>
                          );
                        }
                      }
                    )}
                  </Select>
                )}
              </VStack>
            </HStack>

            <Text
              align={"start"}
              fontWeight={"semibold"}
              fontSize={"sm"}
              mt={1}
              color={isLocalPickup ? "gray.200" : "gray.600"}
            >
              Taxa de Entrega: R$5,00
            </Text>
          </VStack>

          {remainingOrders === "0" ? (
            <Button
              w="80%"
              p="32px"
              color={"red.900"}
              bgColor={"red.200"}
              isDisabled={true}
              aria-label="Botão de enviar"
              leftIcon={<SiWhatsapp />}
            >
              Pedidos esgotados
            </Button>
          ) : (
            <Button
              w="80%"
              p="32px"
              colorScheme="whatsapp"
              onClick={sendWhatsappMsg}
              aria-label="Pedidos esgotados"
              leftIcon={<SiWhatsapp />}
            >
              Fazer encomenda
            </Button>
          )}

          <HStack w="80%" justify={"center"} mb={"16px"}>
            <Icon as={TbAlertSquareRounded} />
            <Text fontSize={"sm"}>
              Pode haver uma variação de até 20 minutos no horário de entrega.
            </Text>
          </HStack>
          <Box w="100%" color={"gray.800"}>
            <Center>
              <VStack align={"center"} justify={"center"}>
                <Icon as={SiInstagram} />
                <Link
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  mb={8}
                  href="https://instagram.com/zakaya.oriental"
                  isExternal
                >
                  zakaya.oriental
                </Link>
              </VStack>
            </Center>
          </Box>
        </VStack>
      )}
      {!isWelcomeModalOpen && !isLoadingData && (
        <ChakraModal isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
}
