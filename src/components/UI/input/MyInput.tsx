import React from 'react';
import './MyInput.css'

const MyInput = (props:any) => {
    return (
        <input {...props} className={'myInput'}/>
    );
};

export default MyInput;