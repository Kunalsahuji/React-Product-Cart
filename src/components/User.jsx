import axios from "../utils/axios";
import { useEffect, useState } from "react";

const User = () => {
    const [toggle, setToggle] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const { data } = await axios.get('/users');
            setUsers(data);
            console.log("Users data:", data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const handleToggle = () => {
        setToggle(!toggle);
        if (!toggle) {
            getUsers(); // Fetch users data when the toggle is set to true
        }
    };

    return (
        <div className="text-center">
            <button
                className="text-2xl font-bold m-auto text-center mt-10 bg-gray-800 text-white w-max-3xl rounded px-4 py-2"
                onClick={handleToggle}
            >
                {toggle ? "Hide Users" : "Show Users"}
            </button>

            {toggle && (
                <div className="mt-4">
                    {users.length > 0 ? (
                        <ul className="space-y-4">
                            {users.map((user) => (
                                <li
                                    key={user.id}
                                    className="bg-gray-100 p-4 rounded shadow-md"
                                >
                                    <h2 className="text-xl font-bold">
                                        {user.name?.firstname} {user.name?.lastname}
                                    </h2>
                                    <p>Email: {user.email}</p>
                                    <p>Username: {user.username}</p>
                                    <p>Phone: {user.phone}</p>

                                    
                                        <div className="mt-2">
                                            <h3 className="text-lg font-semibold">Address:</h3>
                                            <p>Street: {user.address.street || 'N/A'}</p>
                                            <p>City: {user.address.city || 'N/A'}</p>
                                            <p>Zip: {user.address.zip || 'N/A'}</p>
                                        </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>{users.length === 0 ? "No users found." : "Loading users..."}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default User;
