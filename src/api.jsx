import axios from "axios";

export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/listar_produtos/"
});



export const listar_produtos = async (token)=> {
    const data = api.get(`${token}`)
    return data;
};
