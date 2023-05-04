import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
        <h1>
            Pets Shop
        </h1>
        <nav>
            <ul>
                <li>Racion</li>
                <li>Baño</li>
                <li>Salud</li>
                <li>Juguetes</li>
            </ul>
        </nav>
        <CartWidget />
         </header>
  )
}
export default NavBar; 