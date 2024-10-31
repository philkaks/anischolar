// import React from 'react';

// const Template3 = ({cvData}) => {
//     // Destructure data from cvData
//     const { personalDetails, personalSummary, experience, education, skills, certifications } = cvData;

//     return (
//         <div
//             style={{
//                 width: "100%",
//                 padding: "1rem",
//                 backgroundColor: "#fff",
//                 border:"5px solid grey",
//             }}
//             id="pdf-content"
//         >
//             {/* HEADER SECTION */}
//             <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     gap: "1rem",
//                     marginBottom: "1rem",
//                 }}
//             >
//                 <div style={{ width: "100%", maxWidth: "300px" }}>
//                     <h4 style={{ color: "#333" }}>{personalDetails?.name}</h4>
//                     <p style={{ color: "#555", fontWeight: "bold" }}>
//                         {personalDetails?.email}
//                     </p>
//                     <p style={{ color: "#555" }}>
//                         <span style={{ color: "black", fontWeight: "bold" }}>Phone:</span>{" "}
//                         {personalDetails?.phone}
//                     </p>
//                 </div>
//             </div>

//             <hr />

//             {/* PERSONAL SUMMARY */}
//             <div style={{ margin: "1rem 0" }}>
//                 <h3
//                     style={{
//                         backgroundColor: "#f0f0f0",
//                         color: "#333",
//                         fontSize: "1.5rem",
//                         lineHeight: "1.75rem",
//                         padding: "0.25rem",
//                         marginBottom: "1rem",
//                     }}
//                 >
//                     Personal Summary
//                 </h3>
//                 <p style={{ color: "#000" }}>{personalSummary}</p>
//             </div>

//             {/* EXPERIENCE */}
//             <div>
//                 <h3
//                     style={{
//                         backgroundColor: "#f0f0f0",
//                         color: "#333",
//                         fontSize: "1.5rem",
//                         lineHeight: "1.75rem",
//                         padding: "0.25rem",
//                     }}
//                 >
//                     Experience
//                 </h3>
//                 <div style={{ marginBottom: "0.5rem" }}>
//                     <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", color: "#000" }}>
//                         {experience?.map((exp, index) => (
//                             <li key={index} style={{ marginBottom: "0.5rem" }}>
//                                 <p style={{ color: "#000", fontWeight: "bold" }}>
//                                     {exp.jobTitle} at {exp.company}
//                                 </p>
//                                 <p style={{ color: "#000" }}>{exp.duration}</p>
//                                 <ul>
//                                     {exp.duties?.map((duty, dutyIndex) => (
//                                         <li key={dutyIndex}>{duty}</li>
//                                     ))}
//                                 </ul>
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//             </div>

//             {/* EDUCATION */}
//             <div style={{ margin: "1rem 0" }}>
//                 <h3
//                     style={{
//                         backgroundColor: "#f0f0f0",
//                         color: "#333",
//                         fontSize: "1.5rem",
//                         lineHeight: "1.75rem",
//                         padding: "0.25rem",
//                     }}
//                 >
//                     Education
//                 </h3>
//                 {education?.map((edu, index) => (
//                     <div key={index} style={{ marginBottom: "0.5rem", padding: "0.5rem" }}>
//                         <p style={{ color: "#000", fontWeight: "bold" }}>
//                             {edu.degree}
//                         </p>
//                         <p style={{ color: "#000" }}>
//                             {edu.institution} ({edu.duration})
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* SKILLS */}
//             <div>
//                 <h3
//                     style={{
//                         backgroundColor: "#f0f0f0",
//                         color: "#333",
//                         fontSize: "1.5rem",
//                         lineHeight: "1.75rem",
//                         padding: "0.25rem",
//                     }}
//                 >
//                     Skills
//                 </h3>
//                 <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", color: "#000" }}>
//                     {skills?.map((skill, index) => (
//                         <li key={index} style={{ marginBottom: "0.5rem" }}>
//                             <p style={{ color: "#000" }}>{skill}</p>
//                         </li>
//                     ))}
//                 </ol>
//             </div>

//             {/* CERTIFICATIONS */}
//             <div>
//                 <h3
//                     style={{
//                         backgroundColor: "#f0f0f0",
//                         color: "#333",
//                         fontSize: "1.5rem",
//                         lineHeight: "1.75rem",
//                         padding: "0.25rem",
//                     }}
//                 >
//                     Certifications
//                 </h3>
//                 <ul style={{ listStyleType: "none", paddingLeft: "1.5rem", color: "#000" }}>
//                     {certifications?.map((cert, index) => (
//                         <li key={index} style={{ marginBottom: "0.5rem" }}>
//                             <p style={{ color: "#000" }}>
//                                 <a href={cert.link} target="_blank" rel="noopener noreferrer">
//                                     {cert.title}
//                                 </a>
//                             </p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Template3;


import React from 'react';

const Template3 = ({ cvData }) => {
    // Destructure data from cvData
    const { personalDetails, personalSummary, experience, education, skills, certifications } = cvData;

    return (
        <div
            style={{
                width: "100%",
                padding: "2rem",
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "#333",
            }}
            id="pdf-content"
        >
            {/* HEADER SECTION */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    borderBottom: "2px solid #f0f0f0",
                    paddingBottom: "1rem",
                }}
            >
                <div>
                    <h1 style={{ color: "#4b6982", fontSize: "2.2rem", margin: 0 }}>{personalDetails?.name}</h1>
                    <p style={{ color: "#555", fontWeight: "bold", margin: "0.5rem 0" }}>{personalDetails?.email}</p>
                    <p style={{ color: "#555", margin: 0 }}>
                        <strong>Phone:</strong> {personalDetails?.phone}
                    </p>
                </div>
            </div>

            {/* PERSONAL SUMMARY */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Personal Summary
                </h2>
                <p style={{ color: "#555", lineHeight: "1.6", marginTop: "0.5rem" }}>{personalSummary}</p>
            </div>

            {/* EXPERIENCE SECTION */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Experience
                </h2>
                <div>
                    {experience?.map((exp, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                backgroundColor: "#f9fafb",
                                borderRadius: "8px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333", margin: 0 }}>
                                {exp.jobTitle} at {exp.company}
                            </p>
                            <p style={{ color: "#777", fontSize: "0.9rem", margin: "0.5rem 0" }}>{exp.duration}</p>
                            <ul style={{ color: "#555", lineHeight: "1.6", marginLeft: "1.25rem" }}>
                                {exp.duties?.map((duty, dutyIndex) => (
                                    <li key={dutyIndex}>{duty}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* EDUCATION SECTION */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Education
                </h2>
                <div>
                    {education?.map((edu, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: "1.5rem",
                                padding: "1rem",
                                backgroundColor: "#f9fafb",
                                borderRadius: "8px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                            }}
                        >
                            <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333", margin: 0 }}>
                                {edu.degree}
                            </p>
                            <p style={{ color: "#777", fontSize: "0.9rem" }}>{edu.institution} ({edu.duration})</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SKILLS SECTION */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Skills
                </h2>
                <ul style={{ listStyleType: "circle", paddingLeft: "1.25rem", color: "#555", lineHeight: "1.6" }}>
                    {skills?.map((skill, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>{skill}</li>
                    ))}
                </ul>
            </div>

            {/* CERTIFICATIONS SECTION */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Certifications
                </h2>
                <ul style={{ listStyleType: "none", paddingLeft: "1.25rem", color: "#555", lineHeight: "1.6" }}>
                    {certifications?.map((cert, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: "#4b6982", textDecoration: "none" }}>
                                {cert.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Template3;
