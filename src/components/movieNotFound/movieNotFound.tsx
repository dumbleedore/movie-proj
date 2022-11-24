import { Center, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const MovieNotFound = () => {
  return (
    <>
      <Center>
        <Stack>
          <Image
            alt="error"
            data-testid="error-icon"
            src="/page-not-found.svg"
          ></Image>
          <Text fontSize={"xl"}>Movie Not Found</Text>
        </Stack>
      </Center>
    </>
  );
};
