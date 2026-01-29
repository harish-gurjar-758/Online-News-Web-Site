import React from 'react'
import { Link } from 'react-router-dom'
import { TiThMenuOutline } from "react-icons/ti"

export default function NavBar() {
  return (
    <div className="w-full h-20 flex items-center justify-around bg-gray-800 border text-white border-red-100">
      <h1 className="text-2xl font-bold">Apexy</h1>

      <ul className="flex justify-center gap-5">
        <li className="text-[22px]">
          <Link to="/">Latest News</Link>
        </li>
        <li className="text-[22px]">
          <Link to="/sport">Sport</Link>
        </li>
        <li className="text-[22px]">
          <Link to="/premium">Premium</Link>
        </li>
        <li className="text-[22px]">
          <Link to="/technologies">Technologies</Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {/* Dark / Light toggle (fixed) */}
        <input type="radio" name="theme" />

        <TiThMenuOutline size={28} />
      </div>
    </div>
  )
}
