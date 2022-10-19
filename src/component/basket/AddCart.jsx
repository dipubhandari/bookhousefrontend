import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Add.css"

const AddCart = (props) => {

  const [cart, setcart] = useState([])
  const [msg, setMsg] = useState("")
  // variable for total
  let total = 0

  useEffect(() => {

  })


// remove all

  const removeAll = () => {
    localStorage.removeItem('itemonBasket'); 
    console.log((cart)); 
    setcart([])
    console.log(cart)
  }


  const remove = (i) => {
    const data_after = cart.filter((books) => {
      return books.id != i
    })
    setcart(data_after)
    console.log(data_after)
    localStorage.setItem('itemonBasket', JSON.stringify(data_after))
    console.log(i)
  }

  // 
  useEffect(() => {
    const get_data_from_localstorage = localStorage.getItem('itemonBasket')
    if (get_data_from_localstorage) {
      const cartData = JSON.parse(get_data_from_localstorage)
      setcart(cartData)

    }
    else {
      setMsg("Please Add to cart")
      console.log(msg)
    }
  }, [])




  return (
    <div className='add_to_cart'>
      <h1 className='carttop'>Cart Items</h1>

      <div className="cartContainers">
        <table className='table'>


          <thead>
            <tr>

              {/* <td>SN</td> */}

              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {

              cart.map((data, i) => {
                let price = parseInt(data.price)
                total = (total + price)

                return <tr align='center'>
                  <td>{i + 1}</td>
                  <td>{data.book}</td>
                  <td>{data.price}</td>

                  <td> <button className='delbtn' onClick={() => { remove(data.id) }}>DELETE</button></td>

                </tr>


              })
            }

            {/* <tr>x</tr> */}

          </thead>
          <div className="divprice">

            <th>Total Rs {total}</th>
          </div>
        </table>

      </div>
      <div className="cart_btns">
        <button onClick={() => { props.cart(false) }}>back</button>
        <button className=''>Confirm</button>
        <button className="" onClick={removeAll}>Remove All</button>
      </div>
    </div>
  )
}

export default AddCart