import React from 'react'

function Keys() {
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const details = [
        {
            name:"Nishant",
            age: 26,
        },
        {
            name:"Shailesh",
            age:29,
        },
        {
            name:"Abhishek",
            age:27,
        },
        {
            name:"Mayank",
            age:27,
        }
    ]
  return (
    <div>
       {numbers.map((number)=>{
    
       return <li key={number}>{number}</li>;
       })}

       <ul>
        {details.map((detail,index)=>{
            return(
                <div key={index}>
                <li>{detail.name}</li>
                <li>{detail.age}</li>
                </div>
            )
        })}
       </ul>
    </div>
  )
}

export default Keys