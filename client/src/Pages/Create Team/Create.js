import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useCookies } from "react-cookie";
import Timeline from '../../Partials/Timeline';
import Heropage from "../Components/Heropage";
import { api_url } from "../../config";

const Create = () => {
  const [disp, setDisp] = useState(false)
  const [response, setResponse] = useState({})
  const [error, setError] = useState('')
  const [TeamName, setTeamName] = useState(true)
  const [create1, createError] = useState("Please Enter all Fields")
  const [forms, setForm] = useState(true)
  const [createTeam1, createTeamF1] = useState(true)
  const [createTeam2, createTeamF2] = useState(false)

  const [loading, setLoader] = useState(false)
  const [dispError, setDispError] = useState(false)
  const navigate = useNavigate();
  const [copy, setCopy] = useState(false)
  const myRef = useRef(null)

  const url = api_url + '/register/create';
  const [data, setData] = useState({
    Password: "",
    TeamName: "",
    ConfirmPassword: "",
    Name: "",
    Email: "",
    RollNumber: "",
    PhoneNumber: "",
    Branch: "",
    Year: "Second",
    Gender:"Male",
    TechStack:"",
  })








  function submit(e) {
    e.preventDefault();
    if (error === "") {
      setForm(false)
      setLoader(true)

      axios.post(url, {
        TeamName: data.TeamName,
        Password: data.Password,
        ConfirmPassword: data.ConfirmPassword,
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
            setForm(false)
            setError("")
            setResponse({ Code: res.data.Code, TeamName: res.data.TeamName, URL: res.data.URL })
          }
          else {
            setForm(true)
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
    }


  }






  function copyURL() {
    navigator.clipboard.writeText(response.URL);
    setCopy(true)
  }
  function copyCode() {
    navigator.clipboard.writeText(response.Code);
    setCopy(true)
  }



  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    setError("");


    if (e.target.id === 'FirstName' || e.target.id === 'LastName') {
      if (newdata.FirstName === undefined)
        newdata.FirstName = "";
      if (newdata.LastName === undefined)
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








  function fiSubmit(e) {
    if (create1) {
      setDispError(true)
      setError(create1)
    }
    else if (!create1) {
      createTeamF1(false);
      createTeamF2(true);
    }
  }
  function submitf2(e) {
    if (create1) {
      setDispError(true)
      setError(create1)
    }
    else if (!create1) {
      submit(e);
      ;
    }
  }






  function button(){
    if(createTeam1){
      navigate('/register?i=options'  )
    }
    else if(createTeam2){
      createTeamF1(true); 
      createTeamF2(false)
    }
  }




  

  return (
    <div className="wrapper">
      <div className="two " id="two">
      <h1 id="registration" className="reg" style={{margin:"6% 0% 0% 0%",letterSpacing:"0px",fontWeight:"1500"}}>SIH</h1>
          <h1 id="registration" className="reg regunder" >REGISTRATION</h1>
        {!disp &&(
        <div className="regform">
        <div className="formrow btcenter" style={{marginBottom:"2%",alignContent:"start"}}>
                    <div className="container" id="container">
                      <button class="learn-more" onClick={() => button()}>
                        <span class="circle" aria-hidden="true">
                          <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">{createTeam1?"Home" : "Edit Team"}</span>
                      </button>
                    </div>
                  </div>
        </div>)}
        {disp &&(
        <div className="regform">
        <div className="formrow btcenter">
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








        {forms && <div>

          <form onSubmit={(e) => submit(e)} ref={myRef}>

            {createTeam1 && (
              <div>
               
                <div className="regform">
                 
                  

                  <form onSubmit={(e) => fiSubmit(e)}>
                <div className="regform">

                  <div className="formrow">
                    <input
                      type="text"
                      autoComplete="off"
                      onChange={(e) => handle(e)}
                      value={data.TeamName}
                      id="TeamName"
                      name="TeamName"
                      required
                      placeholder="Team Name"
                    />
                  </div>

                  <div className="formrow">
                    <input
                      autoComplete="off"
                      onChange={(e) => handle(e)}
                      placeholder="Password"
                      value={data.Password}
                      type="password"
                      id="Password"
                      name="Password"
                      required
                      minLength={8}
                    />
                  </div>
                  <div className="formrow">
                    <input
                      autoComplete="off"
                      onChange={(e) => handle(e)}
                      placeholder="Confirm Password"
                      value={data.ConfirmPassword}
                      type="password"
                      id="ConfirmPassword"
                      name="ConfirmPassword"
                      required
                      minLength={8}
                    />
                  </div>
                  <button className="join submit" onClick={() => fiSubmit()}>
                    Next
                  </button>
                </div>

              </form>
                </div>
              </div>
            )}

            {createTeam2 && (
              <>

                <div className="regform hi">
                 
                  <div className="formrow" style={{ marginTop: "4vh" }}>
                    <input onChange={(e) => handle(e)} placeholder="First Name" value={data.FirstName} type="text" id="FirstName" name="FirstName" required />
                    <input onChange={(e) => handle(e)} placeholder="Last Name" value={data.LastName} type="text" id="LastName" name="LastName" required />
                    <input style={{ display: 'none' }} onChange={(e) => handle(e)} placeholder="Name" value={data.Name} type="text" id="Name" name="Name" required />
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

                    <input onChange={(e) => handle(e)} placeholder="Requiered Tech Stack" value={data.TechStack} type="text" id="TechStack" name="TechStack" required />
                  </div>
                  <button type="submit" className="join submit" onClick={(e) => submit(e)}>
                    {"Submit"}
                  </button>
                </div>

              </>
            )}

          </form></div>}


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
        {disp &&
          <div className='msg_contain'>
            <div className="message">
              <h1 className="congrats" style={{ color: 'white' }}>Congratulations!</h1>
              <p style={{ color: 'white' }}>{`You have successfully created team ${response.TeamName}.`}</p>
              <div style={{ display: 'flex', alignItems: 'center',background:'none' }}>

                <br />
                <input type="text" id="copy" value={`${response.Code}`} readOnly />
                <button onClick={copyURL}><i className="fa fa-clone" aria-hidden="true"></i></button>
              </div>
              {copy && (
                <p>Copied successfully</p>
              )}
              <p style={{ color: 'white' }} >Share this link with your teammates. The team code has also been sent to your email.
              </p>
            </div>
          </div>
        }
        {createTeam1 && (<Timeline num={2} />)}
        {createTeam2 && (<Timeline num={3} />)}
      </div>
    </div>
  );
};

export default Create;
