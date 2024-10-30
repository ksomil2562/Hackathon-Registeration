import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from "react-cookie";
import Timeline from "../../Partials/Timeline";
import { api_url } from "../../config";


const Code = () => {
  const [error, setError] = useState('')
  const [dispError, setDispError] = useState(false)
  const [create1, createError] = useState("Please Enter all Fields")
  const [joincode, form] = useState(true)
  const [loading, setLoader] = useState(false)
  const navigate = useNavigate();
  const navigateToMember = (URL) => {
    navigate(URL)
  }
  const navigateToRegister = () => {
    navigate(`/register`)
  }

  const url = api_url + '/register/code';
  const [data, setData] = useState({
    Code: ""
  })



  function submit(e) {
    form(false);
    setLoader(true);
    e.preventDefault();
    if (!dispError) {


      axios.post(url, {
        Code: data.Code
      })
        .then(res => {
          if (res.data.status) {
            navigateToMember(`/register/:${res.data.Code}`)
          }
          else {
            setLoader(false);
            if(res.data.message)
            setError(res.data.message);
            else
            setError("Something went wrong")
            setDispError(true)
            form(true);
          }
        }
        )
    }
    else {
      setDispError(true)
      setError(error);
    }

  }



  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);

    if (e.target.id === 'Code') {
      if (e.target.value) {
        setDispError(false);
        setError("");
      }
      else {
        setDispError(true);
        setError(create1)
      }
    }

  }


  return (
    <div className="wrapper">
      <div className="two" id="two">

      <h1 id="registration" className="reg" style={{margin:"6% 0% 0% 0%",letterSpacing:"0px",fontWeight:"1500"}}>SIH</h1>
          <h1 id="registration" className=" regunder" >REGISTRATION</h1>
        <div className="regform" >
          <div className="formrow btcenter" >
            <div className="container" id="container">
              <button className="learn-more" onClick={() => navigate('/register')}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Home</span>
              </button>
            </div>
          </div>
        </div>
        {joincode &&
        <center style={{ marginTop: "3vh" }} className="regform">
          <form onSubmit={(e) => submit(e)}>
            <div className="formrow cntr">
              <input onChange={(e) => handle(e)} placeholder="Team Code" value={data.Code} type="text" id="Code" name="Code" required minLength={8} maxLength={8} />
            </div>

            <button type="submit" className="join submit">
              {"Submit"}
            </button>


          </form>
        </center>
        }
        {loading && <div className='Loader'>
          <div className="loading"></div>
        </div>
        }
        {dispError &&
          <center>
            <p className='error'>{error}</p>
          </center>
        }

        <Timeline num={2} />
      </div>
    </div>
  )
}

export default Code
