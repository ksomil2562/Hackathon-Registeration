import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Timeline from '../../Partials/Timeline';
import Heropage from "../Components/Heropage";
import { api_url } from "../../config";
const Join = () => {

  const [show, setShow] = useState(true);
  const [TeamName, setTeamName] = useState(false);
  const [forms, setForm] = useState(true)
  const [loading, setLoader] = useState(false)
  const [disp, setDisp] = useState(false)
  const [response, setResponse] = useState({})
  const [error, setError] = useState('')
  const [dispError, setDispError] = useState(false)
  const [create1, createError] = useState("Please Enter all Fields")
  const [home,showHome]=useState(false);


  const navigate = useNavigate();
  const params = useParams();
  const code = (params.id).substring(1)



  const [data, setData] = useState({
    Name: "",
    Email: "",
    RollNumber: "",
    PhoneNumber: "",
    Branch: "",
    Year: "Second",
    Gender:"Male",
    TechStack:"",
  })

  useEffect(() => {
    const url2 = api_url + `/register/info`;
    axios.post(url2, {
      code: code
    })
      .then(res => {
        if (res.data.status) {
          setDispError(false)
          setShow(true);
          setTeamName(res.data.TeamName)
        }
        else {
          setShow(false);
          if (res.data.message)
            setError(res.data.message);
          else
            setError("Something went wrong")
          setDispError(true)
        }
      })
  }, [])


  function submit(e) {
    setForm(false)
    setShow(false)
    setLoader(true)
    e.preventDefault();
    if (!dispError) {
      if (error == "") {
        
        const url = api_url + `/register/:${code}`;

        axios.post(url, {
          Name: data.Name,
          Email: data.Email,
          RollNumber: data.RollNumber,
          PhoneNumber: data.PhoneNumber,
          Branch: data.Branch,
          Year: data.Year,
          Gender: data.Gender,
        TechStack:data.TechStack
        })
          .then(res => {
            if (res.data.status) {
              setLoader(false)
              setDispError(false)
              setDisp(true)
              showHome(true)
              setForm(false)
              setError("")
              setResponse({ TeamName: res.data.TeamName })
              setShow(false)
              // navigateToSuccess(code,TeamName);
            }
            else {
              if (res.data.message === "Team is full !!") {
                setLoader(false)
                setError(res.data.message);
                setDispError(true)
              }
              setForm(true)
              setShow(true)
              setLoader(false)
              if (res.data.message)
                setError(res.data.message);
              else
                setError("Something went wrong")
              setDispError(true)
            }
          }
          )
      }
      else {
        e.preventDefault();
        setDispError(true)
        alert(error)
      }
    }
  }




  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    setError("");
    if (e.target.value) {
      setError("");
      setDispError(false)
      createError("");
    }
    else {
      setDispError(true)
      setError(create1)
    }

    if (e.target.id === 'FirstName' || e.target.id === 'LastName') {
      if(newdata.FirstName===undefined)
      newdata.FirstName = "";
      if(newdata.LastName===undefined)
      newdata.LastName = "";
      newdata.Name = newdata.FirstName + ' ' + newdata.LastName;
      setData(newdata);
    }
    // For Confirm Password
    if (e.target.id === "ConfirmPassword") {
      if (e.target.value === data.Password) {
        e.target.style.border = "none";
        setError("");
        createError("")
      } else {
        e.target.style.border = "1px solid red";
        setError("Password is not matching with confirm password");
        createError("Password is not matching with confirm password")
      }
    }

    // For email
    if (e.target.id === "Email") {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (e.target.value.match(validRegex)) {
        e.target.style.border = "none";
        setError("");
        createError("")
      } else {
        e.target.style.border = "1px solid red";
        setError("Invalid Email address");
        createError("Invalid Email Address")
      }
    }

    if (e.target.id === "PhoneNumber") {
      if (e.target.value.length === 10) {
        e.target.style.border = "none";
        setError("");

      } else {
        e.target.style.border = "1px solid red";
        setError("Invalid Phone Number");
      }
    }
    if (e.target.id === "RollNumber") {
      if (e.target.value.length === 9) {
        e.target.style.border = "none";
        setError("");
      } else {
        e.target.style.border = "1px solid red";
        setError("Invalid Roll Number");
      }
    }
  }


  return (
    <div className="wrapper">
      <div className="two " id="two">

      <h1 id="registration" className="reg" style={{margin:"6% 0% 0% 0%",letterSpacing:"0px",fontWeight:"1500"}}>SIH</h1>
          <h1 id="registration" className=" regunder" >REGISTRATION</h1>
        {forms && (
          <div className="regform" style={{display:"flex",float:"left",justifyContent:"start",margin:"-4.1% 5% 1% 4%"}}>
            <div className="formrow btcenter">
              <div className="container" id="container">
                <button class="learn-more" onClick={() => navigate('/register/code')}>
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Edit Code</span>
                </button>
              </div>
            </div>
          </div>
        )}


{home &&(
        <div className="regform" style={{display:"flex",float:"left",justifyContent:"start",margin:"-4.1% 5% 1% 4%"}}>
        <div className="formrow btcenter" >
                    <div className="container" id="container">
                      <button class="learn-more" onClick={() => navigate('/register')}>
                        <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">{"Home"}</span>
                      </button>
                    </div>
                  </div>
        </div>)}

        {show && (
          <form onSubmit={(e) => submit(e)}>

            <div className="regform joinin">
            <h1 className="teamname teamhead" >Team {TeamName} : Member Registration Form</h1>
              <div className="formrow">
                <input onChange={(e) => handle(e)} placeholder="First Name" value={data.FirstName} type="text" id="FirstName" name="FirstName" required />
                <input onChange={(e) => handle(e)} placeholder="Last Name" value={data.LastName} type="text" id="LastName" name="LastName" required />
                <input style={{ display: 'none' }} placeholder="Name" value={data.Name} type="text" id="Name" name="Name" required />
              </div>
              <div className="formrow">
                <input onChange={(e) => handle(e)} placeholder="Email" value={data.Email} type="email" id="Email" name="Email" required />
                <input onChange={(e) => handle(e)} placeholder="Roll Number" value={data.RollNumber} type="number" id="RollNumber" name="RollNumber" required />
              </div>
              <div className="formrow">
                    <select onChange={(e) => handle(e)} name="Gender" value={data.Gender} id="Gender">
                      <option value="Male" selected>Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
              <div className="formrow">
                <input onChange={(e) => handle(e)} placeholder="Branch" value={data.Branch} type="text" id="Branch" name="Branch" required />
                <select onChange={(e) => handle(e)} name="Year" value={data.Year} id="Year">
                  <option value="First" selected>First</option>
                  <option value="Second" >Second</option>
                  <option value="Third">Third</option>
                  <option value="Fourth">Fourth</option>
                </select>
              </div>
              <div className="formrow">
                <input onChange={(e) => handle(e)} placeholder="Phone Number" value={data.PhoneNumber} type="number" id="PhoneNumber" name="PhoneNumber" required />
                <input onChange={(e) => handle(e)} placeholder="Tech Stack" value={data.TechStack} type="text" id="TechStack" name="TechStack" required />
                  </div>
              <button type="submit" className="join submit" onClick={(e) => submit(e)}>
                {"Submit"}
              </button>
            </div>
          </form>)}
        {/* Error */}
        {dispError &&
          <div>
            <p className="error">{error}</p>
          </div>
        }

        {/* //Success */}
        {loading && <div className='Loader'>
          <div className="loading"></div>
        </div>
        }
        {/* //Success */}
        {disp && <div className='msg_contain'>
          <div className="message">
            <h1 className="congrats" style={{ color: 'white' }}>Congratulations!</h1>
            <p style={{ color: 'white' }}>{`You have successfully joined team ${response.TeamName}.`}</p>
          </div>
        </div>
        }

        <Timeline num={3} />
      </div>

    </div>
  );

};

export default Join;
