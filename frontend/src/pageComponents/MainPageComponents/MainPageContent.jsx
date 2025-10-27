import DefaultComponent from "../../additionalComponents/DefaultComponents/DefaultComponent.jsx";
import PictureConstructorContent from "./PictureConstructorComponents/PictureConstructorContent.jsx";
import OrderFormContent from "./OrderFormComponents/01_OrderFormContent.jsx";
import {useEffect, useState} from "react";
import getImageWidthAndHeight from "../../utils/imageUtils/getImageWidthAndHeight.js";
import "./MainPageContent.css";
import {Box, Flex, Loader} from "@mantine/core";
import AnimatedContent from "../../additionalComponents/AnimetedContent.jsx";

export default function MainPageContent() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [orientation, setOrientation] = useState("h");

    const [originalWidth, setOriginalWidth] = useState(2000);
    const [originalHeight, setOriginalHeight] = useState(1400);

    const [isSending, setIsSending] = useState(false);

    const [isCorrectImage, setIsCorrectImage] = useState(false);
    const [fileData, setFileData] = useState(null);

    useEffect(() => {
        if (!originalWidth || !originalHeight) return;
        const obj = getImageWidthAndHeight(originalWidth, originalHeight);
        setWidth(obj.width >= 320 ? obj.width - 10 : obj.width);
        setHeight(obj.height);

    }, [originalHeight, originalWidth]);

    const [priceForSize, setPriceForSize] = useState(4500);

    return (
        <DefaultComponent>
            <AnimatedContent
                distance={0}
                direction="vertical"
                duration={2}
                initialOpacity={0.2}
                animateOpacity
                delay={0.2}
            >

                <Flex className={"mainPageContentContainer"}>
                    <PictureConstructorContent width={width} height={height} originalWidth={originalWidth}
                                               originalHeight={originalHeight} setOriginalWidth={setOriginalWidth}
                                               setOrientation={setOrientation} orientation={orientation}
                                               setOriginalHeight={setOriginalHeight}
                                               setPrice={setPriceForSize} setIsCorrectImage={setIsCorrectImage}
                                               setFileData={setFileData}/>

                    <OrderFormContent priceForPictureSize={priceForSize} isCorrectImage={isCorrectImage}
                                      setIsSending={setIsSending} fileData={fileData} isSending={isSending}
                                      width={originalWidth} height={originalHeight} orientation={orientation}/>
                    {isSending && <Flex
                        justify={"center"}
                        align={"center"}
                        style={{
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#afafaf",
                        opacity: "0.7",
                        zIndex: "1004",
                    }}><Loader color={"blue"} size={"lg"} style={{zIndex:"1005"}}/></Flex>}
                </Flex>

            </AnimatedContent>
        </DefaultComponent>
    );
}
