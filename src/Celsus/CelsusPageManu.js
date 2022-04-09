import React from 'react'
import Celsus from './CelsusPage'
import './CelsusPage.css'
import { Link } from 'react-router-dom'

export default function Manu() {
    return (
        <div >
            <div id="div_14">
              <ul>
          
          <Link to='/'><li className='Li--1'>HomePage</li></Link>
           <Link to='/AboutPage'><li className='Li--2'>About</li></Link>
           <Link to="/ContactPage"><li className='Li--3'>Contact</li></Link> 
           <Link to='/CelsusPage' className='Li--4'><li>Celsus</li></Link>
       </ul>
      <div className="cel">  
                <Celsus/>
               
        </div>
     </div>
     </div>
    )
}
