import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <h1>Apexy</h1>
            <ul>
                <li>
                    <Link to={'/'}>Latest News</Link>
                </li>
                <li>
                    <Link to={'/sport'}>Sport</Link>
                </li>
                <li>
                    <Link to={'/premum'}>Premum</Link>
                </li>
            </ul>
        </div>
    )
}
