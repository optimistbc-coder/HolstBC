import {Box, Flex, Text} from "@mantine/core";

export default function Footer() {
    return (
        <Flex className={"footerContainer"}>
            <Flex>
                <Text style={{fontSize:"20px",fontWeight:"500",color:"#c6c9ca"}}>© 2025 Всі права захищені.</Text>
            </Flex>
        </Flex>
    );
}