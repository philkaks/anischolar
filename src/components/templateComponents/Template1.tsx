// import React from 'react';
// import dp from '../../assets/img/Vision.jpg';


// function Template1({cvData}) {

//   return (
//     <div className="my-5 p-4 w-100" style={{border:"5px solid grey", backgroundColor:""}}>
//         <div>
//             <div className="row  m-0 d-flex align-items-center" style={{height:"200px"}}>
//                 <div className="col-2 text-center media" >
//                     <img className="rounded align-self-center mx-auto " src={dp} alt='profile-pic'
//                          style={{maxHeight:'180px', minHeight:"120px", width:'100px', background:'grey', padding:0}}/>
//                 </div>
//                 <div className="col-6 text-left font-weight-bold" style={{fontFamily:"Serif"}}>
//                     <div className='d-flex justify-content-center' style={{color:"black", fontSize:"55px"}}>
//                         {cvData.personalDetails.name}
//                     </div>
//                     <h5 className='d-flex justify-content-center'>Web Developer</h5>
//                 </div>
//                 <div className="col-4">
//                     <div className='p-3' style={{fontSize:"18px", float:"left", display:"inline-block"}}>
//                         <div>{cvData.personalDetails.email}</div>
//                         <div>{cvData.personalDetails.phone}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr style={{height:"5px", backgroundColor:"black"}}/>
//         <div className="text-justify mx-4">{cvData.personalSummary}</div>
//         <hr style={{height:"5px", backgroundColor:"grey"}}/>

//         <div className="container" style={{fontFamily:"Serif"}}>
//             <div className="row">
//                 <div className="col-3 text-left" style={{color:"black"}}> <h4>Professional Experience</h4></div>
//                 <div className="col-9 text-left" style={{fontSize:"18px"}}>
//                     {cvData.experience.map((item, index) => (
//                         <div key={index}>
//                             <div className='mt-2'><b>{item.jobTitle}</b></div>
//                             <div className='mt-2'>
//                                 Worked at {item.company} from {item.duration}.
//                             </div>
//                             <div>
//                                 <ul>
//                                     {item.duties.map((duty, idx) => (
//                                         <li key={idx}>{duty}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="w-100 mt-4"></div>
//                 <hr style={{height:"5px", backgroundColor:"black"}}/>
//                 <div className="col-3 text-left" style={{color:"black"}}><h4>Education</h4></div>
//                 <div className="col-9 text-left">
//                     <div style={{fontSize:"18px"}}>
//                         {cvData.education.map((item, index) => (
//                             <div key={index}>
//                                 <b>{item.degree}</b>
//                                 <div>Studied at {item.institution} from {item.duration}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="w-100 mt-4"></div>
//                 <hr style={{height:"5px", backgroundColor:"black"}}/>
//                 <div className="col-3 text-left">
//                     <h4 style={{color:"black"}}>Key Skills</h4>
//                 </div>
//                 <div className="col-9 text-left" style={{fontSize:"18px"}}>
//                     <ul>
//                         {cvData.skills.map((skill, index) => (
//                             <li key={index}>{skill}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Template1;

import React from 'react';
import dp from '../../assets/img/Vision.jpg';

function Template1({ cvData }) {
  return (
    <div className="my-5 p-5 w-100 shadow-sm" style={{ border: "5px solid #e0e0e0", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
      {/* Header Section */}
      <div className="d-flex align-items-center mb-4" style={{ height: "200px" }}>
        <div className="col-3 text-center">
          <img
            className="rounded-circle border border-3"
            src={dp}
            alt="profile-pic"
            style={{ maxHeight: "150px", width: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="col-6 text-center font-weight-bold">
          <h1 style={{ color: "#333", fontSize: "45px", margin: "0" }}>{cvData.personalDetails.name}</h1>
          <h5 style={{ color: "#6c757d", fontStyle: "italic" }}>Web Developer</h5>
        </div>
        <div className="col-3 text-right" style={{ fontSize: "16px" }}>
          <p className="m-0">{cvData.personalDetails.email}</p>
          <p className="m-0">{cvData.personalDetails.phone}</p>
        </div>
      </div>

      <hr style={{ height: "4px", backgroundColor: "#6c757d" }} />

      {/* Personal Summary */}
      <div className="mx-4 mb-4" style={{ fontSize: "18px", color: "#4a4a4a" }}>
        {cvData.personalSummary}
      </div>

      {/* Professional Experience */}
      <div className="container">
        <div className="row mb-4">
          <div className="col-3 text-left" style={{ color: "#333" }}>
            <h4>Professional Experience</h4>
          </div>
          <div className="col-9 text-left" style={{ fontSize: "16px" }}>
            {cvData.experience.map((item, index) => (
              <div key={index} className="mb-3">
                <div className="font-weight-bold" style={{ fontSize: "18px", color: "#333" }}>{item.jobTitle}</div>
                <div style={{ color: "#6c757d" }}>
                  Worked at {item.company} from {item.duration}
                </div>
                <ul className="pl-3">
                  {item.duties.map((duty, idx) => (
                    <li key={idx} style={{ color: "#4a4a4a" }}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ height: "4px", backgroundColor: "#6c757d" }} />

        {/* Education Section */}
        <div className="row mb-4">
          <div className="col-3 text-left" style={{ color: "#333" }}>
            <h4>Education</h4>
          </div>
          <div className="col-9 text-left" style={{ fontSize: "16px" }}>
            {cvData.education.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="font-weight-bold" style={{ color: "#333" }}>{item.degree}</div>
                <div style={{ color: "#6c757d" }}>
                  Studied at {item.institution} from {item.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ height: "4px", backgroundColor: "#6c757d" }} />

        {/* Key Skills Section */}
        <div className="row">
          <div className="col-3 text-left">
            <h4 style={{ color: "#333" }}>Key Skills</h4>
          </div>
          <div className="col-9 text-left" style={{ fontSize: "16px" }}>
            <ul className="pl-3">
              {cvData.skills.map((skill, index) => (
                <li key={index} style={{ color: "#4a4a4a" }}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
