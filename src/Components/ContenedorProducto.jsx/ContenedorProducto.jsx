import Producto from "../Producto.jsx/Producto"
const ContenedorProducto = () => {
  const props = {
    Nombre:"Acondicionador",
    Precio:250
  };
  return (
    <div>
        <Producto  Nombre="Cepillo" Precio={100}/>
        <Producto  Nombre="Shampoo" Precio={200}/>
        <Producto{...props}/>
        </div>
  )
}

export default ContenedorProducto;