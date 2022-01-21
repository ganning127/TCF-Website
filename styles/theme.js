import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        bkg: {
            "light": "#ffffff"
        },
        text: {
            "dark.heading": "#2E2E2E",
            "dark": "#444343"
        },
        red: {
            "shade": "#BA2828",
            "shade.hover": "#8a1e1e"
        },
        orange: {
            "shade": "#F9B508",
            "shade.hover": "#d69d0b"
        },
        turquoise: {
            "shade": "#39A6AD",
            "shade.hover": "#308b91"
        },
        yellow: {
            "shade": "#FFE600"
        },
        blue: {
            "shade": "#4198B4",
            "shade.hover": "#29697d",
            "dark.shade": "#5B6FB4",
            "darkShadeHover": "#49598f"
        },
        green: {
            "shade": "#2AAD4F"
        },
        gray: {
            "shade": "#3C4949",
            "light.shade": "#747474"
        },
    },
    initalColorMode: 'light',
    useSystemColorMode: false
})


export default theme