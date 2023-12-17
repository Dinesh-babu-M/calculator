import React from 'react';
import { useState } from 'react';
import './calculator.css'

function Calculator(){

    const [inputValue, setInputValue] = useState("");

    function display(value){
      setInputValue(inputValue+value)
    }

    function calculate() {
      try {
        let result = eval(inputValue);
        setInputValue(result.toString());
      } catch (error) {
        alert(`Please provide correct value `);
      }
    }

    function clear(){
      setInputValue("")
    }


  return (
    <div className="calculator-conta">
        <form name="calculator" className="calculator">
            <input type="text" className="value" value={inputValue} placeholder="0" />
            <span className="num clear" onClick={()=>clear()}>C</span>
            <span onClick={()=>display("/")} className="add">/</span>
            <span onClick={()=>display("*")} className="add">*</span>
            <span onClick={()=>display("7")}>7</span>
            <span onClick={()=>display("8")}>8</span>
            <span onClick={()=>display("9")}>9</span>
            <span onClick={()=>display("-")} className="add">-</span>
            <span onClick={()=>display("4")}>4</span>
            <span onClick={()=>display("5")}>5</span>
            <span onClick={()=>display("6")}>6</span>
            <span className="num plus add" onClick={()=>display("+")}>+</span>
            <span onClick={()=>display("1")}>1</span>
            <span onClick={()=>display("2")}>2</span>
            <span onClick={()=>display("3")}>3</span>
            <span onClick={()=>display("0")}>0</span>
            <span onClick={()=>display("00")}>00</span>
            <span onClick={()=>display(".")}>.</span>
            <span className="num equal" onClick={()=>calculate()}>=</span>
            
        </form>
    </div>
  )
}

export default Calculator