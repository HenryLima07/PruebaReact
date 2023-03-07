import classes from "./Plate.module.scss";

import { BiX } from "react-icons/bi";
import { useState } from "react";

const Plate = ({plates, setCloseHandlder=()=>{}, className})=>{
    const [total, setTotal] = useState(1);

    const rest = ()=> setTotal(total > 1 ? total - 1 : total);

    const sum = ()=> setTotal(total + 1)

    const saveLocal = ()=> {

        const alreadySaved =  JSON.parse(localStorage.getItem("saveInCart")) || [];
        console.log(alreadySaved);
        let newData = alreadySaved || alreadySaved.length > 0 ? [...alreadySaved, plates] : [plates];
        console.log(newData);
        localStorage.setItem("saveInCart", JSON.stringify(newData));
    }
    return (
        <>
            <section className={`${classes["view"]} ${classes[className]}`}>
                <article className={`${classes["plate"]}`}>
                    <button className={classes["close"]} onClick={setCloseHandlder}>
                        <BiX />
                    </button>
                    <div className={classes["img"]}>
                        <img src={plates.imagenes.normal ? plates.imagenes.normal : plates.imagenes.unavailable} alt="Menu image" />
                        <p>
                            {plates.descripcion}
                        </p>
                    </div>
                    <div className={classes["information"]}>
                        <h2>{plates.nombre}</h2>
                        <h3>
                            ${parseInt(plates.precio).toFixed(2)}
                        </h3>
                        <div className={classes["quantity"]}>
                            <button onClick={rest} className={classes["add"]}>-</button>
                            <h3>{total}</h3>
                            <button onClick={sum} className={classes["add"]}>+</button>
                        </div>
                        <button onClick={()=>{
                            for(let i = 0; i < total; i++) saveLocal();
                        }}>Añadir a mi orden</button>
                    </div>

                </article>
            </section>
        </>
    )
}

export default Plate;