import {Flex} from "@mantine/core";
import "./DefaultComponent.css"
import logo from "../../assets/logo.png";

export default function Header(){
    return(
        <Flex className={"headerContainer"}>
            <Flex className={"headerContent"} justify={"space-between"}>
                <Flex justify={"center"} align={"center"} className={"headerImageAndText"}>
                    <img src={logo}  alt={"optimist"} onClick={() => window.location.href="/"}/>
                    <p>Замов картину - збережи емоції на холсті</p>
                </Flex>
                <Flex className={"headerPhoneNumber"} justify={"center"} align={"center"}>
                    <p>+380638989724</p>
                </Flex>
            </Flex>
        </Flex>
    );
}