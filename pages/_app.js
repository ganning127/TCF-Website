import '../styles/globals.css'
import theme from '../styles/theme'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import { useColorMode, ColorModeProvider, ColorModeScript } from '@chakra-ui/react'

const GlobalStyle = ({ children }) => {
  let { colorMode } = useColorMode()
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
            background: #fafafa;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp
