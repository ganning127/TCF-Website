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
            "shade": "#BA2828"
        },
        orange: {
            "shade": "#F9B508"
        },
        yellow: {
            "shade": "#FFE600"
        },
        blue: {
            "shade": "#4198B4",
            "shade.hover": "#29697d",
            "darkShade": "#5B6FB4"
        },
        green: {
            "shade": "#2AAD4F"
        },
        gray: {
            "shade": "#3C4949"
        },
    },
    initalColorMode: 'light',
    useSystemColorMode: false
})


export default theme