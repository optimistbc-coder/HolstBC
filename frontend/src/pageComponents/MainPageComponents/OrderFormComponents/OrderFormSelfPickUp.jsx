import {useEffect} from "react";
import {Box, Text} from "@mantine/core";

export default function OrderFormSelfPickUp({setIsCorrectDepartment, isSelfPickUp, setDepartment, setCity}) {

    useEffect(() => {
        if (isSelfPickUp) {
            setIsCorrectDepartment(true);
        } else {
            setIsCorrectDepartment(false);
        }
        setDepartment("");
        setCity("");

    }, [isSelfPickUp]);

    return (
        <>
            <Box style={{marginTop: "7px", width: "300px"}}>
                <Text style={{color: "#4f4b4b", fontWeight: "700", fontSize: "18px"}}>Адреса нашого офісу: </Text>
            </Box>
            <Box>
                <Text style={{color: "#6B7C93", fontWeight: "600", marginTop: "2px",fontSize:"14px"}}>м. Біла Церква вул. Героїв
                    Небесної Сотні 18</Text>
            </Box>
        </>

    )
}