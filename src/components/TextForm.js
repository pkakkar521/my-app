import React , {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState(' ');
  const handleUpClick=()=>{
    console.log("upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper case","success");
  }
  const handleLoClick=()=>{
    console.log("lower case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower case","success");

  }
  const handleOnClear=()=>{
    setText('');
    props.showAlert("Cleared","success");
   
  }
  const handleOnCopy=()=>{
    navigator.clipboard.writeText(text);
    setText('');
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");

  }
  const handleOnExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Converted to Extra Spaces","success");

  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2 className='mb-2'>{props.heading}</h2>
    <div className="mb-3">
 
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(6 9 92)':'white', color:props.mode==='dark'?'white':'black'}} id="box" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleUpClick}>covert to uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleLoClick}>covert to lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleOnClear}>clear text</button>
    
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleOnCopy}>copy text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"onClick={handleOnExtraSpaces}>clear extra spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary is</h2>
      <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
      <p> {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
      <h2>Preview
      </h2>
      <p> {text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
