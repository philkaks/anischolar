import React from 'react';

function Template1({ cvData, setCvContent, isEditing }) {

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
    <div className="my-5 p-5 w-100 shadow-sm" style={{ border: "5px solid #e0e0e0", backgroundColor: "#f8f9fa", borderRadius: "10px" }}>
      {/* Header Section */}
      <div className="d-flex align-items-center mb-4" style={{ height: "200px" }}>
        <div className="col-3 text-center">
          <img
            className="rounded-circle border border-3"
            src={cvData?.profilePicture?.url}
            alt="profile-pic"
            style={{ maxHeight: "150px", width: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="col-6 text-center font-weight-bold">
          <h1
            contentEditable={isEditing}
            onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "name")}
            style={{ color: "#333", fontSize: "45px", margin: "0" }}
          >
            {cvData?.personalDetails.name}
          </h1>
          <h5
            contentEditable={isEditing}
            onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "jobTitle")}
            style={{ color: "#6c757d", fontStyle: "italic" }}
          >
           {cvData?.jobTitle}
          </h5>
        </div>
        <div className="col-3 text-right" style={{ fontSize: "16px" }}>
          <p
            contentEditable={isEditing}
            onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "email")}
            className="m-0"
          >
            {cvData?.personalDetails.email}
          </p>
          <p
            contentEditable={isEditing}
            onBlur={(e) => handleBlur("personalDetails", e.target.innerText, "phone")}
            className="m-0"
          >
            {cvData?.personalDetails.phone}
          </p>
        </div>
      </div>

      <hr style={{ height: "4px", backgroundColor: "#6c757d" }} />

      {/* Personal Summary */}
      <div
        contentEditable={isEditing}
        onBlur={(e) => handleBlur("personalSummary", e.target.innerText)}
        className="mx-4 mb-4"
        style={{ fontSize: "18px", color: "#4a4a4a" }}
      >
        {cvData?.personalSummary}
      </div>

      {/* Professional Experience */}
      <div className="container">
        <div className="row mb-4">
          <div className="col-3 text-left" style={{ color: "#333" }}>
            <h4>Professional Experience</h4>
          </div>
          <div className="col-9 text-left" style={{ fontSize: "16px" }}>
            {cvData?.experience.map((item, index) => (
              <div key={index} className="mb-3">
                <div
                  contentEditable={isEditing}
                  onBlur={(e) => handleBlur("experience", e.target.innerText, "jobTitle", index)}
                  className="font-weight-bold"
                  style={{ fontSize: "18px", color: "#333" }}
                >
                  {item.jobTitle}
                </div>
                <div
                  contentEditable={isEditing}
                  onBlur={(e) => handleBlur("experience", e.target.innerText, "company", index)}
                  style={{ color: "#6c757d" }}
                >
                  Worked at {item.company} from {item.duration}
                </div>
                <ul className="pl-3">
                  {item.duties.map((duty, idx) => (
                    <li
                      key={idx}
                      contentEditable={isEditing}
                      onBlur={(e) => handleBlur("experience", e.target.innerText, "duties", index, idx)}
                      style={{ color: "#4a4a4a" }}
                    >
                      {duty}
                    </li>
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
            {cvData?.education.map((item, index) => (
              <div key={index} className="mb-2">
                <div
                  contentEditable={isEditing}
                  onBlur={(e) => handleBlur("education", e.target.innerText, "degree", index)}
                  className="font-weight-bold"
                  style={{ color: "#333" }}
                >
                  {item.degree}
                </div>
                <div
                  contentEditable={isEditing}
                  onBlur={(e) => handleBlur("education", e.target.innerText, "institution", index)}
                  style={{ color: "#6c757d" }}
                >
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
            <ul  contentEditable={isEditing} className="pl-3">
              {cvData?.skills.map((skill, index) => (
                <li
                  key={index}
                  onBlur={(e) => handleBlur("skills", e.target.innerText, null, index)}
                  style={{ color: "#4a4a4a" }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="row">
          <div className="col-3 text-left">
            <h4 style={{ color: "#4a4a4a", fontSize: "1.5rem", marginBottom: "0.75rem" }}>Certifications</h4>
          </div>
          <div className="col-9 text-left" style={{ fontSize: "16px" }}>
            <ul style={{ listStyleType: "none", paddingLeft: "1.25rem", color: "#555", lineHeight: "1.6" }}>
              {cvData?.certifications?.map((cert, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <span
                    contentEditable={isEditing}
                    onBlur={(e) => handleBlur("certifications", e.target.innerText, "title", index)}
                    style={{ color: "#6c757d", textDecoration: "none" }}
                  >
                    {cert.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
