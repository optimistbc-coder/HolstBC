import axios from "axios";

export default function sendData(userName, userSecondName, userSurname, userPhone, city, department, connectWithUs, wishes, imageData, price, imageURL, improveImage) {

    axios.post("api/send",{userName: userName, userSecondName: userSecondName, userSurname: userSurname, userPhone: userPhone,
        userCity: city,
        userDepartment: department,
        connectWithUs: connectWithUs,
        wishes: wishes,
        imageInfo: imageData,
        price: price,
        imageURL: imageURL,
        improveImage: improveImage
    }).then(response => window.location.href="/thanks");
}