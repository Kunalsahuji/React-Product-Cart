import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getCart = async () => {
            if (toggle) {
                try {
                    const { data } = await axios.get('/carts');
                    setCarts(data);
                    console.log("Cart data: ", data);
                } catch (error) {
                    console.error("Error fetching carts:", error);
                }
            } else {
                setCarts([]);
            }
        };

        console.log("[Cart.jsx] created!");

        getCart();

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
                {toggle ? "Hide Carts" : "Show Carts"}
            </button>

            {/* Display cart data only when toggle is true */}
            {toggle && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {carts.length > 0 ? (
                        carts.map((cart, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
                                <h2 className="text-xl font-bold">Cart ID: {cart.id}</h2>
                                <p className="text-gray-600">User ID: {cart.userId}</p>
                                <h3 className="mt-2 font-bold">Products:</h3>
                                <ul className="list-disc ml-5">
                                    {cart.products.map((product, idx) => (
                                        <li key={idx}>
                                            Product ID: {product.productId}, Quantity: {product.quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p>{carts.length === 0 ? "No carts found." : "Loading carts..."}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cart;
