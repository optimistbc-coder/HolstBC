import {Badge, Box, Flex, Input, ScrollArea, Select, TextInput, Tooltip} from "@mantine/core";
import {useEffect, useState} from "react";
import getAllCities from "../../../utils/DeliveryUtils/getAllCities.js";
import CustomSelect from "../../../additionalComponents/CustomSelect/CustomSelect.jsx";


export default function OrderFormNovaPoshtaCities({setSelectedCityForDepartments, setCityForSending}) {
    const [cities, setCities] = useState([]);

    const [targetCity, setTargetCity] = useState("");
    const [targetCities, setTargetCities] = useState([]);

    const [selectedCity, setSelectedCity] = useState(null);


    useEffect(() => {
        (async () => {
            const data = await getAllCities();
            setCities(data);
        })();
    }, []);


    useEffect(() => {
        const selectedCityName = cities.find(city => city.Ref === selectedCity)?.Description;
        setCityForSending(selectedCityName);
        setSelectedCityForDepartments(selectedCity);
    }, [selectedCity]);

    useEffect(() => {
        if (!targetCity || targetCity === "") {
            setTargetCities([]);
            return;
        }
        const filteredCities = cities
            .filter((city) =>
                city.Description.toLowerCase().includes(targetCity.trim().toLowerCase())
            ).slice(0, 50);

        const formatedCities = filteredCities.map(city => {
            return {
                value: city.Ref,
                label: city.Description
            }
        })

        if (
            selectedCity &&
            !formatedCities.some(
                (city) => city.value === selectedCity && city.label === targetCity
            )
        ) {
            setSelectedCity(null);
        }

        setTargetCities(formatedCities);

    }, [targetCity]);

    return (
        <Flex className={"orderFormNovaPoshta"} align={"center"} direction={"column"}>
            <Flex style={{position: "relative"}}>
                <p>Доставка</p>
                <Tooltip label={"Безкоштовна доставка Новою Поштою"}>
                    <Badge style={{position: "absolute", top: "19px", right: "-30px"}}
                           variant="gradient"
                           gradient={{from: "#00c6ff", to: "#0072ff", deg: 90}}
                           size={"xs"}>0 грн</Badge>
                </Tooltip>
            </Flex>

            <Box style={{marginTop: "-17px"}}>
                <CustomSelect array={targetCities} value={selectedCity} setValue={setSelectedCity}
                              placeHolder={"Почніть вводити ваш населений пункт"} searchValue={targetCity}
                              onSearch={setTargetCity} title={"Міста"} isCorrect={true}/>
            </Box>

        </Flex>
    );
}

