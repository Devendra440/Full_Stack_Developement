import { useEffect, useState } from "react";
import "./Laptops.css";
import axios from "axios";

const Laptops = () => {
    const [Laptops, setLaptops] = useState([]);

    const get_laptops = async () => {
        try {
            const res = await axios.get("http://localhost:9001/mobiles"); // Ensure correct port
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
                <div className="Child" key={index}>
                    <img src={element.pimage} alt="Mobile" className="mobile-image" />
                    <h2>₹{element.pcost}</h2>
                    <p>Qty: {element.pqty}</p>
                </div>
            ))}
        </div>
    );
};

export default Laptops;
