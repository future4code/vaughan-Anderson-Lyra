import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToRecipesList } from "../routes/coordinator"



export const login = (bodyForm, clear, navigate) => {
    axios.post(`${BASE_URL}/user/login`, bodyForm)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(navigate)
    })
    .catch((error) => {
        alert("Erro no login")
    })
}


export const signUp = (bodyForm, clear, navigate) => {
    axios.post(`${BASE_URL}/user/signup`, bodyForm)
    .then((response) => {
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(navigate)
    })
    .catch((error) => {
        alert("Erro no login")
    })
}