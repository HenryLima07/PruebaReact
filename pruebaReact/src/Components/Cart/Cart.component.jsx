import { useState,useEffect } from "react";
import { BiX } from "react-icons/bi";

import classes from "./Cart.module.scss";
import Element from "./ElementCart/Element.component";

const Cart = ({className, setMenu, Data = [], removeElement})=>{

    const [ data, setData ] = useState(Data);
    useEffect(() => {
        setData(Data)
    }, [Data]);

    let total = 0;

    if(data)
        for(let i = 0; i < data.length; i++) total += data[i].precio;

    return(
        <aside className={`${classes["aside-menu"]} ${classes[className]}`}>
            <nav className={`${classes["nav-menu"]}`}>
                <BiX onClick={setMenu}/>
                <h1>ORDEN</h1>
                <div className={classes["container"]}>
                    {
                        Data ? Data.map((element, index) => <Element data={element}  key={index} auxKey={index} removeElement={removeElement}/>)
                        : <></>
                    }
                </div>
                <h3>${total}</h3>
                <button onClick={()=>{
                    setMenu();
                    localStorage.clear();
                }}>Pagar</button>
            </nav>
        </aside>
    );
}

export default Cart;