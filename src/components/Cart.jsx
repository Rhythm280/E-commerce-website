import React from 'react'

function Cart({ displayCart, data, buynow, payment }) {
    const { isBuyNowCart, setBuyNowCart } = buynow;
    const { paymentPage, setPaymentPage } = payment;
    const { cartData, setCartData } = data;
    const { cartPanel, setCartPanel } = displayCart;

    function increaseQuantity(id) {
        const updatedCart = cartData.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                return item;
            }
        })
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    function decreaseQuantity(id) {
        const updatedCart = cartData.map((item) => {
            if (id === item.id) {
                return { ...item, quantity: item.quantity - 1 };
            } else {
                return item;
            }
        }).filter((item) => item.quantity > 0);
        setCartData(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    return (
        <section className='cart-container' onClick={(e) => { e.stopPropagation(); setCartPanel(false); }}>
            <article className='cart' onClick={(e) => { e.stopPropagation(); setCartPanel(true); }}>
                {/* {cartData.map((item, i) => { */}
                {Array.isArray(cartData) && cartData.map((item, i) => {
                    return (
                        <div key={i} className="cart-item">
                            <img src={item.images?.[0] || 'fallback.jpg'} alt={item.title || 'Product'} />
                            {/* <img src={item.images[0]} alt="" /> */}
                            <div className="cartItemDetails">
                                <h3>{item.title}</h3>
                                <p>Price: ${(item.price * (100 - item.discountPercentage) / 100) * item.quantity}</p>
                                <div className="quantity">
                                    <button onClick={() => { increaseQuantity(item.id); }}>+</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={() => { decreaseQuantity(item.id); }}> - </button>
                                </div>

                                <button className='remove' onClick={() => {
                                    const updateCart = cartData.filter((ele) => ele.id !== item.id);
                                    setCartData(updateCart);
                                    localStorage.setItem("cart", JSON.stringify(updateCart));
                                }}>Remove</button>
                            </div>
                            <div className="description">{item.description}</div>
                        </div>
                    )
                })}
                <button className='buy-btn' onClick={(e) => { e.stopPropagation(); setCartPanel(false); setPaymentPage(true); setBuyNowCart(true); }}>BuyNow</button>
            </article>
        </section>
    )
}

export default Cart
