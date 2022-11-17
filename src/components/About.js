import React from 'react'

export default function About(props) {
   // const [myStyle, setMyStyle] = useState(
 //{
   //  color:'black',
     //backgroundColor:'white'
    //})
    let myStyle = {
        color: props.mode === 'dark'?'white':'#010b1c'
        ,backgroundColor : props.mode === 'dark'?'#010b1c':'white'
        
    }
    /*const [btntext, setBtnText] = useState("Enable Dark Mode")
     const toggleStyle = ()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
     backgroundColor:'black',
     border:'1px solid white'
        })
        setBtnText("Enable Light Mode")
    }
    else{ setMyStyle({
        color:'black',
 backgroundColor:'white'
    })
    setBtnText("Enable Dark Mode")
    }
    }*/
  return (
         <div className="container" style={{ color: props.mode === 'dark'?'white':'#010b1c'}}>
            <h2 className="my-3">About us</h2>
                <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>  Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    This is to inform you all to analyze your text before executing so that it could be handle carefully.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong> Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                   Free to use this application so that your work becomes easy and targeted goals could be achieved properly.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong> Browser compatibility </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Browser compatibility is must because if compatibility is not there then problems could be arrived and then works might be disturbed.
                </div>
                </div>
            </div>
            </div>
            
         </div>
  )
}
