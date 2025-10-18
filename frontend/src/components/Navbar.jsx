import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-200 px-4 py-2 flex justify-between">
      <ul className="flex items-center">
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-500"
            className="text-gray-800 hover:text-blue-700"
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-500"
            className="text-gray-800 hover:text-blue-700"
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-500"
            className="text-gray-800 hover:text-blue-700"
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-500"
            className="text-gray-800 hover:text-blue-700"
            to="/login"
          >
            Login
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            activeClassName="text-blue-500"
            className="text-gray-800 hover:text-blue-700"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
