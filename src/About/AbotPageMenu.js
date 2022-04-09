import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function Menu() {
    return <div id='nav'>
        <ul id="ul">
            <Link to='/' className='Li2'><li>HomePage</li></Link>
           <Link to="/AboutPage" className="Li2 Li1"> <li>About</li></Link>
            <Link to='/ContactPage'  className='Li2'><li>Contact</li></Link>
            <Link to='/CelsusPage' className='Li2'><li>Celsus</li></Link>
        </ul>
    </div>
}