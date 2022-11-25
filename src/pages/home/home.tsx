import styles from "./index.module.css";
import {
  Text,
  Box,
  Center,
  Flex,
  Image,
  HStack,
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
} from "@chakra-ui/react";
import { DarkMode } from "../../components/darkMode/darkMode";
import { Search } from "../../components/search/search";
export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <div className={styles.wrapper}>
          <header>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Image
                  className={styles.unselectable}
                  objectFit="cover"
                  boxSize={"200px"}
                  src="../../../public/popcorn.png"
                ></Image>
                <HStack>
                  <Center>
                    <DarkMode />
                    <Text
                      p={2}
                      m={2}
                      className={`${styles.title} ${styles.unselectable}`}
                      fontSize={"6xl"}
                    >
                      Movietify
                    </Text>
                  </Center>
                </HStack>
              </Flex>
            </Box>
          </header>
          <main>
            <Search />
          </main>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
