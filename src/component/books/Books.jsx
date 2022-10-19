import React, { useEffect, useState } from 'react'
import "./Books.css"
import axios from 'axios'
const Books = (pr) => {
    const [booksData, setBookdata] = useState([

    ])
    const [trackey, setrack] = useState(pr.userbookneed)
    // setSearch 
    useEffect(() => {
        if ((pr.userbookneed) != '') {
            setrack(pr.userbookneed)
            console.log("data")
            console.log(pr.userbookneed)
            const filter = booksData.filter((item) => {
                return item.name.includes(pr.userbookneed)
            });
            if (filter != '') {
                setBookdata(filter)

            }
            else {
                // setBookdata([])
            }
        }
        else {
            const data = axios.get('/allproducts').then((data) => {
                setBookdata(data.data)
            })
        }
    }, [pr.userbookneed])

    // getting all details from api

    useEffect(() => {
        const data = axios.get('/allproducts').then((data) => {
            setBookdata(data.data)
        })
    }, []);



    // getting all detail done here
    // books add to cart
    const [datas, setItems] = useState([])
    // on add to cart handle
    const setCard = async (id,book, price) => {
        
        setItems([...datas, { id,book, price }])
        localStorage.setItem('itemonBasket', JSON.stringify(datas))
    }
    useEffect(() => {
        // localStorage.setItem('itemonBasket', [])
    }, [])

    return (
        <div className='bOOks'>
            {
                booksData.map((item) => {
                    return <div className="bookbox">
                        <img
                            src={item.image}
                            alt=""
                        />
                        <h1>{item.name}</h1>
                        <h2>{item.author}</h2>
                        <p>{item.desc}</p>
                        <span>RS. {item.price}</span>
                        <div className="btn">

                            <button onClick={() => setCard(item._id,item.name, item.price)} >Add to Cart </button>
                            <button>Quick BUY</button>
                        </div>
                    </div>
                })
            }
        </div >
    )
}

export default Books