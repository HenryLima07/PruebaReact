import classes from "./NavBar.module.scss";
import LinkNav from "./Link/Link.component";

const NavBar = ({data=[], location=""})=>{
    return(
        <ul className={classes["Navbar"]}>
            {data.length > 1 ?
                data.map(category=>{

                    if(category.id === 4 ) return;
                    
                    return <LinkNav key= {category.id} cat={category.nombre} className = {
                        classes[`${location.includes(category.nombre) ? `actual-location` : ``}`]
                    }/>
                })
                : ""
            }
        </ul>
    );
}

export default NavBar;