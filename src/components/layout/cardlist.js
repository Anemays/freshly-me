import Settings from '../settings'

import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons';


export default function CardList({ data }) {
    const { imageLink, imageAlt, title, description, price, rating, reviewCount } = data
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
                            maxW={{ base: '100%', sm: '100px' }}
                            src={imageLink}
                            alt={imageAlt}
                        />
                        <Box display='flex' mt='2' alignItems='center' px='8px' pb='8px'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {reviewCount} reviews
                            </Box>
                        </Box>
                    </VStack>

                    <Box w='100%'>
                        <VStack align='left' h='100%'>
                            <CardBody p='3px'>
                                <Heading size='md'>{title}</Heading>
                                <Text py='2'>
                                    {description}
                                </Text>
                            </CardBody>
                            
                            <CardFooter p='4px'>
                                <Spacer />
                                <Text fontSize='18px' p='6px'>
                                    Rp{price.toLocaleString('id-ID')},00
                                </Text>
                                <Button colorScheme='green' size={Settings.sizes.button}>
                                    Order
                                </Button>
                            </CardFooter>
                        </VStack>
                    </Box>
                </HStack>
            </Card>
        </>
    )
}