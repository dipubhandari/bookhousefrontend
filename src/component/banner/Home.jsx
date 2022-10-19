import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Books from '../books/Books';
import Header from "../header/header"
import "./home.css"

const Home = () => {
    const [searchkey, setSearch] = useState("");
    const [searchDatas, setsearchDatas] = useState([])
    console.log(searchDatas)
    // search 

    const search = (e) => {

        setSearch(e.target.value)
        console.log("searched bhayo")
    }
    // search
    return (
        <>
            <Header />
            <div className='content' style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/beautiful-teenage-girl-reading-book-sandy-beach_358320-4663.jpg?w=2000')" }}>


                {/* https://img.freepik.com/premium-photo/beautiful-teenage-girl-reading-book-sandy-beach_358320-4663.jpg?w=2000 */}
                <h2>Find Your Book Of Choice</h2><p>
                    Here you can find the books... keep enjoying the reading
                </p>
                <input type="text" placeholder='Search books' onChange={search} name='search' />
            </div>
            <Books search={search} userbookneed={searchkey} />
        </>
    )
}

export default Home