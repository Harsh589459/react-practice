import React, { useEffect } from 'react'

function InlineConditional() {
    let age = 26;
    let name = "Nishant";
    useEffect(() => {
        // let age = 26;
        // let name = "Nishant";
        // if (age > 26) {
        //     console.log("You are not old")
        // }
        // else if (name === "Nishant" && age === 26) {
        //     console.log("I am 26 years old");
        //     console.log("Nishant is my Name")
        // }
        // else {
        //     console.log("Nishant is my name");
        //     clg("I am less than 26 years old")
        // }

        age > 26 ? (console.log("You are not old")
        ) : name === "Nishant" && age === 26 ? (
            <>
                {console.log("I am 26 years old")}
                {console.log("Nishant is my Name")}
            </>
        ) : (
            <>
                {console.log("I am 26 years old")
                }           {console.log("Nishant is my Name")}        </>


        )
    }, [])
    return (
        <div>
            {
                age > 26 ? (<h1> You are now old</h1>
                ) : name === "Nishant" && age === 26 ? (
                    <>
                    <h1>I am 26 years old</h1>
                        <h1>Nishant is my Name</h1>
                    </>
                ) : (
                    <>
                        <h1>I am 26 years old</h1>
                 <h1>Nishant is my Name </h1>     </>
        
        
                )
            }
        </div>
    )
}

export default InlineConditional