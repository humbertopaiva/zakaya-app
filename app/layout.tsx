"use client";

import "./global.css";
import { ChakraProvider, Flex } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
