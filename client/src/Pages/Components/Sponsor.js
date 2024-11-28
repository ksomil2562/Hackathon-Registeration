import React, { useState } from 'react'

const Sponsors = () => {
    return(
    <div className='sponsors'>
       <div className="sponsrow">
        <div className="flex-column">
            <h1 className='sponsorheads'>Title Sponsor</h1>
            <div className="sponsor ninja">
                <img src="./codingninja.png" alt="" />
                <p>Coding Ninjas is a leading platform providing comprehensive coding education and expert guidance to empower individuals with cutting-edge programming skills.</p>
            </div>
        </div>
       </div>

       <hr className='seperator'/>

       <div className="sponsrow">
        <div className="flex-column">
            <h3 className='sponsorhead'>Power Sponsor</h3>
            <div className='flex-wrap'>
                <div className="sponsor">
                    <img src="./airtel.png" alt="" />
                    <p>Airtel is a renowned telecommunications company known for its reliable connectivity solutions and innovative services that enhance communication experiences.</p>
                </div>
                <div className="sponsor">
                    <img src="./beeceptor.png" alt="" />
                    <p>Beeceptor is a powerful API mocking tool designed to help developers simulate and test APIs for seamless integration and efficient application development.</p>
                </div>
                {/* <div className="sponsor">
                    <img src="./beeceptor.png" alt="" />
                    <p>Beeceptor is a powerful API mocking tool designed to help developers simulate and test APIs for seamless integration and efficient application development.</p>
                </div> */}
            </div>
        </div>
       </div>

       <hr className='seperator'/>

       <div className="sponsrow">
        <div className="flex-wrap flex-column">
                <h3 className='sponsorhead'>Credential Sponsor</h3>
                <div className="sponsor">
                    <img src="./truscholar.png" alt="" />
                    <p>Truscholar is a trusted provider of comprehensive credentialing solutions, offering reliable and secure verification services for academic and professional qualifications.</p>
                </div>
            </div>
       </div>
        

       <hr className='seperator'/>


       <div className="sponsrow">
       <div className="flex-column w-90">
            <h3 className='sponsorhead'>Associate Sponsor</h3>
            <div className="sponsorcont">
                <div className="sponsor"><img src="./interviewcake.png" alt="" /><p>Interview Cake is a popular platform that offers in-depth resources and practice problems to help individuals excel in technical interviews and succeed in their coding careers.</p></div>
                <div className="sponsor"><img src="./xyz.png" alt="" /><p> .xyz is a domain extension provider that offers individuals and businesses distinctive online presence with memorable web addresses, providing creative branding opportunities.</p></div>
                <div className="sponsor"><img src="./taskade.png" alt="" /><p>Taskade is a collaborative productivity platform that simplifies task management and enhances team collaboration through its intuitive interface and powerful features.</p></div>
                <div className="sponsor"><img src="./cybrancee.png" alt="" /><p>Cyberancee is a trusted cybersecurity firm specializing in providing robust solutions and expertise to protect businesses and individuals from cyber threats.</p></div>
                <div className="sponsor"><img src="./axure.svg" alt="" /><p>Axure: Axure is a leading prototyping and wireframing tool used by designers to create interactive and dynamic prototypes, enabling seamless user experience design.</p></div>
                <div className="sponsor"><img src="./buddy.png" alt="" /><p>Interview Buddy is a valuable resource for interview practice and mock interviews, assisting individuals in sharpening their interview skills and boosting their confidence.</p></div>
            </div>
            
        </div>
       </div>
    </div>
    )
}

export default Sponsors
