import Head from 'next/head'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab w={[1000]}>
            <FontAwesomeIcon icon={faHome} />
          </Tab>
          <Tab w={[1000]}>
            <FontAwesomeIcon icon={faSearch} />
          </Tab>
          <Tab w={[1000]}>
            <FontAwesomeIcon icon={faGlassWater} />
          </Tab>
          <Tab w={[1000]}>
            <FontAwesomeIcon icon={faUser} />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
