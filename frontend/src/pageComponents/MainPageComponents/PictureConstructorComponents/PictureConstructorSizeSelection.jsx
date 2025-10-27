import {Box, Chip, Flex, Tooltip} from "@mantine/core";
import {useState} from "react";
import {motion} from "framer-motion"


export default function PictureConstructorSizeSelection({setOriginalWidth, setOriginalHeight, setPrice, orientation}) {
    const chipValues = [
        {id: "1", width: 300, height: 200, price: 600},
        {id: "2", width: 300, height: 300, price: 650},
        {id: "3", width: 400, height: 300, price: 750},
        {id: "4", width: 500, height: 300, price: 900},
        {id: "5", width: 500, height: 400, price: 1000},
        {id: "6", width: 500, height: 500, price: 1100},
        {id: "7", width: 600, height: 400, price: 1200},
        {id: "8", width: 600, height: 500, price: 1400},
        {id: "9", width: 700, height: 500, price: 1600},
        {id: "10", width: 900, height: 500, price: 1800},
        {id: "11", width: 900, height: 600, price: 1900},
        {id: "12", width: 1100, height: 800, price: 2400},
        {id: "13", width: 1000, height: 1000, price: 2600},
        {id: "14", width: 1300, height: 1000, price: 2900},
        {id: "15", width: 1600, height: 1300, price: 3900},
        {id: "16", width: 2000, height: 1400, price: 4500}];

    const [value, setValue] = useState("5");

    const setSize = (newValue) => {
        const currentObj = chipValues.find(obj => obj.id === newValue);
        setValue(newValue);
        setPrice(currentObj.price);
        setOriginalHeight(currentObj.height)
        setOriginalWidth(currentObj.width);
    }

    return (
        <>
            <Box className={"pictureConstructorContentSizeSelectorTitle"}>
                <p>Оберіть розмір та орієнтацію картини</p>
            </Box>

            <Flex wrap="wrap" gap="xs" style={{justifyContent: "center"}}>
                <Chip.Group value={value} onChange={setSize}>
                    {chipValues.map((chipValue) => (
                        <Tooltip label={chipValue.price+"грн"} withArrow>
                            <motion.div
                                key={chipValue.id}
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.3}}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 1}}
                            >
                                <Chip
                                    color={"#0078ef"}
                                    size={"xs"}
                                    value={chipValue.id}
                                    className={"pictureConstructorContentSizeSelectorChip"}
                                    styles={{
                                        label: {
                                            padding: "12px 24px",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                            transition: "all 0.3s ease",
                                        },
                                    }}
                                >
                                    {orientation === "h" ? chipValue.width + "x" + chipValue.height : chipValue.height + "x" + chipValue.width}
                                </Chip>
                            </motion.div>
                        </Tooltip>
                    ))}
                </Chip.Group>
            </Flex>
        </>
    );
}
