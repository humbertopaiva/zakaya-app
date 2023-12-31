import {
  Button,
  Card,
  CardBody,
  CardProps,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import { Combo } from "@/types/Combo";

export const ChakraCard = ({
  combo,
  title,
  price,
  cardImage,
  onClose,
}: {
  combo: Combo;
  title: string;
  price: string;
  cardImage: string;
  onClose: () => void;
}) => {
  return (
    <Card maxW="sm" variant={"unstyled"} mb="16px" p="8px" h="100%">
      <CardBody>
        <Image
          src={cardImage}
          alt="Card Image"
          borderRadius="lg"
          w="100%"
          h="200px"
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="lg">{title}</Heading>
          {combo.map((combo: any) => {
            return (
              <>
                <HStack>
                  <Image src={combo.product.image} alt="sushi" w="60px" />{" "}
                  <VStack w="100%" align={"start"} spacing={0}>
                    <Heading as="h4" size={"sm"}>
                      {combo.product.name}
                    </Heading>
                    <Text fontSize={"sm"}>{combo.product.description}</Text>
                  </VStack>
                  <Text
                    minW="30px"
                    fontSize={"sm"}
                    flex={1}
                    justifyContent={"end"}
                  >
                    {combo.amount} x
                  </Text>
                </HStack>
                <Divider />
              </>
            );
          })}

          <HStack justify={"space-between"}>
            <Text color="orange.500" fontSize="2xl" mt="8px">
              {price}
            </Text>
            <Button size={"sm"} colorScheme="whatsapp" onClick={onClose}>
              Fazer pedido
            </Button>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};
