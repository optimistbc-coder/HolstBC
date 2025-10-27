import axios from "axios";

export default async function getAllCities(){
    const baseURL =import.meta.env.VITE_BASE_URL;

    if(baseURL==="/api"){
        const res = await axios.get(baseURL + "/nova/poshta/get/cities");
        return res.data;
    }else{
        return [
            {Ref:"1",Description:"аа"},
            {Ref:"2",Description:"ааа"},
            {Ref:"3",Description:"бб"},
            {Ref:"4",Description:"біла"},
            {Ref:"5",Description:"абаба"},
            {Ref:"6",Description:"івфа"},
            {Ref:"7",Description:"ававі"},
            {Ref:"8",Description:"авіав"},
            {Ref:"9",Description:"авіа"},
            {Ref:"10",Description:"аблл"},
            {Ref:"11",Description:"ааллвд"},
            {Ref:"12",Description:"аббаіл"},
            {Ref:"13",Description:"фдлдаві"},
            {Ref:"14",Description:"авіа"},
            {Ref:"15",Description:"авіа"},
            {Ref:"16",Description:"авіа"},
            {Ref:"17",Description:"авіа"},
            {Ref:"18",Description:"авіа"},
            {Ref:"19",Description:"авіа"}];
    }
}
