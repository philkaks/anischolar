import React from 'react'
import dp from '../../assets/img/Vision.jpg';

// function Template2({cvData}) {

//   return (
//     <div className='w-100' style={{border: "1px solid black"}}>
//         <div className='row m-0'>
//             <div className='col col-4 d-flex align-items-center pt-5' style={{backgroundColor: "#4b6982", flexDirection: "column"}}>
//                 <div className="media me-5">
//                     <img className="rounded align-self-center" src={dp} alt='profile-pic'
//                          style={{maxHeight:'180px',minHeight:"100px", width:'100px', background:'grey',padding:0}}/>
//                 </div>
//                 <div className="mt-3 font-weight-bold" style={{fontFamily:"Serif"}}>
//                     <div className='' style={{color: "white", fontSize: "30px"}}>
//                         {cvData.personalDetails.name}
//                     </div>
//                     <h5 className='pt-2' style={{color: "#adccc7", fontSize: "20px"}}>
//                         Web Developer
//                     </h5>
//                 </div>
//                 <div className="p-5 ms-4" style={{fontSize: "18px", display: "inline-block"}}>
//                     <div className="px-2 mb-2" style={{backgroundColor: 'white', color: "black"}}>Email:</div>
//                     <div style={{color: '#f7f7f7'}}>{cvData.personalDetails.email}</div>
//                     <div className="px-2 mb-2 mt-2" style={{backgroundColor: 'white', color: "black"}}>Contact:</div>
//                     <div style={{color: '#f7f7f7'}}>{cvData.personalDetails.phone}</div>
//                 </div>
//             </div>
//             <div className='col col-8'>
//                 <div>
//                     <div className="text-justify mt-4">{cvData.personalSummary}</div>
//                     <hr style={{height: "5px", backgroundColor: "#4b6982"}}/> 
//                 </div>
//                 <div className="" style={{fontFamily:"Serif"}}>
//                     <div className="text-left bg-light mb-4" style={{color:"#4b6982"}}> 
//                         <h3><b>Professional Experience</b></h3>
//                     </div>
//                     <div className="text-left" style={{fontSize:"18px"}}>
//                         {cvData.experience.map((item, index) => (
//                             <div key={index}>
//                                 <div className='mt-2'><h4>{item.company}</h4></div>
//                                 <div className='mt-2'><b>{item.jobTitle}</b></div>
//                                 <div className='mt-2 mb-3'>
//                                     <div>Worked at {item.company} from {item.duration}.</div>
//                                     <ul>
//                                         {item.duties.map((duty, idx) => (
//                                             <li key={idx}>{duty}</li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="w-100 mt-4"></div>
//                     <hr style={{height:"5px", backgroundColor:"#4b6982"}}/>
//                     <div className="bg-light text-left" style={{color:"#4b6982"}}>
//                         <h3><b>Education</b></h3>
//                     </div>
//                     <div className="text-left" style={{fontSize:"18px"}}>
//                         {cvData.education.map((item, index) => (
//                             <div key={index}>
//                                 <b>{item.degree}</b>
//                                 <div>Studied at {item.institution} from {item.duration}</div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="w-100 mt-4"></div>
//                     <hr style={{height:"5px", backgroundColor:"#4b6982"}}/>
//                     <div className="bg-light text-left">
//                         <h3 style={{color:"#4b6982"}}><b>Key Skills</b></h3>
//                     </div>
//                     <div className="text-left mb-4" style={{fontSize:"18px"}}>
//                         <ul>
//                             {cvData.skills.map((skill, index) => (
//                                 <li key={index}>{skill}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Template2;

// function Template2({ cvData }) {

//   return (
//     <div className='w-100 shadow-lg' style={{ border: "1px solid #d3d3d3", borderRadius: "8px", overflow: "hidden" }}>
//       <div className='row m-0'>
//         {/* Sidebar Section */}
//         <div className='col-4 d-flex flex-column align-items-center pt-5' style={{ backgroundColor: "#3a506b", color: "#f8f9fa" }}>
//           <div className="media mb-4">
//             <img className="rounded-circle border border-3" src={dp} alt='profile-pic' 
//                  style={{ maxHeight: '180px', width: '150px', objectFit: 'cover' }} />
//           </div>
//           <div className="text-center font-weight-bold mb-3" style={{ fontFamily: "Serif" }}>
//             <h2 style={{ fontSize: "28px", margin: 0 }}>{cvData.personalDetails.name}</h2>
//             <h5 style={{ color: "#b3d4d8", fontSize: "18px", marginTop: "5px" }}>Web Developer</h5>
//           </div>
//           <div className="p-4 w-100" style={{ backgroundColor: "#3a506b", borderTop: "1px solid #6c757d" }}>
//             <div className="mb-3">
//               <div style={{ color: "#f8f9fa", fontSize: "16px" }}>Email:</div>
//               <div style={{ color: '#b3d4d8' }}>{cvData.personalDetails.email}</div>
//             </div>
//             <div className="mb-3">
//               <div style={{ color: "#f8f9fa", fontSize: "16px" }}>Contact:</div>
//               <div style={{ color: '#b3d4d8' }}>{cvData.personalDetails.phone}</div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className='col-8 p-5' style={{ backgroundColor: "#f4f6f9" }}>
//           {/* Personal Summary */}
//           <div className="mb-4">
//             <h4 style={{ color: "#3a506b" }}>Personal Summary</h4>
//             <p style={{ fontSize: "16px", color: "#6c757d" }}>{cvData.personalSummary}</p>
//           </div>

//           <hr style={{ border: "2px solid #3a506b" }} />

//           {/* Professional Experience */}
//           <div className="mb-4">
//             <h4 style={{ color: "#3a506b" }}>Professional Experience</h4>
//             {cvData.experience.map((item, index) => (
//               <div key={index} className="mb-3">
//                 <h5 style={{ fontSize: "18px", color: "#3a506b", margin: 0 }}>{item.company}</h5>
//                 <span style={{ fontSize: "16px", color: "#6c757d" }}>{item.duration}</span>
//                 <p style={{ fontSize: "17px", color: "#495057" }}><strong>{item.jobTitle}</strong></p>
//                 <ul style={{ color: "#6c757d" }}>
//                   {item.duties.map((duty, idx) => (
//                     <li key={idx} style={{ fontSize: "16px" }}>{duty}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <hr style={{ border: "2px solid #3a506b" }} />

//           {/* Education */}
//           <div className="mb-4">
//             <h4 style={{ color: "#3a506b" }}>Education</h4>
//             {cvData.education.map((item, index) => (
//               <div key={index} className="mb-3">
//                 <h5 style={{ fontSize: "18px", color: "#3a506b", margin: 0 }}>{item.degree}</h5>
//                 <span style={{ fontSize: "16px", color: "#6c757d" }}>at {item.institution}</span>
//                 <p style={{ color: "#6c757d" }}>{item.duration}</p>
//               </div>
//             ))}
//           </div>

//           <hr style={{ border: "2px solid #3a506b" }} />

//           {/* Key Skills */}
//           <div>
//             <h4 style={{ color: "#3a506b" }}>Key Skills</h4>
//             <ul style={{ color: "#6c757d", fontSize: "16px" }}>
//               {cvData.skills.map((skill, index) => (
//                 <li key={index}>{skill}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template2;


function Template2({ cvData }) {

  return (
    <div className='w-100 shadow-lg' style={{ border: "1px solid #d3d3d3", borderRadius: "10px", overflow: "hidden", background: "linear-gradient(135deg, #f8f9fa 40%, #e9ecef)" }}>
      <div className='row m-0'>
        
        {/* Sidebar Section */}
        <div className='col-4 d-flex flex-column align-items-center pt-5' style={{ backgroundColor: "#3a506b", color: "#f8f9fa" }}>
          <div className="media mb-4">
            <img className="rounded-circle border border-3" src={dp} alt='profile-pic' 
                 style={{ maxHeight: '180px', width: '150px', objectFit: 'cover', transition: 'transform 0.3s' }} />
          </div>
          <div className="text-center font-weight-bold mb-3" style={{ fontFamily: "Serif", transition: 'color 0.3s' }}>
            <h2 style={{ fontSize: "28px", margin: 0 }}>{cvData.personalDetails.name}</h2>
            <h5 style={{ color: "#b3d4d8", fontSize: "18px", marginTop: "5px" }}>Web Developer</h5>
          </div>
          <div className="p-4 w-100" style={{ backgroundColor: "#3a506b", borderTop: "1px solid #6c757d" }}>
            <div className="mb-3">
              <span style={{ fontWeight: "bold", color: "#f8f9fa" }}>Email:</span>
              <span style={{ color: "#b3d4d8", display: "block", marginTop: "5px" }}>{cvData.personalDetails.email}</span>
            </div>
            <div className="mb-3">
              <span style={{ fontWeight: "bold", color: "#f8f9fa" }}>Contact:</span>
              <span style={{ color: "#b3d4d8", display: "block", marginTop: "5px" }}>{cvData.personalDetails.phone}</span>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className='col-8 p-5' style={{ backgroundColor: "#f4f6f9" }}>
          
          {/* Personal Summary */}
          <div className="mb-4">
            <h4 style={{ color: "#3a506b" }}>Personal Summary</h4>
            <p style={{ fontSize: "16px", color: "#6c757d" }}>{cvData.personalSummary}</p>
          </div>

          <hr style={{ border: "2px solid #3a506b" }} />

          {/* Professional Experience */}
          <div className="mb-4">
            <h4 style={{ color: "#3a506b" }}>Professional Experience</h4>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "-10px", top: "0", height: "100%", width: "2px", backgroundColor: "#3a506b" }} />
              {cvData.experience.map((item, index) => (
                <div key={index} className="mb-3 pl-3" style={{ borderLeft: "3px solid #3a506b", paddingLeft: "15px" }}>
                  <h5 style={{ fontSize: "18px", color: "#3a506b", margin: 0 }}>{item.company}</h5>
                  <span style={{ fontSize: "16px", color: "#6c757d" }}>{item.duration}</span>
                  <p style={{ fontSize: "17px", color: "#495057" }}><strong>{item.jobTitle}</strong></p>
                  <ul style={{ color: "#6c757d" }}>
                    {item.duties.map((duty, idx) => (
                      <li key={idx} style={{ fontSize: "16px" }}>{duty}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <hr style={{ border: "2px solid #3a506b" }} />

          {/* Education */}
          <div className="mb-4">
            <h4 style={{ color: "#3a506b" }}>Education</h4>
            {cvData.education.map((item, index) => (
              <div key={index} className="mb-3 pl-3" style={{ borderLeft: "3px solid #3a506b", paddingLeft: "15px" }}>
                <h5 style={{ fontSize: "18px", color: "#3a506b", margin: 0 }}>{item.degree}</h5>
                <span style={{ fontSize: "16px", color: "#6c757d" }}>at {item.institution}</span>
                <p style={{ color: "#6c757d" }}>{item.duration}</p>
              </div>
            ))}
          </div>

          <hr style={{ border: "2px solid #3a506b" }} />

          {/* Key Skills */}
          <div>
            <h4 style={{ color: "#3a506b" }}>Key Skills</h4>
            <ul style={{ color: "#6c757d", fontSize: "16px" }}>
              {cvData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template2;
