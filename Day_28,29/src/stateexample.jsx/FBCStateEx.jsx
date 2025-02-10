import React, { useState } from "react";

const FBCStateEx = () => {
    const [value , setValue] = useState(1000);
    let changeValue =()=>{
        setValue(1);
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={changeValue}> Change</button>
        </div>
    )
}
export default FBCStateEx;