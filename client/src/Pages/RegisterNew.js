import React, { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Timeline from '../Partials/Timeline'
import TLFuncs from '../Partials/Functions'
import { useHistory } from 'react-router-dom'
import Sponsors from './Components/Sponsor'



const RegisterNew = () => {
  const navigate=useNavigate();
  
  return (
        <>
          <div className="button-container" style={{margin:"2% 0% -2.5% 0%",flexDirection:"row",justifyContent:"space-between"}}>
              <div style={{display:"flex",justifyContent:"start"}}>

                <button type="button" className="join details" style={{background:"none"}}  onClick={() => navigate('/register/teams')}>
                  Available Teams
                </button>
              
              </div>
              <div style={{display:"flex",justifyContent:"end"}}>

                <button type="button" className="join details" style={{background:"none"}} onClick={() => {navigate('/register/members')}}>
                  Team Details
                </button>
              
              </div>
          </div>

    <div className="two" id="two" style={{marginTop:"5%"}}>
          <h1 id="registration" className="reg" style={{margin:"6% 0% 0% 0%",letterSpacing:"0px",fontWeight:"1500"}}>SIH</h1>
          <h1 id="registration" className="regunder " >REGISTRATION</h1>
            <center style={{marginBottom:"2%"}}>
              <div className="button-container">
                <button type="button" className="join" style={{ cursor: "pointer" }} onClick={() => {navigate('/register/code');TLFuncs.second_stage_create()}}>
                  Join Team
                </button>
                <button type="button" className="join" onClick={() => {navigate('/register/create');TLFuncs.second_stage_join()}}>
                  Create Team
                </button>
                
              </div>
            </center>
            <Timeline num={1}/>
    </div>
        </>

  )
}

export default RegisterNew
