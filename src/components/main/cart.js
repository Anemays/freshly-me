import Settings from '../../components/settings'
import { Products } from '../../data/data'

import { Box, Button, Card, CardBody, CardHeader, Heading, HStack, IconButton, Image, Spacer, Stack, StackDivider, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Details() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )
    const orders = [
        Products[0],
        Products[1],
        Products[1],
        Products[1],
        Products[1],
    ]

    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size='md'>Pesanan Anda</Heading>
                <Spacer />
                <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>
            <Card variant='outline'>
                <CardBody>
                    <VStack divider={<StackDivider />} spacing='4' align='left'>
                        {
                            orders.map((item, index) => {
                                return (
                                    <Box>
                                        <HStack>
                                            <Heading size='xs' textTransform='uppercase'>
                                                {item.name}
                                            </Heading>
                                            <Spacer />
                                            <Text>
                                                <Text as='span' color='orange'>Rp{item.price.toLocaleString('id-ID')}</Text>,00
                                            </Text>
                                        </HStack>
                                        <HStack align='top'>
                                            <Text pt='2' fontSize='sm' noOfLines={2}>
                                                {item.description} aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                            </Text>
                                            <Spacer />
                                            <Box>
                                                <Text color='yellow'>
                                                    x{item.amount}
                                                </Text>
                                            </Box>
                                        </HStack>
                                    </Box>
                                )
                            })
                        }
                        <Box>
                            Total: <Text as='span' color='orange'>Rp{(150000).toLocaleString('id-ID')}</Text>,00
                        </Box>
                    </VStack>
                </CardBody>
            </Card>
            <Spacer />
            <Button position='fixed'
                bottom='80px'
                right='16px'
                zIndex={2}
                size='lg'
                colorScheme='green'
            >
                Selesai Pesan
            </Button>
        </>
    )
}
