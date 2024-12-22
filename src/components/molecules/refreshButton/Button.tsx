import cn from "classnames"
import React, { HtmlHTMLAttributes } from "react"
import "./styles.scss";


interface IButton extends HtmlHTMLAttributes<HTMLButtonElement>{
    icon?:React.ReactNode
}

const Button = ({icon, children, className, ...restProps}:IButton) => {
    return <button {...restProps} className={cn(["btn"], className)}>
        {icon? icon : children}
    </button>
}

export default Button