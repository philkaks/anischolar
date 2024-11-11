import React from 'react';

const Template3 = ({ cvData, setCvContent, isEditing }) => {
    const { personalDetails, personalSummary, experience, education, skills, certifications } = cvData;

    const handleBlur = (
        field: keyof typeof cvData,
        value: string,
        subField: string | null = null,
        index: number | null = null,
        subIndex: number | null = null
    ) => {
        const updatedData = { ...cvData };

        if (subField && index !== null) {
            if (subIndex !== null) {
                updatedData[field][index][subField][subIndex] = value;
            } else {
                updatedData[field][index][subField] = value;
            }
        } else if (subField) {
            updatedData[field][subField] = value;
        } else {
            updatedData[field] = value;
        }

        setCvContent(updatedData);
    };

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
                    <h1
                        contentEditable={isEditing}
                        onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "name")}
                        style={{ color: "#4b6982", fontSize: "2.2rem", margin: 0 }}
                    >
                        {personalDetails?.name}
                    </h1>
                    <p
                        contentEditable={isEditing}
                        onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "email")}
                        style={{ color: "#555", fontWeight: "bold", margin: "0.5rem 0" }}
                    >
                        {personalDetails?.email}
                    </p>
                    <p
                        contentEditable={isEditing}
                        onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "phone")}
                        style={{ color: "#555", margin: 0 }}
                    >
                        <strong>Phone:</strong> {personalDetails?.phone}
                    </p>
                </div>
            </div>

            {/* PERSONAL SUMMARY */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Personal Summary
                </h2>
                <p
                    contentEditable={isEditing}
                    onBlur={(e) => handleBlur("personalSummary", e.target.innerText)}
                    style={{ color: "#555", lineHeight: "1.6", marginTop: "0.5rem" }}
                >
                    {personalSummary && personalSummary}
                </p>
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
                            <p
                                contentEditable={isEditing}
                                onBlur={(e) => handleBlur("experience", e.target.innerText, "jobTitle", index)}
                                style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333", margin: 0 }}
                            >
                                {exp.jobTitle} at {exp.company}
                            </p>
                            <p
                                contentEditable={isEditing}
                                onBlur={(e) => handleBlur("experience", e.target.innerText, "duration", index)}
                                style={{ color: "#777", fontSize: "0.9rem", margin: "0.5rem 0" }}
                            >
                                {exp.duration}
                            </p>
                            <ul style={{ color: "#555", lineHeight: "1.6", marginLeft: "1.25rem" }}>
                                {exp.duties?.map((duty, dutyIndex) => (
                                    <li
                                        key={dutyIndex}
                                        contentEditable={isEditing}
                                        onBlur={(e) => handleBlur("experience", e.target.innerText, "duties", index, dutyIndex)}
                                    >
                                        {duty}
                                    </li>
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
                            <p
                                contentEditable={isEditing}
                                onBlur={(e) => handleBlur("education", e.target.innerText, "degree", index)}
                                style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333", margin: 0 }}
                            >
                                {edu.degree}
                            </p>
                            <p
                                contentEditable={isEditing}
                                onBlur={(e) => handleBlur("education", e.target.innerText, "institution", index)}
                                style={{ color: "#777", fontSize: "0.9rem" }}
                            >
                                {edu.institution} ({edu.duration})
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SKILLS SECTION */}
            <div style={{ margin: "1.5rem 0" }}>
                <h2 style={{ color: "#4b6982", fontSize: "1.5rem", marginBottom: "0.75rem", borderBottom: "2px solid #e0e0e0" }}>
                    Skills
                </h2>
                <ul contentEditable={isEditing} style={{ listStyleType: "circle", paddingLeft: "1.25rem", color: "#555", lineHeight: "1.6" }}>
                    {skills?.map((skill, index) => (
                        <li
                            key={index}
                            onBlur={(e) => handleBlur("skills", e.target.innerText, null, index)}
                            style={{ marginBottom: "0.5rem" }}
                        >
                            {skill}
                        </li>
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
                            <span
                                contentEditable={isEditing}
                                onBlur={(e) => handleBlur("certifications", e.target.innerText, "title", index)}
                                style={{ color: "#4b6982" }}
                            >
                                {cert.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Template3;
