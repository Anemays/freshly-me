import Settings from '../../components/settings'
import CardHighlight from '../../components/layout/cardHighlight'

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
} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSearch, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )
    const popularItem = {
        imageLink: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        imageAlt: 'Kopi',
        name: 'Kopi',
        description: 'Secangkir kopi',
        price: 12000,
        rating: 4,
        reviewCount: 10,
        amount: 1,
    }
    const recommendedItem = {
        imageLink: 'https://via.placeholder.com/150',
        imageAlt: 'Nama',
        name: 'Nama',
        description: 'Deskripsi',
        price: 25000,
        rating: 5,
        reviewCount: 100,
        amount: 1,
    }
    
    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size={Settings.sizes.title}>
                    FreshlyMe
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
        </>
    )
}
