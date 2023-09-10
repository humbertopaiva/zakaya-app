"use client";
import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Radio,
} from "@chakra-ui/react";
import { Image, Box, Text, VStack, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function Home() {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const spreadsheetUrlFriday =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRVQMhT5cRbvDwyyy5xerS8CZ4dhXJHfX9sKC8tuXmBMAHVOhbWq-H-qeVUlKQKG5ejQWxfhPiM2bco/pub?gid=0&single=true&output=csv";

  const spreadsheetUrlSaturday =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-xKQN4MKEO_M9-U3y12qXTdFt_EycLogf0Jkx9r9AKeBf1wTuf4rD9wHdgd2vTrxQObnFseUnrYrG/pub?gid=1982749640&single=true&output=csv";

  const spreadsheetUrlSunday =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcOM5nrwYU-uvx_kLa4tG_Ln9pL7m3NE6EPsrgoTcldNRmTVTUrnruu5lZjYHQoFfoXkWZrZnf2pwB/pub?gid=1611039606&single=true&output=csv";

  useEffect(() => {
    fetch(spreadsheetUrlFriday)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: false,
          complete: (result: any) => {
            console.log(result.data);
          },
          error: (error: any) => {
            console.error("Erro ao analisar oo CSV:", error.message);
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da planilha:", error);
      });

    fetch(spreadsheetUrlSaturday)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: false,
          complete: (result: any) => {
            console.log(result.data);
          },
          error: (error: any) => {
            console.error("Erro ao analisar o CSV:", error.message);
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da planilha:", error);
      });

    fetch(spreadsheetUrlSunday)
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: false,
          complete: (result: any) => {
            console.log(result.data);
          },
          error: (error: any) => {
            console.error("Erro ao analisar o CSV:", error.message);
          },
        });
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da planilha:", error);
      });
  }, []);

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
        {/* Quantidade pedido */}
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

      {/* Faça sua encomenda */}
      <HStack justify={"start"} w={"80%"}>
        <Text minW={"180px"} fontWeight={"bold"}>
          Faça sua encomenda
        </Text>
        <Divider colorScheme="red" />
      </HStack>

      {/* Retirada no Local */}
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
            <Select placeholder="Sex : 19/05/2023" size={"lg"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </VStack>
          <VStack justify={"start"} w="100%" align={"flex-start"}>
            <Text fontWeight={"bold"}>Horário da Entrega</Text>
            <Select placeholder="19h" size={"lg"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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

      <Button w="80%" p="32px" colorScheme="whatsapp">
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
