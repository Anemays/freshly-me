import Page_Home from '../components/main/home'
import Page_Catalog from '../components/main/catalog'
import Page_Details from '../components/main/details'
import Page_Profile from '../components/main/profile'

import Head from 'next/head'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, useColorModeValue } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const gradient = {
    primary: useColorModeValue('white', '#1a202c'),
    almostPrimary: useColorModeValue('#f9f9f9', '#2d3748'),
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Tabs isFitted variant='soft-rounded' colorScheme='green' maxH="100vh">
        <Box h="93vh" maxH="93vh" bgGradient={`linear(to-b, ${gradient.primary}, ${gradient.almostPrimary}})`}>
          <TabPanels>
            <TabPanel>
              <Page_Home />
            </TabPanel>
            <TabPanel>
              <Page_Catalog />
            </TabPanel>
            <TabPanel>
              <Page_Details />
            </TabPanel>
            <TabPanel>
              <Page_Profile />
            </TabPanel>
          </TabPanels>
        </Box>

        {/* Footer */}
        <TabList h='7vh' maxH="7vh" p='3px'>
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
