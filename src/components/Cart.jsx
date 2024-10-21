import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            if (toggle) {
                try {
                    const { data } = await axios.get('/products');
                    setProducts(data);
                    console.log("Product data: ", data);
                } catch (error) {
                    console.error("Error fetching products:", error);
                }
            } else {
                setProducts([]); // Clear products when toggled off
            }
        };

        console.log("[Cart.jsx] created!");

        getProduct();

        return () => {
            console.log("[Cart.jsx] destroyed!");
        };
    }, [toggle]);

    return (
        <div className="text-center">
            <button
                className="text-2xl font-bold m-auto text-center mt-10 bg-gray-800 text-white w-max-3xl rounded px-4 py-2"
                onClick={() => setToggle(!toggle)}
            >
                {toggle ? "Hide Products" : "Show Products"}
            </button>

            {/* Display product data only when toggle is true */}
            {toggle && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gray-100 p-4 rounded shadow-md"
                            >
                                <h2 className="text-xl font-bold">{product.title}</h2>
                                <p className="text-gray-600">Price: ${product.price}</p>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-40 object-contain mt-2"
                                />
                                <p className="mt-2">{product.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>{products.length === 0 ? "No products found." : "Loading products..."}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
