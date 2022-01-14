import { extendTheme } from "@chakra-ui/react"

const config = {
    colors: {
        bkg: {
            "light": "#ffffff"
        },
        text: {
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
            "darkShade": "#5B6FB4"
        },
        green: {
            "shade": "#2AAD4F"
        },
        gray: {
            "shade": "#3C4949"
        }

    },
    initalColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({ config })


export default theme