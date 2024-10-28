import React from 'react';

const Template3 = ({cvData}) => {
    // Destructure data from cvData
    const { personalDetails, personalSummary, experience, education, skills, certifications } = cvData;

    return (
        <div
            style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#fff",
                border:"5px solid grey",
            }}
            id="pdf-content"
        >
            {/* HEADER SECTION */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                }}
            >
                <div style={{ width: "100%", maxWidth: "300px" }}>
                    <h4 style={{ color: "#333" }}>{personalDetails?.name}</h4>
                    <p style={{ color: "#555", fontWeight: "bold" }}>
                        {personalDetails?.email}
                    </p>
                    <p style={{ color: "#555" }}>
                        <span style={{ color: "black", fontWeight: "bold" }}>Phone:</span>{" "}
                        {personalDetails?.phone}
                    </p>
                </div>
            </div>

            <hr />

            {/* PERSONAL SUMMARY */}
            <div style={{ margin: "1rem 0" }}>
                <h3
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        fontSize: "1.5rem",
                        lineHeight: "1.75rem",
                        padding: "0.25rem",
                        marginBottom: "1rem",
                    }}
                >
                    Personal Summary
                </h3>
                <p style={{ color: "#000" }}>{personalSummary}</p>
            </div>

            {/* EXPERIENCE */}
            <div>
                <h3
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        fontSize: "1.5rem",
                        lineHeight: "1.75rem",
                        padding: "0.25rem",
                    }}
                >
                    Experience
                </h3>
                <div style={{ marginBottom: "0.5rem" }}>
                    <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", color: "#000" }}>
                        {experience?.map((exp, index) => (
                            <li key={index} style={{ marginBottom: "0.5rem" }}>
                                <p style={{ color: "#000", fontWeight: "bold" }}>
                                    {exp.jobTitle} at {exp.company}
                                </p>
                                <p style={{ color: "#000" }}>{exp.duration}</p>
                                <ul>
                                    {exp.duties?.map((duty, dutyIndex) => (
                                        <li key={dutyIndex}>{duty}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* EDUCATION */}
            <div style={{ margin: "1rem 0" }}>
                <h3
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        fontSize: "1.5rem",
                        lineHeight: "1.75rem",
                        padding: "0.25rem",
                    }}
                >
                    Education
                </h3>
                {education?.map((edu, index) => (
                    <div key={index} style={{ marginBottom: "0.5rem", padding: "0.5rem" }}>
                        <p style={{ color: "#000", fontWeight: "bold" }}>
                            {edu.degree}
                        </p>
                        <p style={{ color: "#000" }}>
                            {edu.institution} ({edu.duration})
                        </p>
                    </div>
                ))}
            </div>

            {/* SKILLS */}
            <div>
                <h3
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        fontSize: "1.5rem",
                        lineHeight: "1.75rem",
                        padding: "0.25rem",
                    }}
                >
                    Skills
                </h3>
                <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", color: "#000" }}>
                    {skills?.map((skill, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>
                            <p style={{ color: "#000" }}>{skill}</p>
                        </li>
                    ))}
                </ol>
            </div>

            {/* CERTIFICATIONS */}
            <div>
                <h3
                    style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        fontSize: "1.5rem",
                        lineHeight: "1.75rem",
                        padding: "0.25rem",
                    }}
                >
                    Certifications
                </h3>
                <ul style={{ listStyleType: "none", paddingLeft: "1.5rem", color: "#000" }}>
                    {certifications?.map((cert, index) => (
                        <li key={index} style={{ marginBottom: "0.5rem" }}>
                            <p style={{ color: "#000" }}>
                                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                    {cert.title}
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Template3;
