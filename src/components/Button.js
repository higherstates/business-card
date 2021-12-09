import React from "react"

const STYLES = [
    "btn--white",
    "btn--blue"
]

function Button({ href, children, type, onClick, buttonStyle}) {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" >
            <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}  >
                {children}
            </button>
        </a>

    )
}

export default Button