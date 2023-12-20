import React from 'react';
import './MyButton.css';

const MyButton = (props:any) => {
    return (
        <button {...props} className="myBtn">
            {props.children}
        </button>
    );
};

export default MyButton;