import React from "react";

interface IsErrorProprs {
    message: string
}

const IsError = (props: IsErrorProprs) => {

    const message = props.message

    return (
        <p> {message} </p>
    )
}

export default IsError