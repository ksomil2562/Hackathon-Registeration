import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
//import {first_stage,second_stage,third_stage} from '../Partials/Functions.js';
const Timeline = (props) => {
  useEffect(()=>{

    if(props.num===1) {
      document.getElementById("stage_1").classList.add("num-active");
      document.getElementById("stage_2").classList.remove("num-active");
      document.getElementById("stage_3").classList.remove("num-active");
    }
    if(props.num===2) {
      document.getElementById("stage_1").classList.remove("num-active");
      document.getElementById("stage_2").classList.add("num-active");
      document.getElementById("stage_3").classList.remove("num-active");
    }
    if(props.num===3) {
      document.getElementById("stage_1").classList.remove("num-active");
      document.getElementById("stage_2").classList.remove("num-active");
      document.getElementById("stage_3").classList.add("num-active");
    }
    
  },[])



  return (
    <>
    <div className="timeline">  
      <div className="num num-active" id="stage_1">
        <span className='numSpan'>1</span>
      </div>
      <hr style={{width:"70px",height:"0"}} />
      <div className="num num-active" id="stage_2">
        <span className='numSpan'>2</span>
      </div>
      <hr style={{width:"70px",height:"0"}} />
      <div className="num num-active"  id="stage_3">
        <span className='numSpan'>3</span>
      </div>
    </div>
    <div className='ExtraCover'></div>
    </>
  )
}

export default Timeline