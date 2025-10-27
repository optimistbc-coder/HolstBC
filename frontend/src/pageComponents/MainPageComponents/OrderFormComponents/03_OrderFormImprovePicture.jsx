import {Box, Checkbox, Text, Paper} from "@mantine/core";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export default function OrderFormImprovePicture({setPriceForImproving}) {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => setChecked((v) => !v);
    const MotionPaper = motion(Paper);
    const MotionBox = motion(Box);

    useEffect(() => {
        if(checked){
            setPriceForImproving(100);
        }else{
            setPriceForImproving(0);
        }
    }, [checked]);
    return (
        <>
            <p className={"orderFormImprovePictureP"}>Додатково</p>
            <MotionPaper
                withBorder
                radius="md"
                p="sm"
                onClick={handleToggle}
                whileHover={{
                    scale: 1.03,
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                }}
                whileTap={{scale: 0.97}}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    duration: 0.15,
                }}
                style={{
                    maxWidth: 250,
                    width: "100%",
                    backgroundColor: checked ? "#f6fff5" : "white",
                    borderColor: checked ? "#8fd08c" : "#e4e4e4",
                    transition: "all 0.15s ease",
                    cursor: "pointer",
                    boxShadow: checked ? "0 0 6px rgba(0,128,0,0.15)" : "none",
                    userSelect: "none",
                    position: "relative",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)"

                }}
            >
                <Checkbox
                    checked={checked}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    label={
                        <Text fw={650} size="sm" style={{color: "#6B7C93"}}>
                            Покращити фото (100 грн)
                        </Text>
                    }
                    styles={{
                        input: {cursor: "pointer"},
                        label: {cursor: "pointer", userSelect: "none"},
                    }}
                />

                <AnimatePresence initial={false}>
                    {checked && (
                        <MotionBox
                            key="extra-info"
                            initial={{height: 0, opacity: 0}}
                            animate={{height: "auto", opacity: 1}}
                            exit={{height: 0, opacity: 0}}
                            transition={{duration: 0.25, ease: "easeInOut"}}
                            style={{
                                overflow: "hidden",
                                willChange: "transform, opacity",
                                transform: "translateZ(0)",
                            }}
                        >
                            <Text size="xs" c="dimmed" mt="xs" style={{userSelect: "none"}}>
                                *Це додаткова обробка фото: корекція кольору, ретуш, підвищення якості
                                та зміна стилю (деталі узгоджуються з дизайнером)
                            </Text>
                        </MotionBox>
                    )}
                </AnimatePresence>

                <Box
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "transparent",
                        position: "absolute",
                        top: "0",
                        left: "0",
                    }}
                />
            </MotionPaper>
        </>
    );
}