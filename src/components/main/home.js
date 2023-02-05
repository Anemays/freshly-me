import {
    InputGroup,
    Input,
    InputRightAddon,
    Box,
    Flex,
    Heading,
    Button,
    HStack,
    useColorMode,
    Spacer,
    useColorModeValue,
    IconButton,
    Image,
    Center,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )
    const sizes = {
        title: ['md', 'lg', 'lg'],
        heading: ['sm', 'md', 'md'],
        button: ['md', 'lg', 'lg'],
    }
    const margin = ['12px', '16px', '16px']
    
    return (
        <>
            <HStack mb={margin}>
                <Heading size={sizes.title}>
                    Freshly Me
                </Heading>
                <Spacer></Spacer>
                <IconButton variant="ghost" size={sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>
            <Box mb={margin}>
                <Heading size={sizes.heading} mb={margin}>
                    Choose Your Favorite Juice
                </Heading>
                <Flex mb={margin}>
                    <InputGroup size={sizes.heading}>
                        <Input placeholder='Search Your Favorite Juice' />
                        <InputRightAddon children={
                            <IconButton variant="link" colorScheme='transparent' size={sizes.button} icon={
                                <FontAwesomeIcon icon={faSearch} />
                            } />
                        } />
                    </InputGroup>
                </Flex>
                <HStack>
                    <IconButton colorScheme='red' size={sizes.button} icon={
                        'Apple'
                    } />
                    <IconButton colorScheme='orange' size={sizes.button} icon={
                        'Mango'
                    } />
                    <IconButton colorScheme='purple' size={sizes.button} icon={
                        'Grape'
                    } />
                    <IconButton colorScheme='green' size={sizes.button} icon={
                        'Avocado'
                    } />
                </HStack>
            </Box>
            {/* Juice Banner */}
            <Center>
                <Image src='#' fallbackSrc='https://via.placeholder.com/320' />
            </Center>
        </>
    )
}
