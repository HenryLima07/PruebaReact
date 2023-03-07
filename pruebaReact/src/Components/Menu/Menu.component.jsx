import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";


import classes from "./Menu.module.scss";
import Cards from "./Cards/Cards.component";

const Menu = ({menu})=>{
    return(
        <section className={classes["Menu"]}>
            {
            menu.length > 0 ? 
                    menu[0].menus.map(plates => {
                    {/* if(category.id === 4 ) return;  */}
                    
                    return <Cards plates={plates} key={plates.id}>
                        
                    </Cards>

                })
            :
            ""
        }
        

        </section>
    )
}

export default Menu;