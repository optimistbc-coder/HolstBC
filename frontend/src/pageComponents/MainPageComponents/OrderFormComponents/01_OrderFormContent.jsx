import {Chip, Flex} from "@mantine/core";
import "./OrderFormContent.css"
import OrderFormTitle from "./02_OrderFormTitle.jsx";
import OrderFormImprovePicture from "./03_OrderFormImprovePicture.jsx";
import OrderFormContact from "./04_OrderFormContact.jsx";
import OrderFormNovaPoshtaCities from "./07_OrderFormNovaPoshta.jsx";
import OrderFormNovaPoshtaDepartments from "./08_OrderFormNovaPoshtaDepartments.jsx";
import {useEffect, useState} from "react";
import OrderFormConnectWithUs from "./06_OrderFormConnectWithUs.jsx";
import OrderFormWishes from "./09_OrderFormWishes.jsx";
import OrderFormSending from "./10_OrderFormSending.jsx";
import axios from "axios";
import createImage from "../../../utils/imageUtils/createImage.js";
import sendData from "../../../utils/SendingUtils/sendData.js";

export default function OrderFormContent({
                                             priceForPictureSize,
                                             isCorrectImage,
                                             setIsSending,
                                             fileData,
                                             isSending,
                                             height,
                                             width,
                                             orientation
                                         }) {
    const baseURL = import.meta.env.VITE_BASE_URL;

    const [city, setCity] = useState(null);

    const [totalPrice, setTotalPrice] = useState(0);
    const [priceForImprovingPicture, setPriceForImprovingPicture] = useState(0);

    const [isContactCorrect, setIsContactCorrect] = useState(false);
    const [isCorrectDepartment, setIsCorrectDepartment] = useState(false);

    const [formatedDataOfImage, setFormatedDataOfImage] = useState("");
    const [nameForSending, setNameForSending] = useState("");
    const [secondNameForSending, setSecondNameForSending] = useState("");
    const [surnameForSending, setSurnameForSending] = useState("");
    const [phoneForSending, setPhoneForSending] = useState("");
    const [cityForSending, setCityForSending] = useState("");
    const [departmentForSending, setDepartmentForSending] = useState("");
    const [connectWithUsForSending, setConnectWithUsForSending] = useState("");
    const [wishesForSending, setWishesForSending] = useState("");

    useEffect(() => {
        setTotalPrice(priceForPictureSize + priceForImprovingPicture);
    }, [priceForPictureSize, priceForImprovingPicture]);

    useEffect(() => {
        setFormatedDataOfImage(`Ширина:${orientation === "h" ? width : height}   Висота:${orientation === "h" ? height : width}`);
    }, [orientation, width, height]);

    useEffect(() => {
        if (isSending) {

            const requestBody = {
                userName: nameForSending,
                userSecondName: secondNameForSending,
                userSurname: surnameForSending,
                userPhone: phoneForSending,
                city: cityForSending,
                department: departmentForSending,
                connectWithUs: connectWithUsForSending,
                wishes: wishesForSending,
                imageData: formatedDataOfImage,
                price: totalPrice,
                improveImage: priceForImprovingPicture > 0 ? "Покращувати фото" : "Без покращення фото",
            };

            if (baseURL === "/api") {
                const send = async () => {
                    console.log(baseURL);
                    const imageURL = await createImage(fileData);
                    sendData(requestBody.userName, requestBody.userSecondName, requestBody.userSurname, requestBody.userPhone, requestBody.city, requestBody.department, requestBody.connectWithUs, requestBody.wishes, requestBody.imageData, requestBody.price, imageURL, requestBody.improveImage);
                }
                send().then(r => window.location.href="/thanks");
            } else {
                console.log(requestBody);
            }


        }


    }, [isSending]);

    return (
        <Flex className={"orderFormContentContainer"}>
            <OrderFormTitle/>
            <OrderFormContact setIsContactCorrect={setIsContactCorrect} setNameForSending={setNameForSending}
                              setPhoneForSending={setPhoneForSending} setSecondNameForSending={setSecondNameForSending}
                              setSurnameForSending={setSurnameForSending}/>
            <OrderFormConnectWithUs setConnectWithUsForSending={setConnectWithUsForSending}/>
            <OrderFormNovaPoshtaCities setSelectedCityForDepartments={setCity} setCityForSending={setCityForSending}/>
            <OrderFormNovaPoshtaDepartments city={city} setIsCorrectDepartment={setIsCorrectDepartment}
                                            setDepartmentForSending={setDepartmentForSending}/>
            <OrderFormImprovePicture setPriceForImproving={setPriceForImprovingPicture}/>
            <OrderFormWishes setWishesForSending={setWishesForSending}/>
            <OrderFormSending totalPrice={totalPrice} isCorrectImage={isCorrectImage}
                              isCorrectDepartment={isCorrectDepartment} isContactCorrect={isContactCorrect}
                              setIsSending={setIsSending}/>
        </Flex>
    )
}