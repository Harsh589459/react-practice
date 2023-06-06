import { useEffect,useState } from "react";

function MapAndFilter(){
  const [users, setUsers]=useState([]);
  const [numbers, setNumbers]= useState([1,2,3,4,5,6,7,8,9,19])
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((json)=>{setUsers(json);
    });
  },[]);

const mapData = ()=>{
  // let mappedArray = users.map((user)=>
  //   user.id*2
  
  // )
  // console.log(mappedArray);
  let filteredData = users.filter((user)=> {
    return user.name.toLowerCase().includes("lea")
  })
  setUsers(filteredData);
  console.log(filteredData)

  // let square = numbers.map((number)=>{
  //   return number*number;
  // })

  //doing filter and map together
  // let numbersLessthan20= numbers.filter((number)=>{
  //   return number>=6
  // }).map((filtered)=>{
  //   return filtered*filtered;
  // })
  
  //doing map and the filter
  let numbersLessThan5 = numbers.map((filtered)=>{
    return filtered *filtered;
  }).filter((number)=>{
    return number<=50;
  })
  setNumbers(numbersLessThan5);
}

  return (
    <div className="App">
      <h1>Users</h1>
      <div className="card-inner">
       {users.map((user)=>(
        <div  style={{border:'1px solid black'}}>
        <div>{user.name}</div>
        <div>{user.username}</div>

        </div>
     ))}
     <div>
      <h1>Numbers</h1>
      {numbers.map((number)=>(
        <div>{number}</div>
      ))}
     </div>
<button onClick={mapData}>mapped Array</button>
      </div>
    </div>

  )
}
export default MapAndFilter;