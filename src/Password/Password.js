import React from "react";




const Password = ({ label, placeholder, handleChange, value, valid }) => {

    let style = {
        borderColor: valid ? '' : 'red'
    };

    return (
        <div className='form-group'>
            <label >{label}</label>
            <input
                className='form-control'
                type="password"
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                style={style}
            />
        </div>
    );
}

export default Password;
