// import React from 'react'
// import { useState } from 'react';

// function States() {
//     const[count, setCount] = useState(0);
//     const [name,setName] = useState('');
//     const [isVisible, setIsVisible] = useState(false);
//     const [array, setArray] = useState([{
//         name:'Nishant',
//         age:26
//     },
//     {
//         name:'Uday',
//         age:26,
//     },
// ]);
// const [object,setObject]=useState({
//     name:"Nishant",
// })
//     const increment=()=>{
//         setCount(count+1);
//         setIsVisible(!isVisible);
//         setName("Nishant");
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//         <h1>{name}</h1>
//         {isVisible?(
//             <h1>Visible</h1>
//         ):(
//             <h1>Not Visible</h1>

//         )}
//         <button onClick={increment}>Change State</button>
//     </div>
//   )
// }

// export default States

import React, { Component } from 'react';


export default class States extends Component {
    constructor(){
        super();
        this.state={
            name:'Nishant',
            age:1,
            array:[1,2,3,4,5,6],
        };
    }
    changeStatus=()=>{
        this.setState({
            age: this.state.age*2,
            name:"Uday",
        });

    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        {this.state.array.map((item)=>{
            return item*2;
        })}
        <button onClick={this.changeStatus}>Change State</button>
      </div>
    )
  }
}
