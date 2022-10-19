import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./admin.css"

const Admin = () => {

  // const [data, setdata] = useState([])
  const [data, setdata] = useState({})
  const [bookdata, setBookdata] = useState([])

  const getdata = async (req, res) => {
    const data = await axios.get('/allproducts').then((data) => {

      // settingdata from backedn
      setBookdata(data.data)
    })
  }
  getdata()
  // getdata


  const sendInputs = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('avatar', data.avatar)
    formData.append('author', data.author)
    formData.append('price', data.price)
    await axios.post('/insertdata', formData).then(() => {

    }).catch((error) => {
      console.log(error)
    })
  }
  const inputValue = (click) => {
    let value = click.target.value
    let name = click.target.name
    // if (name == "image") {
    //   value = click.target.files[0]
    //   console.log(value)
    // }
    setdata(
      data => (
        { ...data, [name]: value }
      )
    )
    console.log(data)
  }



  // end get data

  const [avatars, se] = useState(data.avatar)

  const avatar = async (event) => {
    const ava_details = event.target.files[0]
    setdata(
      data => (
        { ...data, avatar: ava_details }
      )
    )
  }
  // code to delete data

  const deletedata = async (id) => {
    console.log(id)
    await axios(`http://localhost:5001/${id}`)
    //  axios.post('')
  }
  // function to handle images


  return (
    <>
      <form action="" className='a' encType='multipart/form-data' onSubmit={sendInputs}>

        <input
          type="text"
          name='name'
          value={data.name || ''}
          placeholder='Enter Name'
          onChange={inputValue}
        />
        <input
          type="text"
          name='author'
          placeholder='Author'
          value={data.author || ''}
          onChange={inputValue}
        />
        <input type="file" name='image'
          value={data.image || ''}
          onChange={avatar} />
        <input
          type="text"
          name='price'
          value={data.price || ''}
          placeholder=' Price'
          onChange={inputValue}
        />

        <input type="submit" />
      </form><div className='admin'>
        <div className="adminnavbar">
          <div className="first">
            <a>All Products</a> </div>
          <div className="b">

          </div>
        </div>
        <div className="adminright">

          <div className='bOOks'>
            {
              bookdata.map((item) => {

                return <div className="card">

                  <img
                    src={item.image}
                    alt=""
                  />
                  {item._id}
                  <h1>{item.name}</h1>
                  <h2>{item.author}</h2>
                  <p>{item.desc}</p>
                  <span>RS. {item.price}</span>
                  <div className="btn">
                    <a href="">edit </a> <button href="" onClick={() => { deletedata(item._id) }}>Delete </button>
                  </div>
                </div>
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}

export default Admin