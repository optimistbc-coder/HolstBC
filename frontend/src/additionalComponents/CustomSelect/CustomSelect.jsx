import {Button, Chip, Select} from "@mantine/core"
import {useEffect, useState} from "react";


export default function CustomSelect({array, setValue, value, placeHolder, searchValue, onSearch, title,isCorrect}) {
    const [opened, setOpened] = useState(false);
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        if(isCorrect === null && isCorrect === undefined){
            setIsValid(null)
        }else if(isCorrect){
            setIsValid(false);
        }else if(!isCorrect){
            setIsValid(true);
        }
    }, [isCorrect]);

    useEffect(() => {
        if (array && array.length > 0 && !value) {
            setTimeout(() => setOpened(true), 100);
        } else {
            setOpened(false);
        }
    }, [array]);



    return (
        <Select
            error={isValid}
            placeholder={placeHolder}
            data={[
                {group: `${title}`, items: array}
            ]}
            value={value}
            onChange={setValue}
            maxDropdownHeight={250}
            style={{width: "250px", marginTop: "10px"}}
            dropdownOpened={opened}
            onDropdownClose={() => setOpened(false)}
            onDropdownOpen={() => setOpened(true)}
            withinPortal={false}
            searchable
            nothingFound="Нічого не знайдено"
            searchValue={searchValue}
            onSearchChange={onSearch}
            itemComponent={CustomItem}
        />
    );
}

function CustomItem() {
    return (
        <div  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>fd</span>
            <Button size="xs">Додати</Button>
        </div>
    );
}