import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";

const Laptops = () => {
    const [Laptops, setLaptops] = useState([]);

    const get_laptops = async () => {
        try {
            const res = await axios.get("http://localhost:9001/laptops"); // Ensure correct port
            setLaptops(res.data);
        } catch (error) {
            console.error("Error fetching laptops:", error);
        }
    };

    useEffect(() => {
        get_laptops();
    }, []);

    return (
        <div className="parent">
            {Laptops.map((element, index) => (
                <div className="child" key={index}>
                    <img src={element.pimage} className='laptop-image'/>
                    <h2>₹{element.pcost}</h2>
                    <p>Qty: {element.pqty}</p>
                </div>
            ))}
        </div>
    );
};

export default Laptops;


// import axios from "axios";
// import { useEffect, useState } from "react";

// const Laptops = () => {
//     const [laptops, setLaptops] = useState([]);

//     const getLaptops = async () => {
//         try {
//             const res = await axios.get("http://localhost:9001/laptops");
//             setLaptops(res.data);
//         } catch (error) {
//             console.error("Error fetching laptops:", error);
//         }
//     };

//     useEffect(() => {
//         getLaptops();
//     }, []);

//     return (
//         <div>
//             <h2>Laptop List</h2>
//             <table border="1" cellPadding="10" cellSpacing="0">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Cost</th>
//                         <th>Image</th>
//                         <th>Quantity</th>
//                         <th>Purchased Quantity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {laptops.length > 0 ? (
//                         laptops.map((laptop) => (
//                             <tr key={laptop.id}>
//                                 <td>{laptop.id}</td>
//                                 <td>{laptop.pname}</td>
//                                 <td>{laptop.pcost}</td>
//                                 <td>
//                                     <img 
//                                         src={laptop.pimage} 
//                                         alt={laptop.pname} 
//                                         width="100"
//                                     />
//                                 </td>
//                                 <td>{laptop.qty}</td>
//                                 <td>{laptop.pqty}</td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="6">No laptops available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Laptops;
