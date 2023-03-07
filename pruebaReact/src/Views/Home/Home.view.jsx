import classes from "./Home.module.scss";
import Header from "../../Components/Header/Header.component";
import Landing from "../../Components/Landing/Landing.component";
import Footer from "../../Components/Footer/Footer.component";
import NavBar from "../../Components/NavBar/NavBar.component";

const Home =()=>{
    return(
        <div className={classes["Home"]}>
            <Header />
            <Landing />
            <Footer />
        </div>
    )
}

export default Home;