import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserDropdown = () => {
  const navigate = useNavigate();
  return (
    <div className='z-50 absolute bg-white border py-2 pl-2 pr-10  text-left'>
      <div className='p-2'><Link className=' hover:text-slate-500' to={"/profile"}>Profile</Link></div>
      <div className='p-2'><Link className=' hover:text-slate-500' to={"/orders"}>Orders</Link></div>
      <div className='p-2'><Link to="/login" className=' hover:text-slate-500' onClick={() => localStorage.removeItem('token')}>Logout</Link></div>
    </div>
  )
}

export default UserDropdown