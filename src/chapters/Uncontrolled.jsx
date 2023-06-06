import React from 'react'
import { createRef, useState } from 'react'
//Controlled component means handling data in same component
//Uncontrolled componnet means handling data from dom. In this case the component is not refreshed because we get the value from dom


function Uncontrolled() {

  let name = createRef();
  let age = createRef()
  
  const getName = (event)=>{
    console.log(event.target.value);

  }
  const getAge = (event)=>{
    console.log(event.target.value); 

  }
  const submit = ()=>{
    console.log(name.current.value);
    console.log(age.current.value);
  }
   
  return (
    <div className="App">
      
      {/* Uncontrolled Components */}

      {/* <input placeholder='Name' ref={name}/>
      <input placeholder='Age' ref={age}/> */}

      {/* Controlled Components */}
      <input placeholder='Name' onChange={getName}/>
      <input placeholder='Age'onChange={getAge}/>
      <button onClick={submit}>Submit</button>
    </div>
   
  )
}

export default Uncontrolled