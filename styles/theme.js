import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        bkg: {
            "light": "#ffffff",
            "dark": "#1A202C"
        },
        text: {
            "dark.heading": "#2E2E2E",
            "light.heading": "#ffffff",
            "dark": "#444343",
            "light": "#ebebeb"
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
            "shade": "#2AAD4F",
            "shade.hover": "#1f7e39"
        },
        gray: {
            "shade": "#3C4949",
            "light.shade": "#747474"
        },
        shadow: {
            "light": "lg",
            "dark": "dark-lg"
        }
    },
    initalColorMode: 'light',
    useSystemColorMode: false
})


export default theme