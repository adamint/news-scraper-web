import React from 'react';
import {Box, Grid, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import DisplayPanel from "./DisplayPanel";

function App() {
    return <>
        <Box textAlign="center" fontSize="xl">
            <Grid p={3}>
                <ColorModeSwitcher justifySelf="flex-end"/>
                <VStack spacing={8}>
                    <Heading>Newsfeed aggregator POC</Heading>
                    <Text>What do you want to know?</Text>
                    <Tabs variant="soft-rounded">
                        <TabList>
                            <Tab>Feed Information</Tab>
                            <Tab>Source Information</Tab>
                            <Tab>Search</Tab>
                            <Tab>Statistics</Tab>
                        </TabList>
                        <TabPanels>
                            <DisplayPanel>

                            </DisplayPanel>
                        </TabPanels>
                    </Tabs>
                    <Link
                        color="teal.500"
                        href="https://chakra-ui.com"
                        fontSize="2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Chakra
                    </Link>
                </VStack>
            </Grid>
        </Box>
    </>
}

export default App;
