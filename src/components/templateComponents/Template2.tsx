import React from 'react'
import dp from '../../assets/img/Vision.jpg';

function Template2({cvData}) {

  return (
    <div className='w-100' style={{border: "1px solid black"}}>
        <div className='row m-0'>
            <div className='col col-4 d-flex align-items-center pt-5' style={{backgroundColor: "#4b6982", flexDirection: "column"}}>
                <div className="media me-5">
                    <img className="rounded align-self-center" src={dp} alt='profile-pic'
                         style={{maxHeight:'180px',minHeight:"100px", width:'100px', background:'grey',padding:0}}/>
                </div>
                <div className="mt-3 font-weight-bold" style={{fontFamily:"Serif"}}>
                    <div className='' style={{color: "white", fontSize: "30px"}}>
                        {cvData.personalDetails.name}
                    </div>
                    <h5 className='pt-2' style={{color: "#adccc7", fontSize: "20px"}}>
                        Web Developer
                    </h5>
                </div>
                <div className="p-5 ms-4" style={{fontSize: "18px", display: "inline-block"}}>
                    <div className="px-2 mb-2" style={{backgroundColor: 'white', color: "black"}}>Email:</div>
                    <div style={{color: '#f7f7f7'}}>{cvData.personalDetails.email}</div>
                    <div className="px-2 mb-2 mt-2" style={{backgroundColor: 'white', color: "black"}}>Contact:</div>
                    <div style={{color: '#f7f7f7'}}>{cvData.personalDetails.phone}</div>
                </div>
            </div>
            <div className='col col-8'>
                <div>
                    <div className="text-justify mt-4">{cvData.personalSummary}</div>
                    <hr style={{height: "5px", backgroundColor: "#4b6982"}}/> 
                </div>
                <div className="" style={{fontFamily:"Serif"}}>
                    <div className="text-left bg-light mb-4" style={{color:"#4b6982"}}> 
                        <h3><b>Professional Experience</b></h3>
                    </div>
                    <div className="text-left" style={{fontSize:"18px"}}>
                        {cvData.experience.map((item, index) => (
                            <div key={index}>
                                <div className='mt-2'><h4>{item.company}</h4></div>
                                <div className='mt-2'><b>{item.jobTitle}</b></div>
                                <div className='mt-2 mb-3'>
                                    <div>Worked at {item.company} from {item.duration}.</div>
                                    <ul>
                                        {item.duties.map((duty, idx) => (
                                            <li key={idx}>{duty}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-100 mt-4"></div>
                    <hr style={{height:"5px", backgroundColor:"#4b6982"}}/>
                    <div className="bg-light text-left" style={{color:"#4b6982"}}>
                        <h3><b>Education</b></h3>
                    </div>
                    <div className="text-left" style={{fontSize:"18px"}}>
                        {cvData.education.map((item, index) => (
                            <div key={index}>
                                <b>{item.degree}</b>
                                <div>Studied at {item.institution} from {item.duration}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-100 mt-4"></div>
                    <hr style={{height:"5px", backgroundColor:"#4b6982"}}/>
                    <div className="bg-light text-left">
                        <h3 style={{color:"#4b6982"}}><b>Key Skills</b></h3>
                    </div>
                    <div className="text-left mb-4" style={{fontSize:"18px"}}>
                        <ul>
                            {cvData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Template2;
