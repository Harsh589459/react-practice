import React, { useState } from 'react'

function StatelessVSStatefull() {

    //if it is present it is statefull if state is not present it is stateless component

    const [name,setName] = useState("Harsh")
  return (
    <div>StatelessVSStatefull</div>
  )
}

export default StatelessVSStatefull;


//stateless means no state
