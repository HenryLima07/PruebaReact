import classes from "./Footer.module.scss";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

import { Link } from "react-router-dom";

const Footer =()=>{
    return (
        <footer className={classes["Footer"]}>
            <div className={classes["main-information"]}>
                <div className={classes["personal"]}>
                    <h2>Informacion Personal</h2>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100009307704309" target={"_blank"}>
                            <BsFacebook />
                        </a>
                        <a href="https://www.instagram.com/henrylima16/" target={"_blank"}>
                            <BsInstagram />

                        </a>
                        <a href="https://www.linkedin.com/in/henry-eduardo-escobar-lima-2b79161b4/" target={"_blank"}>
                            <BsLinkedin />

                        </a>
                    </div>
                </div>
                <div className={classes["Content"]}>
                    <h2>Contenido</h2>
                    <ul>
                        <li><a to={".Footer"}>Acerca de</a></li>
                        <li><Link to={"/categories/ENTRADAS"}>Categorias</Link></li>
                        <li><a to={"#"}>Terminos y condiciones</a></li>
                        <li><a to={"#"}>Politica de privacidad</a></li>
                    </ul>

                </div>
            </div>
            <div className={classes["copy"]}>© MyEcommers 2023 by Henry Lima</div>
        </footer>
    )
}

export default Footer;