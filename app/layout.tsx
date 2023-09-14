"use client";

import Head from "next/head";
import "./global.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Zakayá | Sabores do Oriente </title>
      </head>
      <body>
        <ChakraProvider>
          <Flex h="100vh" w="100vw" justify="center">
            {children}
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
