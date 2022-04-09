import React from 'react'
import { Link } from 'react-router-dom'
import './ContacPage.css'

export default function ContactPage() {
    return <div id="div_3">
        <ul>
          
           <Link to='/'><li className='Li-1'>HomePage</li></Link>
            <Link to='/AboutPage'><li className='Li-2'>About</li></Link>
            <Link to="/ContactPage"><li className='Li-3'>Contact</li></Link> 
            <Link to='/CelsusPage' className='Li-4'><li>Celsus</li></Link>
        </ul>
    </div>
}