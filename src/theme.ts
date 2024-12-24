import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    green: {
      50: "#ebf7eb",
      100: "#cce6cc",
      200: "#acd3ac",
      300: "#8bc38b",
      400: "#6ab26a",
      500: "#529851",
      600: "#3f763f",
      700: "#2d552d",
      800: "#1a331a",
      900: "#051205",
    },
  },
});

export default theme;