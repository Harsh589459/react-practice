import React from 'react'
import { useState } from 'react';
// import "./App.css"

function Forms() {

  const [objData, setObjData] = useState({});
  const getInputs = (value,name)=>{
    let data = {[name]:value}
    setObjData({...objData,...data})

  }
  console.log(objData);

  const submit = (event)=>{
    event.preventDefault();
    
    console.log(objData);
  }
  return (
<form onSubmit={submit}>
    <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
      <input placeholder='write your name' name='name'type='text' onChange={(event)=>getInputs(event.target.value,event.target.name)}/>
      <input placeholder='write your Age' name='age'type='number' onChange={(event)=>getInputs(event.target.value,event.target.name)}/>
      <input placeholder='write your Hobbies' name='hobbies' type='text' onChange={(event)=>getInputs(event.target.value,event.target.name)}/>
      <input placeholder='write your Date' name='date' type='date' onChange={(event)=>getInputs(event.target.value,event.target.name)}/>
      <input  name='date' type='file' onChange={(event)=>getInputs(event.target.value,event.target.name)}/>
    {/* <button onClick={submit}>Submit</button> */}
    <button type='submit'>Submit</button>
    <button  type='reset'>Reset</button>
    </div>
    </form>
    )
}

export default Forms