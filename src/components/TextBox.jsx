import React, { useState } from 'react'


export default function TextBox({heading,mode,showAlert}) {
  const [text,setText]=useState("")

  const handleUpSubmit=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    showAlert("Converted to Uppercase", "success");
  }
  const handleLoSubmit=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    showAlert("Converted to Lowercase", "success")
  }

  const handleClearSubmit=()=>{
    let newText=""
    setText(newText);
    showAlert("Text cleared", "success")
  }

  const handleOnChange=(e)=>{
    console.log("On change")
    setText(e.target.value);
  }

  const handleCopy=()=>{
    var text=document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Text Copied", "success")
  }

  return (<>
<div className='container' style={{color: mode==='dark'?'white':'black'}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{heading}</label>
  <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style= { {backgroundColor: mode==='light'? 'white':'grey',color: mode==='dark'?'white':'black' }}></textarea>

  <button className="btn btn-primary my-3" onClick={handleUpSubmit}>Convert to Uppercase</button>
  <button className="btn btn-primary my-3 mx-3" onClick={handleLoSubmit}> Convert to Lowercase</button>
  <button className="btn btn-primary my-3 " onClick={handleClearSubmit}>Clear Text</button>
  <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>

</div>
<div className="container my-3" style={{color: mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters.</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview"}</p>
</div>



</>
  )
}
