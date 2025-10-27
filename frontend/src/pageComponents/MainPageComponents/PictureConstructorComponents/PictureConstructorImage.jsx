import {ActionIcon, Box, Button, FileButton, Flex, Input, Tooltip} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileImport} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {motion} from "framer-motion"


export default function PictureConstructorImage({width, height,originalWidth,originalHeight,orientation,setIsCorrectImage,setFileData}) {
    const [file, setFile] = useState(null);
    const [TemporaryURL, setTemporaryURL] = useState("https://res.cloudinary.com/dnphv80vg/image/upload/v1760428945/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2025-10-14_110157_ct3jz3.png");
    const allowedTypes = ["image/png", "image/jpeg","image/webp","image/heic"];

    const maxSize = 3.5 * 1024 * 1024;


    const setURL = (file) => {
        if(!file) return;

        if(!allowedTypes.includes(file.type)){
            alert("Ви додали картинку з недопустимим форматом." +
                "                  Допустимі формати картинки: jpg,png,webp,heic");
            return;
        }else if(file.size > maxSize){
            alert("Ви додали картинку, розмір якої перевищує допустимий." +
                "                  Максимальний розмір картинки: 3.5 МБ");
            return;
        }

        setFile(file);
        const url = URL.createObjectURL(file);
        setTemporaryURL(url);

    }

    useEffect(() => {
        setFileData(file);
        setIsCorrectImage(file !== null);
    }, [file]);

    return (
        <Flex className={"pictureConstructorContentImage"}>
            <p>{orientation === "h" ? originalWidth+"x"+originalHeight : originalHeight+"x"+originalWidth}(мм)</p>
            <Box className={"pictureConstructorContentImageImgContainer"}>
                <motion.img
                    src={TemporaryURL}
                    animate={{width: orientation === "h" ? width : height, height: orientation === "h" ? height : width}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                />
            </Box>

            <FileButton accept="image/*" onChange={setURL}>
                {(props) => (
                    <Tooltip label="Завантажити зображення" withArrow >
                        <ActionIcon
                            {...props}
                            variant="light"
                            color="blue"
                            radius="xl"
                            size="xl"
                            style={{
                                backgroundColor: "white",
                                boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#77b6e1")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                        >
                            <FontAwesomeIcon icon={faFileImport} />
                        </ActionIcon>
                    </Tooltip>
                )}
            </FileButton>
            <p>(ДОДАТИ ФОТО)</p>
        </Flex>
    );
}
