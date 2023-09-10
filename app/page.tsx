"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button, Checkbox, Divider, HStack, Icon } from "@chakra-ui/react";
import { Image, Box, Text, VStack, Select } from "@chakra-ui/react";
import { spreadsheetsUrls } from "../utils/spreadsheets";
import { fetchSpreadsheetData } from "@/utils/fetchSpreadsheetData";
import { DeliveryData } from "@/types/DeliveryData";
import { handleDeliveryData } from "@/utils/handleDeliveryData";

export default function Home() {
  const [isLocalPickup, setIsLocalPickup] = useState<boolean>(true);
  const [selectedDay, setSelectedDay] = useState<string>("friday");
  const [selectedTimeRage, setSelectedTimeRange] = useState<
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
    const msg = `Olá! Gostaria de fazer uma encomenda para ${formattedDay}, dia ${deliveryData[selectedDay].deliveryDay}, para ser entregue entre ${selectedTimeRage}`;

    const whatsappLink = `https://wa.me/5532999208896?text=${msg}`;

    if (selectedTimeRage !== "") {
      window.open(whatsappLink, "_blank");
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
    } catch (error) {
      console.error("Erro ao buscar dados da planilha:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (deliveryData["friday"]) {
      setSelectedTimeRange(deliveryData["friday"]?.timeRange[0]);
    }
  }, [deliveryData]);

  return (
    <VStack
      maxW="600"
      w="100%"
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
            18
          </Box>
        </HStack>
        <Button
          w={"80%"}
          p="16px"
          h="60px"
          backgroundColor={"gray.800"}
          color={"white"}
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

      <HStack justify={"start"} w="80%">
        <Checkbox w="80px" h="80px" size={"lg"} />
        <VStack justify={"start"} w="100%" align={"flex-start"} spacing={0}>
          <Text fontWeight={"bold"}>Retirada no local</Text>
          <Text color={"gray.500"} fontSize={"sm"}>
            Rua Leonides Moreira Campos, 104, apto 202 - Centro
          </Text>
          <Text color={"gray.500"} fontSize={"sm"}>
            Lima Duarte (MG)
          </Text>
        </VStack>
      </HStack>

      <VStack w="80%" align={"start"}>
        <HStack justify={"start"} w="100%">
          <VStack justify={"start"} w="100%" align={"flex-start"}>
            <Text fontWeight={"bold"}>Data da Entrega</Text>
            {deliveryData.friday && (
              <>
                <Select
                  size={"lg"}
                  onChange={(e) => handleSelectChange(e, setSelectedDay)}
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
          color={"gray.400"}
          mt={1}
        >
          Taxa de Entrega: R$5,00
        </Text>
      </VStack>

      <Button
        w="80%"
        p="32px"
        colorScheme="whatsapp"
        onClick={(e) => console.log(createWhatsappMsg())}
      >
        Fazer encomenda
      </Button>

      <HStack w="80%" justify={"center"} mb={"16px"}>
        <Icon></Icon>
        <Text fontSize={"sm"}>
          Pode haver uma variação de até 20 minutos no horário de entrega.
        </Text>
      </HStack>
      <Box bgColor={"gray.300"} w="100%">
        Instagram
      </Box>
    </VStack>
  );
}
