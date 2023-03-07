import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import classes from "./Landing.module.scss";
import Category from "../Category/Category.component";
import Carousel from "./Carousel/Carousel.component";

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

            {/* <div className={classes["food-carousel"]}>
            {
                categories ? 
                    categories.map((category, index) => {
                        if(category.id !== slide ) return; 

                        return <Carousel img={category.imagenes.normal} ID={index > 3 ? index - 1 : index} key={category.id}>
                        </Carousel>
                    })
                :
                ""
                }
            </div>        
            <div className={classes["buttons-carousel"]}>
              <span className={classes["button-carousel"]} onClick={()=>setSlide(1)}></span>
              <span className={classes["button-carousel"]} onClick={()=>setSlide(2)}></span>
              <span className={classes["button-carousel"]} onClick={()=>setSlide(3)}></span>
              <span className={classes["button-carousel"]} onClick={()=>setSlide(5)}></span>
              <span className={classes["button-carousel"]} onClick={()=>setSlide(6)}></span>
            </div>
         */}
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