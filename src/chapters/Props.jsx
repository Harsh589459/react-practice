import React, { useState } from 'react'
import PropsChild from './PropsChild'

function Props() {
  const [name,setName] = useState("Nishant");
  const changeName = ()=>{
    setName("Uday");


  
  }
  const childComponent =(value)=>{
    console.log(value);
    setName(value)  }
  return (
    <div>
      <PropsChild valueOfProp= {name} changeNamefunction={changeName}  childComponentValue = {childComponent}/>
      {/* <button onClick={()=>{
        setName("Uday")
      }}>ChangeName</button> */}
    </div>
  )
}

export default Props