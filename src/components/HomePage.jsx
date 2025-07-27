import React from 'react'
import products from '../data.json'
import toast from 'react-hot-toast'

function HomePage({ data }) {

    const { cartData, setCartData } = data;

    const handleCart = (product) => {
        const alreadyExist = cartData.find((ele, i) => ele.id == product.id);
        if (alreadyExist) {
            const filterData = cartData.filter((ele, i) => ele.id !== product.id)
            setCartData([...filterData, { ...alreadyExist, quantity: alreadyExist.quantity + 1 }]);
            localStorage.setItem("cart", JSON.stringify(cartData));
        } else {
            localStorage.setItem("cart", JSON.stringify(...cartData, { ...product, quantity: 1 }));
            setCartData([...cartData, { ...product, quantity: 1 }]);
        }
        toast.success('Successfully Added');
    }

    return (
        <section className='main'>
            {products.map((item, i) => {
                return (<div className="card" key={i}>
                    <img src={item.images[0]} alt="" className='image' />
                    <h1>{item.title}</h1>
                    <p><b>Brand: </b> {item.brand} </p>
                    <p><b>Category: </b> {item.category} </p>
                    <p><b>Price: </b> {item.price * (100 - item.discountPercentage) / 100} </p>
                    <p><b>Rating: </b> {item.rating} ⭐ </p>
                    <div className="btn">
                        <button>Buy Now</button>
                        <button onClick={() => { handleCart(item) }}>Add To Cart</button>
                    </div>
                </div>)
            })}
        </section>
    )
}

export default HomePage
