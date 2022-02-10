import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "./constants/url";



const ListaDeMatches = (props) => {
    const [match, setMatch] = useState([])

    const getMetch = () => {
        axios.get(`${BASE_URL}matches`)
         .then((response) => {
           console.log(response.data.match)
           setMatch(response.data.match)
         })
         .catch((error) => {
           console.log(error.response)
         })
       }
 
    return (
        <div>
           <ListaDeMatches/>
        </div>
    )
}

export default ListaDeMatches