import {Box, Textarea} from "@mantine/core";
import {useEffect, useState} from "react";

export default function OrderFormWishes({setWishesForSending}) {

    const changeWishes = (e)=>{
        setWishesForSending(e.target.value);
    }

    return (
        <Box style={{marginTop: "20px",width:"250px"}} >
            <Textarea label={"Ваші побажання(не обовязково)"} placeholder={"Я б хотів..."} onChange={changeWishes}/>
        </Box>
    )
}