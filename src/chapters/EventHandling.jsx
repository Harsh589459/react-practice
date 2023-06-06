//Event Handling is a method to call functions in react
import React from 'react'

function EventHandling() {
    const getInput=(event)=>{
        console.log(event.target.name);
        console.log(event.target.value);


    }
    const addNums = (num1, num2)=>{
        console.log(num1+ num2);
    }
  return (
    <div>
        <input placeholder='Add Something..'onChange={getInput} name="input"/>
        <button onClick={()=>addNums(2,3)}>Add Numbers</button>
    </div>
  )
}

export default EventHandling