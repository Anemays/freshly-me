import Settings from '../../components/settings'
import CardHighlight from '../../components/layout/cardHighlight'
import { Products } from '../../data/data'

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
    Card,
    CardBody,
    Stack,
    Divider,
    CardFooter,
    ButtonGroup,
    Text,
    VStack,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )
    const popularItem = Products[4]
    const recommendedItem = Products[8]
    
    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size={Settings.sizes.title}>
                    FreshlyMe
                </Heading>
                <Spacer />
                <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>
            <Box align='center'>
                <Box mb={Settings.margin} align='left' w={['100%', '75%', '50%']}>
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
                    <VStack maxW='100%'>
                        <HStack maxW='100%'>
                            <Button colorScheme='red' size={Settings.sizes.button}>
                                Apel
                            </Button>
                            <Button colorScheme='yellow' size={Settings.sizes.button}>
                                Jeruk
                            </Button>
                            <Button colorScheme='whatsapp' size={Settings.sizes.button}>
                                Mentimun
                            </Button>
                            <Button colorScheme='red' size={Settings.sizes.button}>
                                Jambu
                            </Button>
                            <Button colorScheme='pink' size={Settings.sizes.button}>
                                Stroberi
                            </Button>
                        </HStack>
                        <HStack maxW='100%'>
                            <Button colorScheme='orange' size={Settings.sizes.button}>
                                Wortel
                            </Button>
                            <Button colorScheme='red' size={Settings.sizes.button}>
                                Tomat
                            </Button>
                            <Button colorScheme='orange' size={Settings.sizes.button}>
                                Mangga
                            </Button>
                            <Button colorScheme='green' size={Settings.sizes.button}>
                                Alpukat
                            </Button>
                            <Button colorScheme='facebook' size={Settings.sizes.button}>
                                Sirsak
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Box>

            <Box align='center'>
                <Box align='left' w={['100%', '75%', '50%']}>
                    {/* Juice Banner */}
                    <Heading fontWeight='normal' size={Settings.sizes.large} mt='24px' mb={Settings.margin}>
                        Populer
                    </Heading>
                    <Center>
                        {/*<Image src='#' fallbackSrc='https://via.placeholder.com/320' />*/}
                        <CardHighlight item={popularItem} />
                    </Center>

                    {/* Juice Banner */}
                    <Heading fontWeight='normal' size={Settings.sizes.large} mt='24px' mb={Settings.margin}>
                        Rekomendasi
                    </Heading>
                    <Center>
                        <CardHighlight item={recommendedItem} />
                    </Center>
                </Box>
            </Box>
        </>
    )
}
