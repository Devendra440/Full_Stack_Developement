import { Route, Routes,BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Error from "./Login/Error";
import Dashboard from "./Dashboards/Dashboard";
import Laptops from "./Pages/Laptops";
import Mobiles from "./Pages/Mobiles";
import Watches from "./Pages/Watches";

const Master = () => {
  return (
    <>
     <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}>
                        <Route index element={<Laptops></Laptops>}></Route>
                        <Route path="dashboard/mobiles" element={<Mobiles></Mobiles>}></Route>    
                        <Route path="dashboard/watches" element={<Watches></Watches>}></Route>
                    </Route>

                    <Route path="/error" element={<Error></Error>}></Route>
                
                </Routes>
     </BrowserRouter>
    </>
  )
}

export default Master;
