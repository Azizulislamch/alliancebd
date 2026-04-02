import { Outlet } from "react-router";
import Footer from "~/components/Shared/Footer/Footer";
import Navbar from "~/components/Shared/Navbar/Navbar";

export default function MainLayout (){
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/> 
        </div>
    )
}