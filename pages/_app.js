import "../styles/globals.css";
import theme from "../styles/theme";
import * as React from "react";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";

// function ForceLightMode({ children }) {
//   // force light mode b/c of ChakraUI bug
//   const { colorMode, toggleColorMode } = useColorMode();

//   useEffect(() => {
//     if (colorMode === "light") return;
//     toggleColorMode();
//   }, [colorMode]);

//   return children;
// }

const GlobalStyle = ({ children }) => {
  let { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: #fffff;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        {/* <ForceLightMode> */}
        <Component {...pageProps} />
        {/* </ForceLightMode> */}
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
