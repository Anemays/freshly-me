import { Button, Card, CardBody, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";

export default function cardHighlight({ item }) {
    
    return (
        <Card minW={['100%', '50%']} maxW={['100%', '50%']}>
            <CardBody p='0'>
                <Image
                    src={item.imageLink}
                    alt={item.imageAlt}
                    borderRadius='lg'
                    maxH={['300px', '400px', '500px']}
                    boxSize='100%'
                    objectFit='cover'
                />
                <Stack spacing='3' p='4'>
                    <Heading size='md'>{item.name}</Heading>
                    <Text noOfLines={3}>
                        {item.description}
                    </Text>
                    <HStack>
                        <Text fontSize='xl'>
                            <Text as='span' color='orange'>Rp{item.price.toLocaleString('id-ID')}</Text>,00
                        </Text>
                        <Spacer />
                        <Button variant='solid' colorScheme='green'>
                            Pesan
                        </Button>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}