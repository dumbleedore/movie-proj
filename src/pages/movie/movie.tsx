import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";
export const Movie = () => {
  const large = "lg";
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      <Center>
        <Stack>
          <Center>
            <Text fontSize={"4xl"}>{location.state.Title}</Text>
          </Center>
          <Center>
            <Image
              rounded={5}
              alt="Movie Banner"
              w={300}
              src={location.state.Poster}
            ></Image>
          </Center>
          <Text fontSize={large}>{location.state.Year}</Text>
          <Text fontSize={large}>{location.state.Released}</Text>
          <Text fontSize={large}>{location.state.Genre}</Text>
          <Text fontSize={large}>{location.state.Plot}</Text>
        </Stack>
      </Center>
    </div>
  );
};
