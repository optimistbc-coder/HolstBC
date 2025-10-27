import {CloseButton, Flex, Input} from "@mantine/core";
import {useEffect, useState} from "react";
import {IMaskInput} from "react-imask";
import checkContact from "../../../utils/ContactUtils/checkContact.js";


export default function OrderFormContact({setIsContactCorrect,setNameForSending,setSecondNameForSending,setSurnameForSending,setPhoneForSending}) {
    const [name, setName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");

    const [isNameValid, setIsNameValid] = useState(false);
    const [isSecondNameValid, setIsSecondNameValid] = useState(false);
    const [isSurnameValid, setIsSurnameValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [totalCorrect, setTotalCorrect] = useState(false);

    useEffect(() => {
        setIsNameValid(checkContact(name, 2, 30));
        setNameForSending(name);
    }, [name]);

    useEffect(() => {
        setIsSecondNameValid(checkContact(secondName, 2, 40));
        setSecondNameForSending(secondName);
    }, [secondName]);

    useEffect(() => {
        setIsSurnameValid(checkContact(surname, 2, 35));
        setSurnameForSending(surname);
    }, [surname]);
    useEffect(() => {
        setIsPhoneValid(checkContact(phone, 17, 17))
        setPhoneForSending(phone);
    }, [phone]);



    useEffect(() => {
        if (isPhoneValid && isSurnameValid && isNameValid && isSecondNameValid) {
            setTotalCorrect(true);
        } else {
            setTotalCorrect(false);
        }
    }, [isPhoneValid, isSurnameValid, isNameValid, isSecondNameValid]);


    useEffect(() => {
        setIsContactCorrect(totalCorrect);
    }, [totalCorrect]);

    return (
        <Flex direction={"column"} align={"center"} className={"orderFormContact"}>
            <p>Ваші контакти</p>

            <Input
                error={!isNameValid}
                placeholder="Ім'я"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                size={"md"}
                style={{fontWeight: 600, width: "250px"}}
                rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setName("")}
                        style={{display: name ? undefined : 'none'}}
                    />
                }
            />


            <Input
                error={!isSecondNameValid}
                placeholder="Прізвище"
                value={secondName}
                onChange={(event) => setSecondName(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                size={"md"}
                style={{marginTop: "10px", fontWeight: 600, width: "250px"}}
                rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setSecondName("")}
                        style={{display: secondName ? undefined : 'none'}}
                    />
                }
            />

            <Input
                error={!isSurnameValid}
                placeholder="По батькові"
                value={surname}
                onChange={(event) => setSurname(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                size={"md"}
                style={{marginTop: "10px", fontWeight: 600, width: "250px"}}
                rightSection={
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => setSurname("")}
                        style={{display: surname ? undefined : 'none'}}
                    />
                }
            />


            <IMaskInput
                mask="+38(000)000-00-00"
                value={phone}
                onAccept={(value) => setPhone(value)}
                placeholder="+38(0__)___-__-__"
                unmask={false}
                style={{

                    padding: "8px 14px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "1px solid " + (isPhoneValid ? "#ced4da" : "red"),
                    borderRadius: "4px",
                    outline: "none",
                    marginTop: "10px",
                    color: "#667f99",
                    width: "250px"
                }}
            />
        </Flex>
    );
}
