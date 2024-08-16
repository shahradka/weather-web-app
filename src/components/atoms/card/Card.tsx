import React, { HtmlHTMLAttributes } from "react";
import "./styles.scss";  
import clx from "classnames";

const Card = ({className, children, ...restProps}:HtmlHTMLAttributes<HTMLSpanElement>) => {
    return <div className={clx(["card", className])} {...restProps}>
        {children}
    </div>
}

export default Card;