import React from "react";
import { InputsContainer } from "./styled";
import axios from "axios"
import { BASE_URL} from "../../constants/url"
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@material-ui/core";


const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    const login = () => {
        axios.post(`${BASE_URL}/user/login`)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
   

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth   
                        variant={"contained"}
                        color={"primary"}
                        margin={"dense"} 
                    >
                        FAZER LOGIN!

                    </Button>

                </form>
            </InputsContainer>
           
    )
}

export default LoginForm