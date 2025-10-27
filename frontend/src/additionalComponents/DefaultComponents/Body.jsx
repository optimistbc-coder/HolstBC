import {Box, Flex} from "@mantine/core";
import "./DefaultComponent.css"

export default function Body({children}){
    return(
        <Flex className={"bodyContainer"}>
            {children}
        </Flex>

    );
}