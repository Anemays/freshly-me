import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        
    },
    fonts: {},
    fontSizes: {},
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        
        title: ['md', 'lg', 'lg'],
        heading: ['sm', 'md', 'md'],
        button: ['md', 'lg', 'lg'],
        image: ['100px', '200px', '300px'],
    },
    config: {
        useSystemColorMode: true,
        /*initialColorMode: "light",*/
    }
});

export default customTheme;
