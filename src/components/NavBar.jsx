import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

export default function NavBar({ displayCart, login, signup }) {

    const { cartPanel, setCartPanel } = displayCart;
    const { isSignup, setSignup } = signup;
    const { isLoggedIn, setLogin } = login;

    const navMenus = ["Home", "Products", "About us", "Contact us"];

    return (
        <nav>
            <h1>Fashion</h1>
            <ul>
                {navMenus.map((ele) => <li>{ele}</li>)}
            </ul>
            <input type="search" name="Search" id="Search" placeholder='Search....' />
            <button className="btn" onClick={() => {setCartPanel(!cartPanel)}}>
                <FaCartShopping />
            </button>
            <button className="btn" onClick={() => { setLogin(!isLoggedIn); setSignup(false); }}>LogIn</button>
            <button className="btn" onClick={() => {setSignup(true); setLogin(false);}} >SignUp</button>
        </nav>
    )
}
