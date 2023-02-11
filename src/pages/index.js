import Page_Home from '../components/main/home'
import Page_Catalog from '../components/main/catalog'
import Page_Cart from '../components/main/cart'
import Page_Profile from '../components/main/profile'

import Head from 'next/head'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useColorModeValue, Text, Spacer } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Home() {
  const gradient = {
    primary: useColorModeValue('white', '#1a202c'),
    almostPrimary: useColorModeValue('#f9f9f9', '#2d3748'),
  }
  const [tabIndex, setTabIndex] = useState(0)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tabIndex])
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs onChange={(index) => setTabIndex(index)} isFitted variant='soft-rounded' colorScheme='green' maxH="100vh">
        <Box h="93vh" maxH="93vh" bgGradient={`linear(to-b, ${gradient.primary}, ${gradient.almostPrimary}})`}>
          <TabPanels>
            <TabPanel>
              <Page_Home />
            </TabPanel>
            <TabPanel>
              <Page_Catalog />
            </TabPanel>
            <TabPanel>
              <Page_Cart />
            </TabPanel>
            <TabPanel>
              <Page_Profile />
            </TabPanel>
          </TabPanels>
          <Spacer minH='7vh' />
        </Box>

        {/* Footer */}
        <TabList
          h='7vh'
          minH='40px'
          maxH="7vh"
          p='3px'
          position='fixed'
          bottom='0px'
          w='100%'
          bgColor=''
          backdropFilter='auto'
          backdropContrast='80%'
        >
          <Tab>
            <FontAwesomeIcon icon={faHome} />
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faSearch} />
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faGlassWater} />
          </Tab>
          <Tab>
            <FontAwesomeIcon icon={faUser} />
          </Tab>
        </TabList>
      </Tabs>
    </>
  )
}
