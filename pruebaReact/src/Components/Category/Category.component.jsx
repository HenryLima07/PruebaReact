import classes from "./Category.module.scss";
import { Link } from "react-router-dom";


const Category = ({children, category=""})=>{
    return(
        <Link to={`/categories/${category}`} className={classes["Category"]}>
            {children}
        </Link>
    )
}

export default Category;