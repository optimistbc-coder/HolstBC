import {Flex} from "@mantine/core";
import "./DefaultComponent.css"
import Body from "./Body.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function DefaultComponent({children}) {
    return (
        <Flex className={"fullPageContainer"}>

                <Header/>
                <Body children={children}/>
                <Footer/>
        </Flex>
    );
}