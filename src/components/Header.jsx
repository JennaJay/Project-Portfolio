import NavBar from "./Navbar"
import wall from "../images/02-hero-bg.jpg";

const Header = () => (
    <header className="names">
    <h1>Hill Portfolio</h1>
    <NavBar />
    <img className="wallpaper" width={1100} height={100} src={wall} alt="wallpaper"/>
</header>
)
export default Header