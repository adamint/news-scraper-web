import {useEffect, useState} from "react";
import {Box, Code, FormControl, FormLabel, Heading, Input, Text} from "@chakra-ui/react";
import {base} from "./FetchUtils";
import ReactJson from 'react-json-view'
import {DebounceInput} from 'react-debounce-input';

export function RouteDisplay({routeObject}) {
    const {route, routeName, queryParameters} = routeObject
    const [queryParameterValues, setQueryParameterValues] = useState(queryParameters?.map(() => ""))
    const query = base + concatQueryParametersWithRoute(route, queryParameters, queryParameterValues)

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(query).then(response => response.json()).then(json => setData(json))
    }, [query])

    console.log(data)
    console.log(query)


    function handleQueryParameterValueChange(e, index) {
        const text = e.target.value
        const newValues = queryParameterValues.slice()
        newValues.splice(index, 1, text)
        setQueryParameterValues(newValues)
    }

    return <Box minH="40%" overflowY="scroll" borderWidth="1px" borderRadius="lg" py={3} px={2} mb={5}>
        <Heading textAlign="center" size="md" mb={2}>{routeName}</Heading>
        {<Box mb={3}>
            <Code mb={2}>{route}</Code>
            <Heading size="sm">Query Parameters:</Heading>
            {queryParameters && queryParameters.length > 0 && queryParameters.map((queryParameter, index) => <Box
                key={queryParameter.name}>
                <FormControl isRequired={queryParameter.required}>
                    <FormLabel mb={0}>{queryParameter.name}</FormLabel>
                    {queryParameter.description &&
                        <Text mt={0} mb={1} fontSize={12}>{queryParameter.description}</Text>}
                    <Input placeholder={queryParameter.description} value={queryParameterValues[index]}
                           onChange={e => handleQueryParameterValueChange(e, index)}
                           as={DebounceInput}
                           minLength={0}
                           debounceTimeout={300}
                    />
                </FormControl>
            </Box>)}
            <Box my={2} w="100%" maxH="40%" overflowY="scroll">
                <ReactJson src={data} name={null} indentWidth={2} style={{fontSize: 15}}/>
            </Box>
        </Box>}
    </Box>
}

function concatQueryParametersWithRoute(route, queryParameters, queryParameterValues) {
    const queryString = queryParameterValues
        .map((queryParameterValue, index) => [queryParameters[index].name, queryParameterValue])
        .filter(queryParamArray => queryParamArray[1] && queryParamArray[1].length > 0)
        .map(queryParamArray => queryParamArray[0] + "=" + queryParamArray[1])
        .join("&")
    if (queryString.length === 0) return route
    return route + "?" + queryString
}