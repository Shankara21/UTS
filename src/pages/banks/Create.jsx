import React from 'react'
import { Link } from 'react-router-dom'

export default function BankCreate() {
  return (
    <div>
      <Link to='/banks' className='mb-3 btn'> Kembali</Link>
      <p className='mb-4 text-2xl font-semibold'>Create Banks</p>
      <div className="w-full max-w-xs mb-4 form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" className="w-full max-w-xs input input-bordered" />
      </div>
      <button className='btn'>Submit</button>
    </div>
  )
}
