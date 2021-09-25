import {RouteDisplay} from "./RouteDisplay";
import {Box} from "@chakra-ui/react";

export function DisplayPanel({routes}) {
    if (!routes || routes.length === 0) return null
    return <Box>
        {routes.map(routeObject => <RouteDisplay routeObject={routeObject} key={routeObject.route}/>)}
    </Box>
}
