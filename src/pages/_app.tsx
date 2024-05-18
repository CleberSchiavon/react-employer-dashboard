import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { fonts } from "../lib/fonts";
export default function App({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme({
    colors: {
      buttons: {
        purpleBackground: "#5932EA",
        purpleHover: "#4f29d5",
      },
    },
  });
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
