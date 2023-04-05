import React from "react"
import "./button.css";


interface Props extends React.PropsWithChildren {
    type: "button" | "submit"
    onTap?: () => void
    variant: "primary" | "secondary" | "disabled"
}

const Button = (props: Props) => {
    return (<button
        className={
            (props.variant === "primary") ?
                "primaryButton" :
                (props.variant === "secondary") ?
                    "secondaryButton" :
                    (props.variant === "disabled") ?
                        "disabledButton" : ""
        }
        onClick={props.onTap}>
        {props.children}
    </button>
    )
}

export default Button