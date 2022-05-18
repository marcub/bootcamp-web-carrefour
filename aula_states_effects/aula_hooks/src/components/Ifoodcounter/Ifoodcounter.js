import React, {useState, useEffect} from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(0);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value
    },[value])

    function downValue() {
        if(value < 2) {
            setButtonStyle("counter-button-minus-desactive")
        }
        if(value === 0) {
            setValue(value)
        }
        else {
            setValue(value - 1)
        }
    }

    function upValue() {

        if(value >= 0) {
            setButtonStyle("counter-button-minus-active")
        }

        setValue(value + 1)
    }

  return (
    <div className='countex-wrapper'>

        <button className= {buttonStyle} onClick={downValue}>
            -
        </button>
        <p>{value}</p>
        <button className='counter-button-plus-active' onClick={upValue}>
            +
        </button>

        <button id="moeda">12,00</button>

    </div>
  )
}
