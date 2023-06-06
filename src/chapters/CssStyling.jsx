import React from 'react'

const styles = {
    internal:{
        color:'red',
    },
    dark:{
        backgroundColor:'white',
        color:'black'
    },
    light:{
        backgroundColor:'black',
        color:'white',
    }
}

function CssStyling() {
    const[theme,setTheme] = React.useState(false);

   const toggleTheme = ()=>{
    setTheme(!theme);
   }
  return (
    <div >
<h1 style={styles.internal}>Internal Styling</h1>
<h1 style={theme? styles.light:styles.dark}>Internal conditional styling</h1>
<h1 style={{color:'green', backgroundColor:'black'}}>Inline Styling</h1>
<button onClick={toggleTheme}> Toggle Theme</button>
    </div>
  )
}

export default CssStyling