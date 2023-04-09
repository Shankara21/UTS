import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function BrandIndex() {
  const [brands, setBrands] = useState([])

  const getBrands = async () => {
    let res = await axios.get('http://localhost:5000/brand')
    setBrands(res.data)
  }
  useEffect(() => {
    getBrands()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-2xl">List Brands</p>
        <Link to={'/brandCreate'} class="btn btn-ghost bg-gray-200">Create</Link>
      </div>
      <div class="overflow-x-auto my-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>action</th>
            </tr>
          </thead>
          <tbody>
            {
              brands.map((brand, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className='text-center'>{brand.name}</td>
                    <td className='text-center'>
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-black bg-yellow-400 border-0 hover:bg-yellow-500 btn">Edit</button>
                        <button className="bg-red-500 border-0 hover:bg-red-600 btn ">Delete</button>
                      </div>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
