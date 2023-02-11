import Settings from '../settings'

import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, HStack, Image, Spacer, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';


export default function CardList({ data, index, onOpen, setSelectedItem, setSelectedAmount }) {
    const { imageLink, imageAlt, name, description, price, rating, reviewCount, amount } = data
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                minW='100%'
            >
                <HStack align='top' w='100%'>
                    <VStack align='left' maxW='40%'>
                        <Image
                            boxSize='100%'
                            objectFit='cover'
                            w={{ sm: '100px', md: '200px', lg: '400px' }}
                            maxW={{ sm: '100px', md: '200px', lg: '400px' }}
                            src={imageLink}
                            alt={imageAlt}
                            maxH={['150px']}
                        />
                        <Box minW='160px' display='flex' mt='2' alignItems='center' px='8px'> {/*pb='8px'*/}
                            {/*Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))*/}
                            {/*<Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {reviewCount} reviews
                            </Box>*/}
                        </Box>
                    </VStack>

                    <Box w='100%'>
                        <VStack align='left' h='100%'>
                            <CardBody p='3px'>
                                <Heading size='md'>{name}</Heading>
                                <Text py='2' noOfLines={2}>
                                    {description}
                                </Text>
                            </CardBody>
                            
                            <CardFooter p='4px'>
                                <Spacer />
                                <Text fontSize='17px' p='6px'>
                                    <Text as='span' color='orange'>Rp{price.toLocaleString('id-ID')}</Text>,00
                                </Text>
                                <Text fontSize='17px' p='6px' color={useColorModeValue('yellow.500', 'yellow')}>
                                    x{amount}
                                </Text>
                                <Button colorScheme='green' size={Settings.sizes.button} onClick={(e) => { onOpen(); setSelectedItem(index); setSelectedAmount(amount) }}>
                                    Pesan
                                </Button>
                            </CardFooter>
                        </VStack>
                    </Box>
                </HStack>
            </Card>
        </>
    )
}