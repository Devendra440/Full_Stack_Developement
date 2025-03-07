import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";

const Watches = () => {
    const [Laptops, setLaptops] = useState([]);

    const get_laptops = async () => {
        try {
            const res = await axios.get("http://localhost:9001/watches"); // Ensure correct port
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
                    <p>Qty: {element.qty}</p>
                </div>
            ))}
        </div>
    );
};

export default Watches;

