import { useState } from 'react'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import { Toaster } from 'react-hot-toast'
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import PaymentPage from './components/PaymentPage';
import BuyNowFromCard from './components/BuyNowFromCard';
import BuyNowFromCart from './components/BuyNowFromCart';


function App() {

  const [cartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [cartPanel, setCartPanel] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const [isBuyNowCard, setBuyNowCard] = useState(false);
  const [isBuyNowCart, setBuyNowCart] = useState(false);
  const [paymentPage, setPaymentPage] = useState(false);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {paymentPage && (<PaymentPage />)}
      {isBuyNowCard && (<BuyNowFromCard />)}
      {isBuyNowCart && (<BuyNowFromCart />)}
      {isSignup && (<SignUp signup={{ isSignup, setSignup }} login={{ isLogin, setLogin }} />)}
      {isLogin && (<LogIn login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />)}
      {cartPanel && (<Cart displayCart={{ cartPanel, setCartPanel }} data={{ cartData, setCartData }} payment = {{paymentPage, setPaymentPage}} buynow = {{isBuyNowCart, setBuyNowCart}} />)}
      <NavBar displayCart={{ cartPanel, setCartPanel }} login={{ isLogin, setLogin }} signup={{ isSignup, setSignup }} />
      <HomePage data={{ cartData, setCartData }} payment = {{paymentPage, setPaymentPage}} buynow = {{isBuyNowCart, setBuyNowCart}}  card = {{isBuyNowCard, setBuyNowCard}} />
    </>
  )
}

export default App
