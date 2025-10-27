import { useEffect, useState, useRef } from "react"
import { ActionIcon, Box, Flex } from "@mantine/core"
import { AnimatePresence, motion } from "framer-motion"

export default function PictureConstructorImagesCarousel() {
    const images = [
        "https://res.cloudinary.com/dnphv80vg/image/upload/v1760467671/DSC_9881_phmslp.jpg",
        "https://res.cloudinary.com/dnphv80vg/image/upload/v1760467671/DSC_9881_phmslp.jpg",
        "https://res.cloudinary.com/dnphv80vg/image/upload/v1760467671/DSC_9881_phmslp.jpg",
        "https://res.cloudinary.com/dnphv80vg/image/upload/v1760467671/DSC_9881_phmslp.jpg",
    ]

    const [[index, direction], setIndex] = useState([0, 0])
    const intervalRef = useRef(null)

    const startTimer = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => paginate(1), 4000)
    }

    const stopTimer = () => clearInterval(intervalRef.current)

    useEffect(() => {
        startTimer()
        return stopTimer
    }, [])

    const paginate = (newDirection) => {
        setIndex(([prev]) => {
            const newIndex = (prev + newDirection + images.length) % images.length
            return [newIndex, newDirection]
        })
    }

    const handleManualChange = (dir) => {
        paginate(dir)
        startTimer() // ⬅️ скидаємо таймер після будь-якого кліку
    }

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 600 : -600,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            zIndex: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 600 : -600,
            opacity: 0,
            zIndex: 0,
        }),
    }

    return (
        <Box
            style={{
                position: "relative",
                width: "98%",
                maxWidth: 600,
                height: 400,
                marginTop: 80,
                overflow: "hidden",
                borderRadius: 16,
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                border: "1px solid #e4e4e4",
                backgroundColor: "white",
            }}
        >
            <AnimatePresence custom={direction}>
                <motion.img
                    key={index}
                    src={images[index]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 250, damping: 30 },
                        opacity: { duration: 0.3 },
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        borderRadius: 16,
                    }}
                />
            </AnimatePresence>

            <ActionIcon
                radius="xl"
                size="lg"
                onClick={() => handleManualChange(-1)}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 16,
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "1px solid #e4e4e4",
                    color: "#000",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    zIndex: 10,
                }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </ActionIcon>

            <ActionIcon
                radius="xl"
                size="lg"
                onClick={() => handleManualChange(1)}
                style={{
                    position: "absolute",
                    top: "50%",
                    right: 16,
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    border: "1px solid #e4e4e4",
                    color: "#000",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    zIndex: 10,
                }}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </ActionIcon>

            <Flex
                gap={8}
                style={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                }}
            >
                {images.map((_, i) => (
                    <motion.div
                        key={i}
                        onClick={() => {
                            setIndex(([prev]) => [i, i > prev ? 1 : -1])
                            startTimer() // ⬅️ скидаємо таймер і при кліку на індикатор
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            width: index === i ? 32 : 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: index === i ? "#000" : "rgba(255,255,255,0.6)",
                            border: "1px solid rgba(228,228,228,0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backdropFilter: "blur(4px)",
                        }}
                    />
                ))}
            </Flex>
        </Box>
    )
}
