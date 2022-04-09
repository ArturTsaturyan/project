import React, { useState,useEffect } from 'react'
import Menu from './ContacPageManu'
import './ContacPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/contact/contact.action'

export default function ContactPage() {

    const dispatch=useDispatch()
    const hhh=useSelector((state)=>state.contact.loading)

    useEffect(()=>{
        dispatch(setLoading())
    },[])

    console.log(hhh)

    const [count, setCount] = useState({ name: "", srName: "", email: "", password: "" })

    const hendleChange = (e) => {
        const { value, name } = e.target
        setCount((prevState) => {
            return { ...prevState, [name]: value }
        })
        console.log(count);
    }

    const myClick = () => {
        if (count.name == "" || count.srName == "" || count.email == "" || count.password.length < 8) {
            alert("lracreq bolory")
        }
    }

    return (
        <>
            <Menu />
            <div className="div_co">
                <input className="ip" onChange={hendleChange} placeholder="Name" name="name" value={count.name} />
                <input className="ip1" onChange={hendleChange} placeholder="Srname" name="srName" value={count.srName} />
                <input className="ip2" onChange={hendleChange} placeholder="Emeil" name="email" value={count.email} />
                <input type='password' onChange={hendleChange} className="ip3" placeholder="Passeword" name="password" value={count.password} />
                <br />
                <button className="but" onClick={myClick}>Click</button>
            </div>
        </>
    )
}