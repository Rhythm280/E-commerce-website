import { useState } from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import LogIn from './components/Login';


function App() {

  const [cartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  // const [cartData, setCartData] = useState(() => {
  //   try {
  //     const data = JSON.parse(localStorage.getItem("cart"));
  //     return Array.isArray(data) ? data : [];
  //   } catch (e) {
  //     return [];
  //   }
  // });

  const [cartPanel, setCartPanel] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {isSignup && (<SignUp signup={{ isSignup, setSignup }} login={{ isLogin, setLogin }} />)}
      {isLogin && (<LogIn login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />)}
      {cartPanel && (<Cart displayCart={{ cartPanel, setCartPanel }} data={{ cartData, setCartData }} />)}
      <NavBar displayCart={{ cartPanel, setCartPanel }} login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />
      <HomePage data={{ cartData, setCartData }} />
    </>
  )
}

export default App
