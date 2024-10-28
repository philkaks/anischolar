import React from 'react';
import dp from '../../assets/img/Vision.jpg';


function Template1({cvData}) {

  return (
    <div className="my-5 p-4 w-100" style={{border:"5px solid grey", backgroundColor:""}}>
        <div>
            <div className="row  m-0 d-flex align-items-center" style={{height:"200px"}}>
                <div className="col-2 text-center media" >
                    <img className="rounded align-self-center mx-auto " src={dp} alt='profile-pic'
                         style={{maxHeight:'180px', minHeight:"120px", width:'100px', background:'grey', padding:0}}/>
                </div>
                <div className="col-6 text-left font-weight-bold" style={{fontFamily:"Serif"}}>
                    <div className='d-flex justify-content-center' style={{color:"black", fontSize:"55px"}}>
                        {cvData.personalDetails.name}
                    </div>
                    <h5 className='d-flex justify-content-center'>Web Developer</h5>
                </div>
                <div className="col-4">
                    <div className='p-3' style={{fontSize:"18px", float:"left", display:"inline-block"}}>
                        <div>{cvData.personalDetails.email}</div>
                        <div>{cvData.personalDetails.phone}</div>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{height:"5px", backgroundColor:"black"}}/>
        <div className="text-justify mx-4">{cvData.personalSummary}</div>
        <hr style={{height:"5px", backgroundColor:"grey"}}/>

        <div className="container" style={{fontFamily:"Serif"}}>
            <div className="row">
                <div className="col-3 text-left" style={{color:"black"}}> <h4>Professional Experience</h4></div>
                <div className="col-9 text-left" style={{fontSize:"18px"}}>
                    {cvData.experience.map((item, index) => (
                        <div key={index}>
                            <div className='mt-2'><b>{item.jobTitle}</b></div>
                            <div className='mt-2'>
                                Worked at {item.company} from {item.duration}.
                            </div>
                            <div>
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
                <hr style={{height:"5px", backgroundColor:"black"}}/>
                <div className="col-3 text-left" style={{color:"black"}}><h4>Education</h4></div>
                <div className="col-9 text-left">
                    <div style={{fontSize:"18px"}}>
                        {cvData.education.map((item, index) => (
                            <div key={index}>
                                <b>{item.degree}</b>
                                <div>Studied at {item.institution} from {item.duration}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-100 mt-4"></div>
                <hr style={{height:"5px", backgroundColor:"black"}}/>
                <div className="col-3 text-left">
                    <h4 style={{color:"black"}}>Key Skills</h4>
                </div>
                <div className="col-9 text-left" style={{fontSize:"18px"}}>
                    <ul>
                        {cvData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Template1;
