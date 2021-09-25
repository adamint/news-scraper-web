import React from 'react';
import {Box, Grid, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import {DisplayPanel} from "./DisplayPanel";

function App() {
    return <>
        <Box fontSize="xl">
            <Grid p={3}>
                <ColorModeSwitcher justifySelf="flex-end"/>
                <VStack spacing={8}>
                    <Box>
                        <Heading mb={2}>Newsfeed aggregator POC</Heading>
                        <Text>What do you want to know?</Text>
                    </Box>

                    <Tabs variant="soft-rounded" w="60%">
                        <TabList>
                            <Tab>Search</Tab>
                            <Tab>Feed Information</Tab>
                            <Tab>Source Information</Tab>
                            <Tab>Statistics</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <DisplayPanel title="Search for articles" routes={[
                                    {
                                        route: "/search",
                                        routeName: "Search endpoint",
                                        queryParameters: [
                                            {
                                                "name": "source_types",
                                                required: false,
                                                description: "comma-separated list of source_category ids (general, business, entertainment)"
                                            },
                                            {
                                                "name": "sources",
                                                required: false,
                                                description: "comma-separated list of sources to include"
                                            },
                                            {
                                                "name": "excluded_sources",
                                                required: false,
                                                description: "comma-separated list of sources to exclude"
                                            },
                                            {
                                                "name": "country",
                                                required: false,
                                                description: "country to return results in"
                                            },
                                            {
                                                "name": "categories",
                                                required: false,
                                                description: "comma-separated list of categories that snippets should contain"
                                            },
                                            {
                                                "name": "q",
                                                required: false,
                                                description: "comma-separated list of search terms to use. Case sensitivity decided by ignore_case param"
                                            },
                                            {
                                                "name": "ignore_case",
                                                required: false,
                                                description: "defaults to true. boolean that decides if the search term should ignore case"
                                            },
                                            {
                                                "name": "sort",
                                                required: false,
                                                description: "method of sorting, descending by publish date by default. Allows ascending or, if search terms are present, mentions_i where " +
                                                    "i is the index of the associated search term"
                                            },
                                            {
                                                "name": "feeds",
                                                required: false,
                                                description: "comma-separated list of **feed ids** separated with __*,__ - format is sourceId*:feedId"
                                            },
                                            {
                                                "name": "limit",
                                                required: false,
                                                description: "the amount of results you want to return. -1 if all results are to be returned"
                                            },
                                            {
                                                "name": "offset",
                                                required: false,
                                                description: "the amount to offset. Default is 0."
                                            }
                                        ]
                                    }
                                ]}>
                                </DisplayPanel>
                            </TabPanel>
                            <TabPanel>
                                <DisplayPanel title="Feed Information" routes={[
                                    {
                                        route: "/information/feed",
                                        routeName: "Get information about a particular news feed",
                                        queryParameters: [
                                            {
                                                name: "feed_id",
                                                required: true,
                                                description: "Feed identifier"
                                            }
                                        ]
                                    }
                                ]}>
                                </DisplayPanel>
                            </TabPanel>
                            <TabPanel>
                                <DisplayPanel title="Source Information" routes={[
                                    {
                                        route: "/information/source-list",
                                        routeName: "Get all sources",
                                        queryParameters: []
                                    },
                                    {
                                        route: "/information/source",
                                        routeName: "Get information about a particular source",
                                        queryParameters: [
                                            {
                                                name: "source_id",
                                                required: true,
                                                description: "News source identifier"
                                            }
                                        ]
                                    }
                                ]}>
                                </DisplayPanel>
                            </TabPanel>
                            <TabPanel>
                                <DisplayPanel title="Statistics" routes={[
                                    {
                                        route: "/statistics",
                                        routeName: "Get aggregator statistics",
                                        queryParameters: []
                                    }
                                ]}>
                                </DisplayPanel>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </Grid>
        </Box>
    </>
}

export default App;
