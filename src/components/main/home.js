import Settings from '../../components/settings'

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
    
    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size={Settings.sizes.title}>
                    Freshly Me
                </Heading>
                <Spacer />
                <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>
            <Box mb={Settings.margin}>
                <Heading fontWeight='normal' size={Settings.sizes.extra} mb={Settings.margin}>
                    Pilih Jus Favorit Anda
                </Heading>
                <Flex mb={Settings.margin}>
                    <InputGroup size={Settings.sizes.extra}>
                        <Input placeholder='Cari Jus Favorit Anda' p='4px' pl='8px' />
                        <InputRightAddon children={
                            <IconButton variant="link" colorScheme='transparent' size={Settings.sizes.button} icon={
                                <FontAwesomeIcon icon={faSearch} />
                            } />
                        } />
                    </InputGroup>
                </Flex>
                <HStack>
                    <Button colorScheme='red' size={Settings.sizes.button}>
                        Apel
                    </Button>
                    <Button colorScheme='orange' size={Settings.sizes.button}>
                        Mangga
                    </Button>
                    <Button colorScheme='purple' size={Settings.sizes.button}>
                        Anggur
                    </Button>
                    <Button colorScheme='green' size={Settings.sizes.button}>
                        Alpukat
                    </Button>
                    <Button colorScheme='yellow' size={Settings.sizes.button}>
                        Jeruk
                    </Button>
                </HStack>
            </Box>

            {/* Juice Banner */}
            <Heading fontWeight='normal' size={Settings.sizes.large} mt='24px' mb={Settings.margin}>
                Populer
            </Heading>
            <Center>
                <Image src='#' fallbackSrc='https://via.placeholder.com/320' />
            </Center>

            {/* Juice Banner */}
            <Heading fontWeight='normal' size={Settings.sizes.large} mt='24px' mb={Settings.margin}>
                Rekomendasi
            </Heading>
            <Center>
                <HStack spacing='12px' overflow>
                    <Image src='#' fallbackSrc='https://via.placeholder.com/220' />
                </HStack>
            </Center>
        </>
    )
}
