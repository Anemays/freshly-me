import CardList from '../../components/layout/cardlist'
import Settings from '../../components/settings'

import { Button, Card, CardBody, CardFooter, Heading, HStack, IconButton, Image, Spacer, Stack, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Catalog() {
    const { colorMode, toggleColorMode } = useColorMode()
    const switchIcon = useColorModeValue(
        <FontAwesomeIcon icon={faSun} />,
        <FontAwesomeIcon icon={faMoon} />
    )

    return (
        <>
            <HStack mb={Settings.margin}>
                <Heading size={Settings.sizes.title}>
                    Discover
                </Heading>
                <Spacer />
                <IconButton variant="link" colorScheme='transparent' size={Settings.sizes.button} icon={
                    <FontAwesomeIcon icon={faSearch} />
                } />
                <IconButton variant="ghost" size={Settings.sizes.title} onClick={toggleColorMode} colorScheme='transparent' icon={switchIcon} />
            </HStack>

            <VStack>
                {
                    [
                        {
                            imageLink: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
                            imageAlt: 'Coffee',
                            title: 'Coffee',
                            description: 'Just a cup of coffee',
                            price: 12000,
                            rating: 4,
                            reviewCount: 10,
                        },
                        {
                            imageLink: 'https://via.placeholder.com/150',
                            imageAlt: 'Placeholder',
                            title: 'Title',
                            description: 'Description',
                            price: 25000,
                            rating: 5,
                            reviewCount: 100,
                        },
                    ].map((item, index) => {
                        return (
                            <CardList data={item} />
                        )
                    })
                }
            </VStack>
        </>
    )
}
