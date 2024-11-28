import React, { useState, useEffect, useRef } from 'react';
import {useNavigate, useSearchParams } from 'react-router-dom';
// import Timeline from '../Partials/Timeline';
import axios from "axios";
import { Link } from "react-router-dom";



const Heropage = (props) => {


    const [timer, setTimer] = useState(calculateTimeRemaining());
  const [searchParams, setSearchParams] = useSearchParams();


    function calculateTimeRemaining() {
      const targetDate = new Date('July 21, 2023 18:00:00');
      const currentDate = new Date();
      return Math.max(0, targetDate - currentDate);
    }  


      const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ inline:'start',behavior: 'smooth', block: 'end' });
    }
  };

  const [queryParameters] = useSearchParams()

  useEffect(()=>{
    const i = queryParameters.get("i")
    if(i){
      props.func();
      searchParams.delete('i');
      setSearchParams(searchParams);
    }      

  },[])



    useEffect(() => {
        const timerInterval = setInterval(() => {
          const remainingTime = calculateTimeRemaining();
          if (remainingTime <= 0) {
            clearInterval(timerInterval);
          }
          setTimer(remainingTime);
        }, 1000);
    
        return () => {
          clearInterval(timerInterval);
        };
      }, []);







  return (
    <>
    <div className="hero">
      <img src="/l2.jpg" className='background' />
      <img src="/l1.png" className='foreground' />
      <div className="grad"></div>
      <nav>
        <Link to={'/register'}>
        <img src="/Logo.png" className='logo' />
        </Link>
        <div className="navmenu">
          <div className='d-flex'>

          <div className='register' onClick={() =>props.func()} >
              <div className="navitems ">Register</div>
          </div>

          <div className="demo"  onClick={() => window.open('/model','_blank')}>
          <div className="navitems login">Demo</div>
          </div>

          </div>
        </div>
      </nav>
      <div className='titlecont'>
        <img src="/ccs.png" alt="" className='ccs' />
        <h6 className='presents'>PRESENTS</h6>
        <h1 className='title'  class="glitch" data-text="RAPTUS">RAPTUS</h1>
        <h1 className='tag'> LET THE HEIST BEGIN... </h1>
      </div>
      <div className="countdown">
        <span className="layers" style={{fontFamily:"macer",letterSpacing:"-5px"}}>
          {String(Math.floor(timer / (1000 * 60 * 60 * 24))).padStart(2, '0')+'d'} :{' '}
          {String(Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')+'h'} :{' '}
          {String(Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')+'m'} :{' '}
          {String(Math.floor((timer % (1000 * 60)) / 1000)).padStart(2, '0')+'s'}
        </span>
      </div>



        </div>
    </>
  )
}

export default Heropage
