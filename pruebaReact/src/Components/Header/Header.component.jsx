import classes from "./Header.module.scss";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { json, Link } from "react-router-dom";
import { useState } from "react";

import Cart from "../Cart/Cart.component";

const Header =()=>{
    const [openCart, toogleCart] = useState(false);
    const [DataCart, setDataCart] = useState([]);

    const toogleMenu = ()=>{
        setDataCart(getFromLocal);
        toogleCart(!openCart);
    }

    const getFromLocal = () => JSON.parse(localStorage.getItem("saveInCart"));

    const removeFromLocal = (index)=>{
        console.log(index);
        let data = getFromLocal();
        if(!data[index]) return;
        
        data = data.splice(index, 1);

        localStorage.setItem("saveInCart", JSON.stringify(data));
        setDataCart(data);

        
    }

    return(
        <header className={classes["Header"]}>
            <Link to={"/"}>
            <figure>
                <img src="https://cdn-icons-png.flaticon.com/512/9516/9516939.png" alt="Logo" />
            </figure>
            MyEcommerce
            </Link>

            <div className={classes["green-container"]}>
                <nav className={classes["Menu"]}>
                    <ul>
                        <li><Link to={"/"}>Inicio</Link> </li>
                        <li><Link to={"/categories/ENTRADAS"}>Categorias</Link> </li>
                    </ul>
                </nav>

                <button onClick={toogleMenu} className={classes["shopping-cart"]}>
                    <RiShoppingBasket2Line />
                </button>
            </div>
            <Cart className={ `nav--${ openCart ? `open`: `close` }` } setMenu={toogleMenu} Data = {DataCart} removeElement={removeFromLocal}/>
        </header>
    )
}

export default Header;