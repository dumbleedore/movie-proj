import { Center, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
export const Movie = () => {
  const large = "lg";
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.wrapper}>
      <IconButton
        onClick={handleClick}
        m={6}
        w={6}
        colorScheme="blue"
        aria-label="Search database"
        icon={<ArrowBackIcon />}
      />
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
