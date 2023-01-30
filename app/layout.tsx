"use client"
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
