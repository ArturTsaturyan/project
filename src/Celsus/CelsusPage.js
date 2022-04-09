import React, { useState, useEffect} from 'react'
import Manu from './CelsusPageManu'
import './CelsusPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCelsusLoading } from '../redux/celsus/celsus.action'

// export default function Celsus() {
//     const [change, setChange] = useState("")
//     const [info, setInfo] = useState({ place: "", temp: "" })
//     const [loading, setLoading] = useState(false)

//     const myChange = (e) => {
//         const { value } = e.target
//         setChange(value)
//     }

//     const myClick = () => {
//         setLoading(true)
//         fetch(`http://search.maps.sputnik.ru/search?q=${change}`)
//             .then((req) => {
//                 return req.json()
//             })
//             .then((res) => {
//                 console.log(res);
//                 if (res.result.length === 0) {
//                     alert("invalid place name")
//                     throw new Error("invalid place name")
//                 }
//                 else {
//                     setInfo((x) => {
//                         return { ...x, place: res.result[0].description }
//                     })
//                 }
//                 return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${res.result[0].position.lat}&lon=${res.result[0].position.lon}&APPID=f8ecd14f4515b8ee0fcb3bcdef8f9efe`)
//             })
//             .then((res2) => {
//                 return res2.json()

//             })
//             .then((req2) => {
//                 setInfo((x) => {
//                     return { ...x, temp: Math.round(req2.main.temp - 274) }
//                 })
//                 setLoading(false)
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     return (
//         <div>
//             <input value={change} onChange={myChange} />
//             <button onClick={myClick}>Celsus</button>
//             {loading ? <div>Loading...</div> : null}
//             {info.place !== "" ? <div>{info.place}</div> : null}
//             {info.temp !== "" ? <div>{info.temp}</div> : null}
//         </div>
//     )
// }



    const CelsusPage = () => {

      const dispatch=useDispatch()
      const FFF=useSelector((state)=>state.celsus.loading1)
  
      useEffect(()=>{
          dispatch(setCelsusLoading())
      },[])
  
      console.log(FFF)

      const [name, setName] = useState('')
      const [date, setDate] = useState({ Place: '', celsus: "" })
      const [loading, setLoading] = useState(false)
      const hendlSend = async () => {
        try {
          setLoading(true)
          const response = await fetch(
            `http://search.maps.sputnik.ru/search?q=${name}`
          )
          const data = await response.json();
    
          if (data.result.length === 0) {
            throw new Error('error')
          }
          else {
            const { description } = data.result[0]
            setDate((a) => {
              return { ...a, Place: description }
            })
          }
          const response2 = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${data.result[0].position.lat}&lon=${data.result[0].position.lon}&APPID=f8ecd14f4515b8ee0fcb3bcdef8f9efe`
          )
          const data2 = await response2.json();
          const { temp } = data2.main
          setDate((a) => {
            return { ...a, celsus: temp }
          })
          setLoading(false)
        }
        catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      const hemdleChange =(e) => {
        const {value} = e.target;
        setName(value)
      }
    
      return (
       <div>
        <div>
          <input onChange={hemdleChange}/>
          <button onClick={hendlSend}>click</button>
          {loading ? <div>...loading</div> : null}
          {date.Place !== '' ? <div>{date.Place}</div> : null}
          {date.celsus !== "" ? <div>{Math.round(date.celsus - 273)} celsus</div> : null}
        </div>
        </div>
      )
    }
    export default CelsusPage