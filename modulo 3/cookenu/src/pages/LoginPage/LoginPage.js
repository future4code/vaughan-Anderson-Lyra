import React from "react";
import { LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";


const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <ScreenContainer>

            <LogoImage src={logo} />
            <LoginForm />

            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(navigate)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    CADASTRE-SE

                </Button>
            </SignUpButtonContainer>

        </ScreenContainer>
    )
}

export default LoginPage