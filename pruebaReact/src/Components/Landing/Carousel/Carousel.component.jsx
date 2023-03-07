import classes from "./Carousel.module.scss";

const Carousel = ({ID, img})=>{
    return (
        <div className={classes["image"]}>
            <div className={classes["number"]}> {ID+1}/ 5</div>
            <img src={img} />
        </div>      
          
    );
}

export default Carousel;