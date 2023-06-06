import {useState,useEffect}from 'react';
import axios from 'axios';

function RestApi() {
    const[name,setName] = useState("");
    const [users,setUsers] = useState([])
    const [oneUser, setOneUser] = useState({})

    //POST
    const postData = ()=>{
        axios.post('https://647eed63c246f166da8fac58.mockapi.io/users',{
            name:name,
            age:26,
            hobbies:['Poetry', 'Coding', 'Reading Books','Playing Cricket' ]
        })
        .then((res)=>{
            // if post is successfull
            console.log(res.data);
        }).catch((err)=>{
            //if post failed
            console.log(err);
        })
    }

    //get data
    const getData = ()=>{
        axios.get("https://647eed63c246f166da8fac58.mockapi.io/users")
            .then((res)=>{
                setUsers(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    }
    //to get  one user data
    const getOneData = (id)=>{
        console.log(id);
        axios.get(`https://647eed63c246f166da8fac58.mockapi.io/users/${id.target.value}`)
            .then((res)=>{
                console.log(res)
                setOneUser(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })

    }


        //GET
        useEffect(()=>{
            // axios.get("https://647eed63c246f166da8fac58.mockapi.io/users")
            // .then((res)=>{
            //     setUsers(res.data);
            // })
            // .catch((err)=>{
            //     console.log(err);
            // })
            getData();
        },[])

        //Update 
        const updateData = (id)=>{
            axios.put(`https://647eed63c246f166da8fac58.mockapi.io/users/${id}`,{
                name:'Vishal',
                age:30,
                hobbies:['Poetry', 'Coding', 'Reading Books','Playing Cricket','Sleeping' ]


            })
            .then((res)=>{
                // if post is successfull
                console.log(res.data);
            }).catch((err)=>{
                //if post failed
                console.log(err);
            })
        }

        //Delete
        const deleteData = (id)=>{
            axios.delete(`https://647eed63c246f166da8fac58.mockapi.io/users/${id}`)
            .then((res)=>{
                // if delete is successfull
                getData();
            }).catch((err)=>{
                //if delete failed
                console.log(err);
            })
        }
    
  return (
    <div>
        <input placeholder='Name' onChange = {(event)=>setName(event.target.value)}/>
        <button onClick={postData}>POST Data</button>

        {users.map((user)=>{
            return (
                <>
                <h2>{`${user.id}.${user.name}`}</h2>
                <button onClick={()=>updateData(user.id)}>Update</button>
                <button onClick={()=>deleteData(user.id)}>Delete</button>
                </>
            )
        })}
        <br></br>
        <br></br>
<div>

        {/* get by id */}
        <input  onChange={getOneData}/>
        {oneUser.name}
        </div>

    </div>
  )
}

export default RestApi