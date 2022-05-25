import Axios from "axios"
import { baseURL } from "./baseURL"





// const getSubscribers = async () => {
//     return  await Axios.get(`${baseURL}/subscribers`)
// }

    //getSubscribers()
    // .then(res => {return res.data})
    // .then(console.log)

    const getSubscribers = async (): Promise<any[]> => {
        const response = await Axios.get(`${baseURL}/subscribers`);
        return response.data;
      };

    getSubscribers()
     .then(console.log) 