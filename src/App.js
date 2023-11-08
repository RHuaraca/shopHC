import React, { useEffect, useState } from "react";
//import axios from "axios";
//import { CssBaseline } from "@material-ui/core";
import "./App.css";
import ProductCard from "./ProductCard.jsx";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /* const apiUrl = "https://tu-api.com/productos"; // Cambia la URL a la API

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos: ", error);
      }); */

    const fetchData = async () => {
      try {
        // Importa los datos mockeados desde el archivo local
        const response = await import("./estructurasJson/producto.json");
        setProducts(response.default); // Establece los datos en el estado
      } catch (error) {
        console.error("Error al obtener los productos: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>HC</h1>
        <h2>Catálogo de productos</h2>
        <p>Encuentra los mejores productos para tu hogar al mejor precio</p>
      </header>
      <div className="card-container">
        {products.map((product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
