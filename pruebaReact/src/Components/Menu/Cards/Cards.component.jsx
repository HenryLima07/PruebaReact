import { useState } from "react";
import classes from "./Cards.module.scss";
import Plate from "./Plate/Plate.component";

const Cards = ({plates})=>{
    const [openPlate, setOpenPlate] = useState(false);

    const setOpenPlateHandler = ()=>setOpenPlate(!openPlate);

    return(
        <article className={classes["Category"]}>
            <img src={plates.imagenes.normal ? plates.imagenes.normal : plates.imagenes.unavailable} alt="Menu image" />
            <div onClick={setOpenPlateHandler}>
                <h3>{plates.nombre}</h3>
                <button>
                    ${parseInt(plates.precio).toFixed(2)}
                </button>
            </div>

            {
                openPlate ? 
                <Plate view={openPlate} setCloseHandlder={setOpenPlateHandler} plates = {plates} className={`view--${openPlate ? "open" : "close"}`}/>
            
                : ""
             }
        </article>

    )
}
export default Cards;