import ContenedorProducto from "./Components/ContenedorProducto.jsx/ContenedorProducto"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
function App() {
    return (
    <>
    <h1>
        Mi app
        </h1>
        <Navbar/>
        <ItemListContainer greeting="Bienvenidos a nuestra pagina" />
       <ContenedorProducto/>
        </>

    );
}
export default App; 