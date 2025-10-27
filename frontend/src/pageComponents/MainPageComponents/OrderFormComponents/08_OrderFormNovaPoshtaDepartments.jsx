import {useEffect, useState} from "react";
import getAllDepartmentsByCity from "../../../utils/DeliveryUtils/getAllDepartmentsByCity.js";
import CustomSelect from "../../../additionalComponents/CustomSelect/CustomSelect.jsx";
import {Badge, Box, Button, Flex} from "@mantine/core";

export default function OrderFormNovaPoshtaDepartments({city,setIsCorrectDepartment,setDepartmentForSending}) {
    const [departments, setDepartments] = useState([]);
    const [page, setPage] = useState(1);

    const [changedDepartments, setChangedDepartments] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState(null);

    const [isValidDepartment, setIsValidDepartment] = useState(false);

    useEffect(() => {
        setChangedDepartments([]);
        setSelectedDepartment(null);
        setPage(1);
        setDepartments([]);

        if (city) {
            (async () => {
                const data = await getAllDepartmentsByCity(city, 1);
                setDepartments(data)
            })();
        }
    }, [city]);

    useEffect(() => {
        if (page > 1) {

            (async () => {
                const data = await getAllDepartmentsByCity(city, page);
                setDepartments(prev => [...prev, ...data]);
            })();
        }
    }, [page]);

    useEffect(() => {
        if (!departments) {
            setChangedDepartments([]);
        } else {
            const formatedDepartments = departments.map(department => {
                return {
                    value: department.Ref,
                    label: department.Description
                }
            })

            setChangedDepartments(formatedDepartments);
        }

    }, [departments]);

    useEffect(() => {
       const selectedDepartmentName = departments.find(dept => dept.Ref === selectedDepartment)?.Description;
       setDepartmentForSending(selectedDepartmentName);
    }, [selectedDepartment]);

    useEffect(() => {
        if (selectedDepartment && selectedDepartment !== "") {
            setIsValidDepartment(true)
        } else {
            setIsValidDepartment(false);
        }
    }, [selectedDepartment]);
    useEffect(() => {
        setIsCorrectDepartment(isValidDepartment);
    }, [isValidDepartment]);
    return (
        <Flex direction={"row"} style={{marginTop: "10px", position: "relative"}}>
            <CustomSelect array={changedDepartments} value={selectedDepartment} setValue={setSelectedDepartment}
                          placeHolder={"Відділення"} title={"Відділення"} isCorrect={isValidDepartment}/>
            {departments.length >= 100 * page &&
                <Badge children={"Більше відділень"} className={"orderFormNovaPoshtaMoreDepartments"}
                       style={{cursor: "pointer"}} onClick={() => setPage(page + 1)}/>
            }
        </Flex>
    );
}
