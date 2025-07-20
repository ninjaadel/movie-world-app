
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../../pages/navbar"; // Bu satırı ekle!
import { Main } from "../main";
import { useContext } from "react";
import {ThemeContext} from "../../contexts.jsx/theme";
import { Footer } from "../ui/footer";
export function MainLayout () {
    const { theme } = useContext(ThemeContext);
    const Color = theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"; 
   // Temaya göre arka plan rengi ayarla
    return (
        <> 
         <Navbar />
        <Main theme={Color}>

            <Outlet />
        </Main>
       <Footer theme={Color} />
        
        </>
    )
}