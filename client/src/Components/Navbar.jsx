import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-800 p-4 text-white relative'>
        <ul className="flex flex-row gap-[50vw] text-xl justify-center">
          <div className="nav-opitons flex flex-row gap-[5vw]">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/Conatcts'>Contacts</Link></li>
          </div>
          <div className="Signin">
            <li>
              <button className='bg-violet-950 px-4 py-2 leading-none'>
                <Link to='/Signin'>Sign in</Link>
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar
