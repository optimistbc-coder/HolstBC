import {Chip, Flex, useMantineTheme} from "@mantine/core";
import {motion} from "framer-motion"
import {useState} from "react";

export default function PictureConstructorOrientationSelection({setNewOrientation}) {
    const orientations = [{value: "h", text: "ГОРИЗОНТАЛЬНА"}, {value: "v", text: "ВЕРТИКАЛЬНА"}];
    const [orientation, setOrientation] = useState("h");

    const theme = useMantineTheme();
    const changeOrientation = (newValue)=>{
        setOrientation(newValue);
        setNewOrientation(newValue);
    }

    return (
        <Flex>
            <Flex wrap="wrap" gap="xs" className={"pictureConstructorContentOrientationSelector"} style={{justifyContent: "center"}}>
                <Chip.Group value={orientation} onChange={changeOrientation}>
                    {orientations.map((orientation) =>
                        <motion.div
                            id={orientation.value}
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.3}}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 1}}
                        >
                            <Chip value={orientation.value}
                                  color={"#378ce9"}
                                  className={"pictureConstructorContentOrientationSelectorChip"}
                                  styles={{
                                      label: {
                                          padding: "12px 24px",
                                          fontWeight: 500,
                                          transition: "all 0.3s ease",
                                      },
                                  }}>
                                {orientation.text}</Chip>
                        </motion.div>
                    )}
                </Chip.Group>
            </Flex>
        </Flex>
    );
}
