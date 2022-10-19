import React, { useState } from 'react'
import { useEffect } from 'react'
import AddCart from '../basket/AddCart'
import "./header.css"
const Header = () => {
    const [cart, setcart] = useState(false)
    const [no, NoS] = useState(0)
    useEffect(() => {
        const index = JSON.parse(localStorage.getItem('itemonBasket'))

        if (index) {
            NoS(index.length)
            console.log(index.length)
        }
    })
    return (<React.Fragment>
        <div className='navigation'>
            <div className="left">
                <img src="https://image.shutterstock.com/image-vector/young-pretty-girl-reads-on-260nw-764690122.jpg" alt="" />
                <h1>BookHouse</h1>
            </div>

            <div align="right" className="right"  id='right'>
                <ul>
                    <a href="">Home</a>
                    <a href="">About</a>

                    <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="" onClick={() => setcart(true)} width='18rem' height='18rem' />
                </ul>
                <span className='cartnumber'>{no}</span>
            </div>

        </div>
        {(cart == true) ? <AddCart cart={setcart} /> : ""}
    </React.Fragment >
    )
}

export default Header