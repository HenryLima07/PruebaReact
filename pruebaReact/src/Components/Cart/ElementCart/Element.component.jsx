import { BiX } from "react-icons/bi";

import classes from "./Element.module.scss";


const Element = ({data=[], removeElement, auxKey})=>{
    return(
        <div className={classes["container"]}>
            {
                data ? 
                <>
                    <img src={data.imagenes.normal ? data.imagenes.normal : data.imagenes.unavailable} alt="" />
                    <p>{data.nombre}</p>
                    <p className={classes["precio"]}>${parseInt(data.precio).toFixed(2)}</p>
                    <figure onClick={()=>{
                        removeElement(auxKey);
                    }}>
                        <BiX />
                    </figure>
                </>
                : <></>
            }
        </div>
    )
}

export default Element;