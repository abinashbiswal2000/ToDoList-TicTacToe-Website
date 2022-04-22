import React, { useState } from 'react'

export default function Textutils(props) {
    
    let style = {}
    if(props.theme === "light"){style = {backgroundColor: "white"}}
    // else{style = {backgroundColor: "gray"}}
    else{style = {backgroundColor: "#ccccff"}}

    let preview;
    if(props.theme === "light"){preview = {backgroundColor: "white"}}
    else{preview = {backgroundColor: "black", color: "orange", fontWeight: "bold", padding: "3px"}}

    const [text, setText] = useState();
    const onChange = (event) => { setText(event.target.value) }

    const toUpper = () => { setText(text.toUpperCase()); console.log(text, 123123); }
    const toLower = () => { setText(text.toLowerCase()) }
    const clear = () => { setText('') }
    const toSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    let textAreaStyle;
    if(props.theme === "dark"){textAreaStyle = {backgroundColor: "black", color: "yellow"}}
    else{textAreaStyle = {backgroundColor: "white", color: "black"}}

    return (
        <div className='a container p-3' style={style}> 
            <textarea className='form-control jj' value={text} onChange={onChange} name="" id="" placeholder='Enter The Text Here' cols="30" rows="10" style={textAreaStyle}></textarea>
            <br />
            <div>
                <div className='mx-3' style={{display: "inline-block", ...preview}}>
                    Number of Character = {text === undefined ? 0 : text.length}
                </div>
                <div className='mx-3' style={{display: "inline-block", ...preview}}>
                    Number of Words = {text === undefined ? 0 : text.split(" ").length - 1}
                </div>
            </div>
            <br />
            <div className="d-grid">
                <button className="btn btn-warning m-1" onClick={toUpper}>Upper Case</button>
                <button className="btn btn-info m-1" onClick={toLower}>Lower Case</button>
                <button className="btn btn-success m-1" onClick={toSpeak}>Speak</button>
                <button className="btn btn-danger m-1" onClick={clear}>Clear</button>
            </div>

        </div>
    )
}
