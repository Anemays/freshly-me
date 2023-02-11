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
    const orders = Products
    const totalPrice = orders.reduce((total, item) => {
        return total + item.price
    }, 0)

    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size='md'>Pesanan Anda</Heading>
                <Spacer />
    usecolormodeval            <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>
            <Box align='center'>
                <Card variant='outline' w={['100%', '75%', '50%']}>
                    <CardBody align='left' justifyContent>
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
                                                    {item.description}
                                                </Text>
                                                <Spacer />
                                                <Box>
                                                    <Text color={useColorModeValue('yellow.500', 'yellow')}>
                                                        x{item.amount}
                                                    </Text>
                                                </Box>
                                            </HStack>
                                        </Box>
                                    )
                                })
                            }
                            <Box>
                                Total: <Text as='span' color='orange'>Rp{totalPrice.toLocaleString('id-ID')}</Text>,00
                            </Box>
                        </VStack>
                    </CardBody>
                </Card>
            </Box>
            <Button position='fixed'
                bottom='80px'
                right='16px'
                zIndex={2}
                size={Settings.sizes.button}
                colorScheme='green'
            >
                Selesai Pesan
            </Button>
        </>
    )
}
