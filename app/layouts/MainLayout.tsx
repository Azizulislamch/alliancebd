import { Outlet } from "react-router";

export default function MainLayout (){
    return (
        <div>
            Navbar
            <Outlet/>
            Footer 
        </div>
    )
}