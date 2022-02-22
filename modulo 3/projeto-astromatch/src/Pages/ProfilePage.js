import { useEffect, useState } from "react"
import axios from "axios"
import {BASE_URL} from "../constants/url"



const ProfilePage = () => {
    
const [profile, setProfile] = useState([])

useEffect (() => {
    getPerfil()
}, [])

    const getPerfil = () => {
        axios.get(`${BASE_URL}person`)
        .then((response) => {
          console.log(response.data.profile)
          setProfile(response.data.profile)
        })
        .catch((error) => {
          console.log(error.response)
        })
      }
 
    return (
        <div>
            <img src={profile.photo} alt="Foto"/>
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
            
           Pagina Inicial
        </div>
    )
}

export default ProfilePage