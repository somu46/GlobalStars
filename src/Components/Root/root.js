import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";
import LayOut from "../LayOut/defaultLayout";



const Root = ()=>{
    return (
        <div>
            
            <Navbar/>
            <LayOut>
            <Outlet/>
            </LayOut>
            <Footer/>
        </div>
    )
};

export default Root;  //exporting the root component