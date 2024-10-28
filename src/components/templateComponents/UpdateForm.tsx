import React from 'react'

const UpdateForm = ({
    cvData,
    setCvData,
    handlePersonalDetailChange,
    handleSummaryChange,
    handleExperienceChange,
    handleEducationChange,
    handleSkillsChange,
    handleCertificationsChange
}) => {
  return (
    <div>
       {/* Form Section */}
       <div className="my-5 p-4 w-50" style={{border:"5px solid lightgrey"}}>
        <h4>Update CV Details</h4>
        <form>
          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">Name</label>
              <input
                type="text"
                name="name"
                value={cvData.personalDetails.name}
                onChange={handlePersonalDetailChange}
                className="formbold-form-input"
              />
            </div>
            <div>
              <label className="formbold-form-label">Email</label>
              <input
                type="email"
                name="email"
                value={cvData.personalDetails.email}
                onChange={handlePersonalDetailChange}
                className="formbold-form-input"
              />
            </div>
          </div>

          <div className="formbold-input-flex">
            <div>
              <label className="formbold-form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                value={cvData.personalDetails.phone}
                onChange={handlePersonalDetailChange}
                className="formbold-form-input"
              />
            </div>
          </div>

          <div>
            <label className="formbold-form-label">Personal Summary</label>
            <textarea
              name="personalSummary"
              value={cvData.personalSummary}
              onChange={handleSummaryChange}
              className="formbold-form-input"
            />
          </div>

          {/* Experience */}
          <h5>Experience</h5>
          {cvData.experience.map((exp, index) => (
            <div key={index}>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Job Title</label>
                  <input
                    type="text"
                    value={exp.jobTitle}
                    onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
                <div>
                  <label className="formbold-form-label">Company</label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Duration</label>
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          <h5>Education</h5>
          {cvData.education.map((edu, index) => (
            <div key={index}>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Degree</label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
                <div>
                  <label className="formbold-form-label">Institution</label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Duration</label>
                  <input
                    type="text"
                    value={edu.duration}
                    onChange={(e) => handleEducationChange(index, 'duration', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Skills */}
          <h5>Skills</h5>
          {cvData.skills.map((skill, index) => (
            <div className="form-group" key={index}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillsChange(index, e.target.value)}
                className="formbold-form-input"
              />
            </div>
          ))}

          {/* Certifications */}
          <h5>Certifications</h5>
          {cvData.certifications.map((cert, index) => (
            <div key={index}>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Title</label>
                  <input
                    type="text"
                    value={cert.title}
                    onChange={(e) => handleCertificationsChange(index, 'title', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
                <div>
                  <label className="formbold-form-label">Link</label>
                  <input
                    type="url"
                    value={cert.link}
                    onChange={(e) => handleCertificationsChange(index, 'link', e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  )
}

export default UpdateForm
