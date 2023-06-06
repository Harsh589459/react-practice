import React from 'react'

function PropsChild({
    valueOfProp, changeNamefunction,childComponentValue
}) {
  return (
    <div>
        <h1>{valueOfProp}</h1>
        {/* //propsFunction */}
        <button onClick={changeNamefunction}>Change Name</button>
    {/* if we want to pass a value from child to parent component */}
    <br></br>
    <br></br>

    <button onClick={()=>childComponentValue("Hello this is Nishant")}>
        pass value from child to parent
    </button>
    </div>
  )
}

export default PropsChild