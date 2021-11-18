import React from "react";
import'./Button.css';

function Button({children, size, color, width, handleClick, disabled}) {

    return <button disabled={disabled} onClick={handleClick} 
                className={`Button ${size} ${color} ${width}`}>
            {children}</button>
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'tomato',
    disabled: false, //버튼은 기본적으로 활성화 되어 있어야 함
}