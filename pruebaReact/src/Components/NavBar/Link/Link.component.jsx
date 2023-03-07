import classes from "./Link.module.scss";

import { Link } from "react-router-dom";

const LinkNav = ({cat=""})=>{
    return <li><Link to={`/categories/${cat}`}>{cat}</Link></li>
}

export default LinkNav;