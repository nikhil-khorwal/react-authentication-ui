import React, { useState } from "react"

const useInput = (validate: any) => {
    const [input, changeInput] = useState({ value: "", isTouch: false })

    const isValid = validate(input.value)
    const hasError = !isValid && input.isTouch

    const valueChangeHAndler = (event: any) => {
        changeInput({ ...input, value: event.target.value })
    }
    const blueChangeHandler = (event: React.FormEvent) => {
        changeInput({ ...input, isTouch: true })
    }
    const resetHAndler = () => {
        changeInput({ isTouch: false, value: '' })
    }
    return {
        hasError: hasError,
        isValid: isValid,
        value: input.value,
        reset: resetHAndler,
        onChangeHandler: valueChangeHAndler,
        onBlurHandler: blueChangeHandler
    }
}

export default useInput