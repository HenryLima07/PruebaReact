import classes from "./Category.module.scss";
import Header from "../../Components/Header/Header.component";
import Menu from "../../Components/Menu/Menu.component";
import Footer from "../../Components/Footer/Footer.component";
import NavBar from "../../Components/NavBar/NavBar.component";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";


const Category =()=>{
    const {pathname} = useLocation();
    const [data, setData] = useState([]);
    
    const Routing = {
        "/categories/ENTRADAS": "ENTRADAS",
        "/categories/SOPAS": "SOPAS",
        "/categories/PLATOS%20ESPECIALES": "PLATOS ESPECIALES",
        "/categories/COMBOS": "COMBOS",
        "/categories/BEBIDAS%20&%20POSTRES": "BEBIDAS & POSTRES",
    }

    useEffect(() => {
        setDataHandler();
    }, []);

    const setDataHandler = async()=>{
        try{
            const { data } = await axios.get();
            setData(data.categorias);
        }
        catch(error){
            toast.error("Ups!");
            console.log(error);
        }
    }

    return(
        <div className={classes["Category"]}>
            <Header />
            {data.length > 1 ? <>
                <NavBar data={data} location={pathname}/>
                 <Menu menu={        
                    data.filter(menu=>menu.nombre === Routing[pathname])} 
                    /> 
            </> : ""}

            <Footer />
        </div>
    )
}

export default Category;