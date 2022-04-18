import Axios from "axios";
import { baseURL } from "./baseURL";


type user = {
	id: string;
	name: string;
	email: string;
}



const getSubscribers = async (): Promise<user[]> => {
    const response = await Axios.get(`${baseURL}/subscribers`);
    const users: user[] = []
    response.data.map((user: any)=>{
        users.push( {
            id: user.id,
            name: user.name,
            email: user.email
        })
    })
    return users
  };

getSubscribers()
 .then(console.log) 