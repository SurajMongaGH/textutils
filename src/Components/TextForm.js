import React,{useState} from "react";

export default function TextForm(props) {

  
    const [text,setText]=useState('')
    const uppercaseClick=()=>{
        let temp=text.toUpperCase();
        setText(temp)
        props.showAlert('Text converted to uppercase','success')
    }
    const lowercaseClick=()=>{
      let temp=text.toLowerCase();
      setText(temp)
      props.showAlert('Text converted to lowercase','success')
  }
  const clearClick=()=>{
    setText('')
}
    const changeHandler = (event)=>{

        setText(event.target.value)
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text copied to clipboard','success')
      }
  return (
    <div>
      <h1 style={{ color:props.mode=== 'dark'?'white': 'black'}}>{props.title}</h1>
      <div  className="container">
      <div className="mb-3">
        <textarea
          className="form-control"
          style={{backgroundColor: props.mode==='dark'? '#374c6d': 'white', color:props.mode=== 'dark'?'white': 'black'}}
          id="myBox"
          rows="12"
          value={text}
          placeholder="Enter text here"
          onChange={changeHandler}
        ></textarea>
      </div>
      </div>
      <button className="btn btn-primary mx-1" onClick={uppercaseClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={lowercaseClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={clearClick}>Clear text</button>
      <div className="container my-4">
        <h2 style={{ color:props.mode=== 'dark'?'white': 'black'}}>Text Summary</h2>
        <p style={{ color:props.mode=== 'dark'?'white': 'black'}}>Word Count = {text.length===0?0:text.split(' ').length}</p>
        <p style={{ color:props.mode=== 'dark'?'white': 'black'}}>Character Count={text.length}</p>
      </div>
    </div>
  );
}
