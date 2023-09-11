"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Center,
  Checkbox,
  Divider,
  HStack,
  Icon,
  IconButton,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { Image, Box, Text, VStack, Select } from "@chakra-ui/react";
import { spreadsheetsUrls } from "../utils/spreadsheets";
import { fetchSpreadsheetData } from "@/utils/fetchSpreadsheetData";
import { DeliveryData } from "@/types/DeliveryData";
import { handleDeliveryData } from "@/utils/handleDeliveryData";
import { SiWhatsapp, SiFoodpanda, SiInstagram } from "react-icons/si";
import { TbAlertSquareRounded } from "react-icons/tb";
import { RiMotorbikeFill } from "react-icons/ri";

export default function Home() {
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

  const createWhatsappMsg = () => {
    const formattedDay = formatDay(selectedDay);
    const msg =
      selectedTimeRange &&
      `Olá! 😊 Gostaria de fazer uma encomenda para ${formattedDay}, dia ${deliveryData[selectedDay].deliveryDay}, para ser entregue entre ${selectedTimeRange} 🍣`;

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
      console.log("TOTAL", totalOrders);
      setRemainingOrders(totalOrders[0]);

      setIsLoadingData(false);
    } catch (error) {
      console.error("Erro ao buscar dados da planilha:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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

      <VStack>
        <Box w="100%">
          <Image
            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
            alt="Sushi"
            w={"100%"}
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
        <Button
          w={"80%"}
          p="16px"
          h="60px"
          backgroundColor={"gray.800"}
          color={"white"}
          leftIcon={<SiFoodpanda />}
        >
          Ver Cardápio
        </Button>
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
          bgColor={isLocalPickup ? "green.100" : "gray.50"}
          p="16px"
          spacing={4}
        >
          <Checkbox
            size={"lg"}
            justifyContent={"center"}
            defaultChecked
            onChange={() => setIsLocalPickup((e) => !e)}
            colorScheme="green"
            w="60px"
          />
          <VStack justify={"start"} w="100%" align={"flex-start"} spacing={0}>
            <Text fontWeight={"bold"} fontSize={"md"}>
              Retirada no local
            </Text>
            <Text color={"gray.800"} fontSize={"md"} fontWeight={"bold"} mb={2}>
              Sexta, Sábado e Domingo | 19h às 22h30
            </Text>
            <Text color={"gray.600"} fontSize={"sm"}>
              Rua Leonides Moreira Campos, 104, apto 202 - Centro
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              Lima Duarte (MG)
            </Text>
          </VStack>
        </HStack>
        <HStack w="80%" spacing={6}>
          <Icon as={RiMotorbikeFill} color={"gray.600"} w={6} h={6} />
          <Text
            color={"whatsapp.500"}
            fontWeight={"medium"}
            fontSize={"md"}
            align={"start"}
            colorScheme="green"
          >
            Vai de delivey? Desmarque a caixa acima para escolher o dia e a hora
            da sua entrega:
          </Text>
        </HStack>
      </VStack>

      <VStack
        w="80%"
        align={"start"}
        color={isLocalPickup ? "gray.200" : "gray.800"}
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
                onChange={(e) => handleSelectChange(e, setSelectedTimeRange)}
                isDisabled={isLocalPickup}
              >
                {deliveryData[selectedDay].timeRange?.map((range, index) => {
                  if (range) {
                    return (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    );
                  }
                })}
              </Select>
            )}
          </VStack>
        </HStack>

        <Text
          align={"start"}
          fontWeight={"semibold"}
          fontSize={"sm"}
          mt={1}
          color={isLocalPickup ? "gray.200" : "gray.400"}
        >
          Taxa de Entrega: R$5,00
        </Text>
      </VStack>

      <Button
        w="80%"
        p="32px"
        colorScheme="whatsapp"
        onClick={(e) => console.log(createWhatsappMsg())}
        aria-label="Botão de enviar"
        leftIcon={<SiWhatsapp />}
      >
        Fazer encomenda
      </Button>

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
  );
}
