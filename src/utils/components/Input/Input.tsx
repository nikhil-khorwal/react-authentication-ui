import React from "react"
import './input.css'

interface Props {
    type: string
    onChangeHandler?: (e: any) => void
    onBlurHandler?: (e: any) => void
    value?: any
    hasError: boolean
    errorMsg?: string
    label: string
}


const Input = (props: Props) => {
    return (<div className={`form-group ${props.hasError && 'form-group-error'}`}>
        <label htmlFor="">{props.label}</label>
        <input type={props.type} value={props.value} onChange={props.onChangeHandler} onBlur={props.onBlurHandler} />
        {props.hasError && <p className="error-msg">*{props.errorMsg}</p>}
    </div>)
}

export default Input