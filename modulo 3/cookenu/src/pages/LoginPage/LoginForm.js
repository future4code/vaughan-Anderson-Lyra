import React from "react";
import { InputsContainer } from "./styled";
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/user";



const LoginForm = () => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
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
                         
                    >
                        FAZER LOGIN!

                    </Button>

                </form>
            </InputsContainer>
           
    )
}

export default LoginForm