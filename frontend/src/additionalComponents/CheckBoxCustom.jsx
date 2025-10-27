import {Checkbox, Flex, Text} from "@mantine/core";
import {useEffect, useState} from "react";

export default function CheckBoxCustom({text, imageURL,setValue}) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if(checked){
            setValue(text)
        }else{
            setValue("");
        }
    }, [checked]);
    return (
        <Checkbox onChange={(event) => setChecked(event.currentTarget.checked)}
                  label={<Flex direction={"row"} align={"center"}
                               style={{marginTop: "-2px", color: checked ? "#6B7C93" :"#aec2e5"}} gap={"10px"}><img
                      width={"20px"} height={"20px"} src={imageURL}/><Text
                      style={{fontWeight: "500"}}>{text}</Text></Flex>}
        />

    );
}