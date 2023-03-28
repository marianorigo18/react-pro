import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
          <ul className='flex flex-col text-cyan-50 underline underline-offset-1 bg-slate-400'>
            <Link to={"/"}>home</Link>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar