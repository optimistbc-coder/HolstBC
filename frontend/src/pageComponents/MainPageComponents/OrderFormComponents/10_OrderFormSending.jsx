import {Button, Flex, Text} from "@mantine/core";
import {useEffect, useState} from "react";

export default function OrderFormSending({
                                             totalPrice,
                                             isCorrectImage,
                                             isCorrectDepartment,
                                             isContactCorrect,
                                             setIsSending
                                         }) {
    const [price, setPrice] = useState(0);
    const [correct, setCorrect] = useState(false);

    useEffect(() => {
        setPrice(totalPrice);
    }, [totalPrice]);

    useEffect(() => {
        if (isCorrectImage && isCorrectDepartment && isContactCorrect) {
            setCorrect(true)
        } else {
            setCorrect(false);
        }
    }, [isCorrectImage, isCorrectDepartment, isContactCorrect]);
    return (
        <Flex style={{marginTop: "50px"}} justify={"center"} direction={"column"} align={"center"} gap={"10px"}>
            <Text style={{color: "#80cb80", fontWeight: "700", fontSize: "20px"}}>{price}грн</Text>
            <Button style={{backgroundColor: correct ? "#0078ef" : "#e1e1e1"}} disabled={!correct}
                    onClick={() => setIsSending(true)}>Відправити</Button>
            {!isCorrectImage &&
                <Text style={{color: "#ea0e0e", fontWeight: "500"}}>Ви не додали своє фото</Text>
            }
        </Flex>
    )

}