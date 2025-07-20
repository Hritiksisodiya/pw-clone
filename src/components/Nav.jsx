import React from 'react'

function Nav() {
  return (
     <nav className="bg-indigo-300 h-14 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 px-4 md:px-4">
          Pw Skills
        </div>
        <ul className="font-semibold md:flex gap-1.5 hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <div className="bg-indigo-800 text-white font-semibold rounded p-0.5 cursor-pointer md:block hidden">
          login/sign up
        </div>
        <div className="md:hidden">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
  )
}

export default Nav