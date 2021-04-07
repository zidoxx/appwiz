import React, { useState, useEffect } from "react";

export const Main = () => {
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = async () => {
        const response = await fetch("http://localhost:4000/products");
        const datos = await response.json();
        setProduct(datos);
    };

    const getCategories = async () => {
        const response = await fetch("http://localhost:4000/categories");
        const datos = await response.json();
        setCategory(datos);
    };

    const test = () => {
        console.log("Boton presionado");
    };

    return (
        <div>
            <main>
                <div className="categorias">
                    {category.map((item, i) => (
                        <div className="categorias__MiniCard--papas" key={i}>
                            {item.nombre}
                        </div>
                    ))}
                </div>
                <div className="productos">
                    {product.map((item, i) => (
                        <div className="productos__card" key={i}>
                            <img src={item.imagen} alt={item.nombre} />
                            <div className="productos__card--caracteristicas">
                                <h2>{item.nombre}</h2>
                                <span onClick={test}>
                                    Click para ver ingredientes
                                </span>
                                <div className="productos--precio">
                                    {item.precio}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Main;
