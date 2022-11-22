import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import styles from "./index.module.css";
import { useColorMode } from "@chakra-ui/react";
export const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return colorMode == "light" ? (
    <MoonIcon
      data-testid="moon"
      className={styles.darkModeEnabler}
      onClick={() => toggleColorMode()}
      boxSize={8}
    />
  ) : (
    <SunIcon
      data-testid="sun"
      className={styles.darkModeEnabler}
      onClick={() => toggleColorMode()}
      boxSize={8}
    />
  );
};
