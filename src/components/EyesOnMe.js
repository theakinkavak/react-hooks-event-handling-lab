// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  
    const onFocusHandler = () => console.log("Good!") 
    const onBlurHandler = () => console.log("Hey! Eyes on me!")

    return (
        <button onFocus={onFocusHandler} onBlur={onBlurHandler}>Eyes on me</button>
    )
};

export default EyesOnMe;