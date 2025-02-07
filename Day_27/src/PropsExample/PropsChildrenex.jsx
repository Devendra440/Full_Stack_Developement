// import React from 'react';

// const PropsChildrenex = {props} => {
//     console.log(props);
//     return (
//         <div>
//             <h1>{props.username}</h1>
//             <h1>{props.company}</h1>
//         </div>
//     );
// }
// export default PropsChildrenex;
import React from "react";

const Propschildrenex = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.username}</h1>
            <h3>{props.company}</h3>
            {
                props.children
            }
        </div>
    )

}
export default Propschildrenex;