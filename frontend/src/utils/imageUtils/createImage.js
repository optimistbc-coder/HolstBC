import axios from "axios";

export default async function createImage(file){
    const formData = new FormData();
    const baseURL =import.meta.env.VITE_BASE_URL;

    formData.append("file",file);

    const response = await axios.post(`${baseURL}/cloudinary/create/image`,formData,{
        headers: {
            "Content-Type": "multipart/form-data"
        }});

    return response.data;
}