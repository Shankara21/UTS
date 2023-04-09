import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function VechicleIndex() {
  const [vehicles, setVehicles] = useState([])

  const getVehicles = async () => {
    let res = await axios.get('http://localhost:5000/kendaraan')
    setVehicles(res.data)
  }
  useEffect(() => {
    getVehicles()
  }, [])
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-2xl">List Vehicles</p>
        <Link to={'/vehiclesCreate'} class="btn btn-ghost bg-gray-200">Create</Link>
      </div>
      <div class="overflow-x-auto my-5">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th className='text-center'>Name</th>
              <th className='text-center'>Color</th>
              <th className='text-center'>Price</th>
              <th className='text-center'>action</th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles.map((kendaraan, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className='text-center'>{kendaraan.name}</td>
                    <td className='text-center'>{kendaraan.color}</td>
                    <td className='text-center'>Rp. {new Intl.NumberFormat().format(kendaraan.price)}</td>
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
