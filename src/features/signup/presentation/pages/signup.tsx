import { useState } from "react"
import Button from "../../../../utils/components/button/button"
import Card from "../../../../utils/components/card/card"
import { StringConstants } from "../../../../utils/constants/string-constants"
import '../../../../index.css'
import Input from "../../../../utils/components/Input/Input"
import useInput from "../../../../utils/hooks/useInput"
const logo = require("../../../../assets/images/sketchlogo.png")

const SignupPage = () => {

    const validateEmail = (email: any) => email.includes("@")
    const validatePassword = (password: any) => !(password.length < 6)
    const validateName = (name: any) => !(name.length < 1)
    const {
        isValid: nameIsValid,
        hasError: nameHasError,
        onBlurHandler: nameBlurHandler,
        onChangeHandler: nameChangeHandler,
        reset: nameResetHandler,
        value: name
    } = useInput(validateName)
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
        if (nameIsValid && emailIsValid && passwordIsValid) {

            nameResetHandler()
            emailResetHandler()
            passwordResetHandler()
            console.log("signup...");
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
                        <h3>{StringConstants.signupTitle}</h3>
                        <p>{StringConstants.signupSubTitle}</p>
                        <Input
                            type="name"
                            label={StringConstants.nameText}
                            hasError={nameHasError}
                            onBlurHandler={nameBlurHandler}
                            onChangeHandler={nameChangeHandler}
                            value={name}
                            errorMsg={"please enter valid name"}
                        />
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
                        <Button type="submit" variant={`${(nameIsValid && emailIsValid && passwordIsValid) ? "primary" : "disabled"}`}>{StringConstants.signupText}</Button>
                        <div className="already-register-link">
                            <p>{StringConstants.signupAlreadyRegisterText}</p>
                            <a href="/login">{StringConstants.signupNavigateLink}</a>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default SignupPage