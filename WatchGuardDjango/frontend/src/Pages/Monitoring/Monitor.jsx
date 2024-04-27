import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Monitor() {
  return (
    <div className='w-screen h-screen bg-gray-9'>
        <Outlet/>
    </div>
  )
}
