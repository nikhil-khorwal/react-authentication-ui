import React, { useState } from "react"
import Button from "../../../../utils/components/button/button"
import Card from "../../../../utils/components/card/card"
import { StringConstants } from "../../../../utils/constants/string-constants"
import '../../../../index.css'
import Input from "../../../../utils/components/Input/Input"
import useInput from "../../../../utils/hooks/useInput"
const logo = require("../../../../assets/images/sketchlogo.png")

const LoginPage = () => {
    const validateEmail = (email: any) => email.includes("@")
    const validatePassword = (email: any) => !(email.length < 6)

    const {
        isValid: emailIsValid,
        hasError: emailHasError,
        onBlurHandler: emailBlurHandler,
        onChangeHandler: emailChangeHandler,
        reset: emailResetHandler,
        value: email
    } = useInput(validateEmail)
    const {
        isValid: passwordIsValid,
        hasError: passwordHasError,
        onBlurHandler: passwordBlurHandler,
        onChangeHandler: passwordChangeHandler,
        reset: passwordResetHandler,
        value: password
    } = useInput(validatePassword)


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        if (emailIsValid && passwordIsValid) {
            emailResetHandler()
            passwordResetHandler()
            console.log("login...");
        }
    }

    return (
        <div className="auth-background">
            <Card>
                <div className="auth-content">
                    <div className="auth-logo">
                        <div className="logo">
                            <img src={logo} alt="scrach_logo" />
                            <p>{StringConstants.scratchText}</p>
                        </div>
                    </div>
                    <form className="auth-form" onSubmit={submitHandler}>
                        <h3>{StringConstants.loginTitle}</h3>
                        <p>{StringConstants.loginSubTitle}</p>
                        <Input
                            type="email"
                            label={StringConstants.emailAddressText}
                            hasError={emailHasError}
                            onBlurHandler={emailBlurHandler}
                            onChangeHandler={emailChangeHandler}
                            value={email}
                            errorMsg={"please enter valid email"}
                        />
                        <Input
                            type="password"
                            label={StringConstants.passwordText}
                            hasError={passwordHasError}
                            onBlurHandler={passwordBlurHandler}
                            onChangeHandler={passwordChangeHandler}
                            value={password}
                            errorMsg={"please enter valid password"} />

                        <div className="forgot-password-link">
                            <a href="/">{StringConstants.forgotPasswordText}?</a>
                        </div>
                        <Button type="submit" variant={`${(emailIsValid && passwordIsValid) ? "primary" : "disabled"}`}>{StringConstants.loginText}</Button>
                        <div className="not-register-link">
                            <p>{StringConstants.loginNotRegisterText}</p>
                            <a href="/signup">{StringConstants.loginNavigateLink}</a>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default LoginPage