import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import classes from "./Landing.module.scss";
import Category from "../Category/Category.component";

const Landing = ()=>{
    const [categories, setCategories] = useState([]);
    const [slide, setSlide] = useState(1);

    useEffect(() => {
        setCategoriesHandler();
    }, []);

    const setCategoriesHandler = async()=>{
        try{
            const { data } = await axios.get();

            setCategories(data.categorias);
        }
        catch(error){
            toast.error("Ups!");
            console.log(error);
        }
    }

    return(
        <section className={classes["Landing"]}>
            <div className={classes["Title"]}>
                <h2>Decide tu comida favorita a un click</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus iaculis, sociosqu nisl odio enim justo molestie vulputate fringilla interdum, nibh tristique class quis urna tellus leo libero. Ullamcorper vulputate aenean hac sociis imperdiet nisi ligula, diam class nascetur vehicula hendrerit sodales etiam, fames leo in bibendum at nibh. 
                </p>
            </div>
            <div className={classes["categories"]}>
                {
                    categories ? 
                        categories.map(category => {
                            if(category.id === 4 ) return; 
                            
                            return <Category category={category.nombre} Data={category} key={category.id}>
                                <img src={category.imagenes.normal} alt="Menu image" />
                                <h3>{category.nombre}</h3>
                            </Category>
                        })
                    :
                    ""
                }
            </div>
        </section>
    )
}

export default Landing;