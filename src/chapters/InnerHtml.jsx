import React from 'react'
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useState } from 'react';

function InnerHtml() {
    //this is hml
    let data = `<p style="font-size:30px; color:red">This is my Home</p>`;
    let data2 = `<b style="font-size:30px; color:blue">This is my Home</b>`;


    const [quill,setQuill] = useState("");

    const getQuillData =  (value)=>{
        setQuill(value);

    }
    console.log(quill);
  return (
    <div>
        <div dangerouslySetInnerHTML={{__html:data}}>

        </div>
        <div dangerouslySetInnerHTML={{__html:data2}}></div>
        {/* //this is jsx */}
        <p style={{fontSize:'30px',color:'green'}}>This is my Home</p>


        <div dangerouslySetInnerHTML={{__html:quill}}>
            </div>

        <ReactQuill onChange={getQuillData}/>
    </div>
  )
}

export default InnerHtml