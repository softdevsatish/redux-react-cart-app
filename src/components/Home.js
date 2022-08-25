
import React from 'react'

function Home(props) {
    return (
        <div className='main'>


            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.fonearena.com/blog/wp-content/uploads/2022/02/motorola-edge-30-pro-1.jpg" alt='' />
                </div>
                <div className="text-wrapper item">
                    <span className='name'>
                        Motorola
                    </span>
                    <span className='price'>
                        Price: Rs.1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ pice: 1000, name: 'Motorola Edge 30 Pro' }) }
                        }>
                        Add To Cart</button>
                    <button
                        onClick={
                            () => { props.removeCartHandler() }
                        }>
                        Remove Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home