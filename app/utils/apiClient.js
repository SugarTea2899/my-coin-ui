import axios from "axios";
import { API_URL } from "./constants";

const instance = axios.create({
  baseURL: API_URL,
})

export const fetchData = async (method, url, data, privateKey) => {
  try {

    let options = {
      method,
      url,
    }

    if (data) options = {...options, data};
    if (privateKey) options ={...options, headers: {Authorization: privateKey}}

    const response = await instance.request(options);

    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
}
