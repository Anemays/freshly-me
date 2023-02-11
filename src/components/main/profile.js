import Settings from '../../components/settings'

import { Grid, GridItem, Heading, HStack, IconButton, Spacer, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Profile() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )

    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size={Settings.sizes.title}>
                    Tentang Saya
                </Heading>
                <Spacer />
                <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>
            <Grid
                h='200px'
                templateRows='repeat(3, 12px)'
                templateColumns='repeat(10, 1fr)'
                gap={4}
            >
                <GridItem colSpan={3}>
                    Nama
                </GridItem>
                <GridItem colSpan={7}>
                    : Raka Bintang Pratama
                </GridItem>
                <GridItem colSpan={3}>
                    NIM
                </GridItem>
                <GridItem colSpan={7}>
                    : 10122301
                </GridItem>
                <GridItem colSpan={3}>
                    Kelas
                </GridItem>
                <GridItem colSpan={7}>
                    : IF-8
                </GridItem>
            </Grid>
        </>
    )
}
