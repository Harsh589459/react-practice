import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
//Debouncing mean delaying a function in javascript

const pinApi=`https://api.postalpincode.in/pincode/`

function Debouncing() {
    const [pin,setPin] = useState("")
    const searchPin = (value)=>{
        
       
    };

    useEffect(()=>{
        const debouncing = setTimeout(()=>{
            axios.get(pinApi + pin).then((res)=>{
                console.log(res.data[0].PostOffice);
            })
            .catch((err)=>{
                console.log(err);
            })
            
        },2000);
        return()=>{
            clearTimeout(debouncing);
        }
    },[pin])
  return (
    <div>
        <input onChange={(event)=>setPin(event.target.value)} placeholder='Enter your pincode'/>
    </div>
  )
}

export default Debouncing