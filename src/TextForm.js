import React from "react";
import { useState } from "react";

function TextForm(props) {

    const[text,setText]=useState('Enter Text Here');
    const onChangeHandle=(event)=>{
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)        
        props.showAlert("Converted to lowercase!","success")

    }
    const handleClearClick=()=>{
        setText("")
        props.showAlert("Text Cleared!","success")
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const removeExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

  return (
    <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
    <div class="mb-3">
      <textarea
        class="form-control"
        id="myBox"
        rows="8"
        value={text}
        onChange={onChangeHandle}
        ></textarea>
        </div>

        <button type="button" class="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button type="button" class="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button type="button" class="btn btn-primary mx-1" onClick={removeExtraSpace}>Remove Extra Spaces</button>

        <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black' }}>
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{text.split(' ').length*0.008} Minutes read</p>
            <h1>Preview</h1>
            <p>{text===''?"Enter something in the textbox":text}</p>
        </div>
    </div>
  );
}

export default TextForm;
