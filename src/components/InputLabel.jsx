import React from 'react'

const InputLabel = ({label, ...rest}) => {
    return (
        <>
            <label>{label}</label>
            <input {...rest} />
        </>
    )
}

export default InputLabel

