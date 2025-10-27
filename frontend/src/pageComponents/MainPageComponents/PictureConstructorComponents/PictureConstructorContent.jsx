import {Flex} from "@mantine/core";
import "./PictureConstructorContent.css"
import PictureConstructorTitle from "./PictureConstructorTitle.jsx";
import PictureConstructorImage from "./PictureConstructorImage.jsx";
import PictureConstructorSizeSelection from "./PictureConstructorSizeSelection.jsx";
import PictureConstructorOrientationSelection from "./PictureConstructorOrientationSelection.jsx";
import PictureConstructorImagesCarousel from "./PictureConstructorImagesCarusel.jsx";

export default function PictureConstructorContent({
                                                      width,
                                                      height,
                                                      setOriginalWidth,
                                                      setOriginalHeight,
                                                      setOrientation,
                                                      orientation,
                                                      setPrice,
                                                      originalHeight,
                                                      originalWidth,
                                                      setIsCorrectImage,
                                                      setFileData
                                                  }) {
    return (
        <Flex className={"pictureConstructorContentContainer"}>
            <PictureConstructorTitle/>
            <PictureConstructorImage width={width} height={height} originalWidth={originalWidth}
                                     originalHeight={originalHeight} orientation={orientation}
                                     setIsCorrectImage={setIsCorrectImage} setFileData={setFileData}/>
            <PictureConstructorSizeSelection setOriginalWidth={setOriginalWidth} setOriginalHeight={setOriginalHeight}
                                             setPrice={setPrice} orientation={orientation}/>
            <PictureConstructorOrientationSelection setNewOrientation={setOrientation}/>
            <PictureConstructorImagesCarousel/>
        </Flex>
    );
}