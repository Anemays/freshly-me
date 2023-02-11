import CardProduct from '../layout/cardProduct'
import Settings from '../../components/settings'
import { Products } from '../../data/data'

import { Box, Button, Card, CardBody, CardFooter, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Stack, Text, useColorMode, useColorModeValue, useDisclosure, VStack } from "@chakra-ui/react"
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'
import { StarIcon } from '@chakra-ui/icons'


export default function Catalog() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedItem, setSelectedItem] = useState(-1)
    const [selectedAmount, setSelectedAmount] = useState(1)
    const [isSearchHidden, setSearchHidden] = useState(true)

    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size={Settings.sizes.title}>
                    Cari Jus
                </Heading>
                <Spacer />
                <Input placeholder='Cari...' w={['40%', '50%', '6   0%']} hidden={isSearchHidden}/>
                <IconButton variant="link" colorScheme='transparent' size={Settings.sizes.button} icon={
                    <FontAwesomeIcon icon={faSearch} />
                } onClick={(e) => setSearchHidden(!isSearchHidden)} />
                <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>

            <VStack>
                {
                    Products.map((item, index) => {
                        return (
                            <CardProduct data={item} index={index} onOpen={onOpen} setSelectedItem={setSelectedItem} setSelectedAmount={setSelectedAmount} />
                        )
                    })
                }
            </VStack>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Box display='flex' mt='2' alignItems='center'>
                            {Products[selectedItem] ?  Products[selectedItem].name : ''}
                            <Spacer />
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={Products[selectedItem] ? (i < Products[selectedItem].rating ? 'yellow.500' : 'gray.300') : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' fontSize='sm'>
                                {Products[selectedItem] ? Products[selectedItem].reviewCount : 0} reviews
                            </Box>
                        </Box>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            boxSize='100%'
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '100px', md: '100%', lg: '100%' }}
                            src={Products[selectedItem] ? Products[selectedItem].imageLink : ''}
                            alt={Products[selectedItem] ? Products[selectedItem].imageAlt : ''}
                        />
                        <Text mt='1rem' textAlign='justify'>
                            {Products[selectedItem] ? Products[selectedItem].description : ''}
                        </Text>
                        <HStack>
                            <Text>
                                <Text as='span' color='orange'>Rp{Products[selectedItem] ? Products[selectedItem].price.toLocaleString('id-ID') : 0}</Text>,00
                            </Text>
                            <Spacer />
                            <Button variant='ghost' colorScheme='blue' mr={3} p='0' onClick={() => setSelectedAmount(selectedAmount <= 0 ? 0 : selectedAmount - 1 )}>
                                -
                            </Button>
                            <Text color={useColorModeValue('yellow.500', 'yellow')}>
                                {/*data[selectedItem] ? data[selectedItem].amount : 0*/}
                                {selectedAmount}
                            </Text>
                            <Button variant='ghost' colorScheme='blue' mr={3} p='0' onClick={() => setSelectedAmount(selectedAmount + 1 )}>
                                +
                            </Button>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='green' mr={3} onClick={onClose}>
                            Pesan
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Kembali</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
