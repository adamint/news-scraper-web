import {TabPanel} from "@chakra-ui/react";

export default function DisplayPanel({children}) {
    return <TabPanel w="40%" h="40%" overflowY="scroll" border="1px dashed">
        <p>test</p>
        {children}
    </TabPanel>
}