import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        // <nav className="bg-blue-600 p-4">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <div className="text-white text-lg font-bold">
        //             <Link to="/">MyApp</Link>
        //         </div>
        //         <div className="space-x-4">
        //             <Link to="/" className="text-white hover:text-gray-300">
        //                 Home
        //             </Link>
        //             <Link to="/product" className="text-white hover:text-gray-300">
        //                 Product
        //             </Link>
        //             <Link to="/cart" className="text-white hover:text-gray-300">
        //                 Cart
        //             </Link>
        //             <Link to={'/user'} className='text-white hover:text-gray-300'>
        //                 User
        //             </Link>
        //         </div>
        //     </div>
        // </nav>
        <div className='w-[95%] px-6 py-3 bg-slate-800 text-white rounded flex justify-center items-center gap-10 m-auto'>
            <NavLink to={'/'} className={(e) => e.isActive ? "text-red-500 underline" : ""}>Home</NavLink>
            <NavLink to={'/user'} className={(e) => e.isActive ? "text-red-500 underline" : ""}>User</NavLink >
            <NavLink to={'/product'} className={(e) => e.isActive ? "text-red-500 underline" : ""} >Product</NavLink>
            <NavLink to={'/cart'} className={(e) => e.isActive ? "text-red-500 underline" : ""}> Cart</NavLink>
        </div>
    )
}

export default Nav


