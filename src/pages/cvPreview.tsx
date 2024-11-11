import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Template1 from '../components/templateComponents/Template1';
import { dummyCV } from '../Config/constants';
import UpdateForm from '../components/templateComponents/UpdateForm';
import Template2 from '../components/templateComponents/Template2';
import Template3 from '../components/templateComponents/Template3';
import Swal from "sweetalert2";
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { useAuth } from '../authProvider';
import { db } from "../Config/firebase.config";
import { updateDoc, query, where, getDocs, collection, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Template4 from '../components/templateComponents/Template4';


const CVPreview: React.FC = () => {
    const { user, cvContent, setCvContent, template } = useAuth();
    const [isFormVisible, setIsFormVisible] = useState(false); // Step 1: State for visibility
    const [isEditing, setIsEditing] = useState(false);

    // Handle change for personal details, summary, etc.
    const handlePersonalDetailChange = (e) => {
        const { name, value } = e.target;
        setCvContent((prevData) => ({
            ...prevData,
            personalDetails: {
                ...prevData.personalDetails,
                [name]: value,
            },
        }));
    };

    const handleSummaryChange = (e) => {
        setCvContent((prevData) => ({
            ...prevData,
            personalSummary: e.target.value,
        }));
    };

    // Handle change for experience
    const handleExperienceChange = (index, field, value) => {
        const updatedExperience = [...cvContent.experience];
        updatedExperience[index] = { ...updatedExperience[index], [field]: value };
        setCvContent((prevData) => ({
            ...prevData,
            experience: updatedExperience,
        }));
    };

    // Handle change for education
    const handleEducationChange = (index, field, value) => {
        const updatedEducation = [...cvContent.education];
        updatedEducation[index] = { ...updatedEducation[index], [field]: value };
        setCvContent((prevData) => ({
            ...prevData,
            education: updatedEducation,
        }));
    };

    // Handle change for skills
    const handleSkillsChange = (index, value) => {
        const updatedSkills = [...cvContent.skills];
        updatedSkills[index] = value;
        setCvContent((prevData) => ({
            ...prevData,
            skills: updatedSkills,
        }));
    };

    // Handle change for certifications
    const handleCertificationsChange = (index, field, value) => {
        const updatedCertifications = [...cvContent.certifications];
        updatedCertifications[index] = { ...updatedCertifications[index], [field]: value };
        setCvContent((prevData) => ({
            ...prevData,
            certifications: updatedCertifications,
        }));
    };

    // Step 2: Function to toggle the form visibility
    const toggleUpdateForm = () => {
        setIsFormVisible((prev) => !prev);
    };

    const downloadComponentPDF = () => {
        //this function is called when the user clicks on the 'Save Resume' button.
        // it takes the 'div' element with id 'divToPrint' and then convert it into pdf format which is downloaded into the user's computer memory.
        const input = document.getElementById('divToPrint');
        if (input)
            html2canvas(input, { scrollY: -window.scrollY })
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF("p", "px", "a4");
                    var ratio = canvas.width / canvas.height;
                    var width = pdf.internal.pageSize.getWidth();
                    var height = width / ratio;
                    pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                    pdf.save("resume.pdf");
                })
                .then(() => {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application Successful",
                        showConfirmButton: false,
                        timer: 1000,
                    });
                })
                ;
    }

    useEffect(() => {
        console.log("updated");

        const userId = user?.uid;
        const fetchUserData = async () => {
            try {
                const userDataRef = collection(db, "userData");
                const q = query(userDataRef, where("userId", "==", userId));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setCvContent({ id: doc.id, ...doc.data() });
                } else {
                    console.log("No user data found for the specified userId.");
                    setCvContent(null);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, []);
    console.log(cvContent);

    const handleToggleEdit = () => {
        setIsEditing(!isEditing);
        console.log(cvContent);

    };

    const handleSubmit = async () => {
        const userId = user?.uid;


        try {
            const userDataRef = collection(db, "userData");
            const q = query(userDataRef, where("userId", "==", userId));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const docRef = querySnapshot.docs[0].ref;

                // Update Firestore document with updated cvData 
                await updateDoc(docRef, cvContent);
                alert("updated successfully!");
            } else {
                console.log("No document found with the specified userId.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    // useEffect to call handleSubmit when isEditing changes from true to false
    useEffect(() => {
        if (!isEditing) {
            handleSubmit();
        }
    }, [isEditing]);


    return (
        <div>
            <Header title="User Data" title2="" />
            <div className='container w-100'>
                <div className='mt-2 p-5 w-100'>
                    <div className='w-100 d-flex justify-content-center'>
                        <div className='w-100 pt-4 flex flex-col'>
                            <div className='d-flex w-100 justify-content-between'>
                                <div className='d-flex w-25 justify-content-between'>
                                    <button
                                        onClick={toggleUpdateForm} // Step 2: Button to toggle form visibility
                                        className="formbold-btn mr-4 pr-4"
                                    >
                                        {isFormVisible ? 'Hide Update ' : 'Show Update '}
                                    </button>

                                    <button
                                        onClick={handleToggleEdit} // Step 2: Button to toggle form visibility
                                        className="formbold-btn ml-4"
                                    >
                                        {isEditing ? "Save" : "Edit"}
                                    </button>
                                </div>


                                <button
                                    onClick={downloadComponentPDF} // Step 2: Button to toggle form visibility
                                    className="formbold-btn right-0"
                                >
                                    Download
                                </button>
                            </div>


                            {/* Step 3: Conditionally render the UpdateForm */}
                            {isFormVisible && (
                                <UpdateForm
                                    cvData={cvContent}
                                    setCvData={setCvContent}
                                    handlePersonalDetailChange={handlePersonalDetailChange}
                                    handleSummaryChange={handleSummaryChange}
                                    handleExperienceChange={handleExperienceChange}
                                    handleEducationChange={handleEducationChange}
                                    handleSkillsChange={handleSkillsChange}
                                    handleCertificationsChange={handleCertificationsChange}
                                />
                            )}

                            <div id='divToPrint' className='w-100 pt-2'>

                                {template && template === "Template 1" ?
                                    <Template1
                                        cvData={cvContent}
                                        setCvContent={setCvContent}
                                        isEditing={isEditing}
                                    /> : template === "Template 2" ?
                                        <Template2
                                            cvData={cvContent}
                                            setCvContent={setCvContent}
                                            isEditing={isEditing}
                                        />
                                        : template === "Template 3" ?
                                            <Template3
                                                cvData={cvContent}
                                                setCvContent={setCvContent}
                                                isEditing={isEditing}
                                            /> :
                                            <Template4
                                                cvData={cvContent}
                                                setCvContent={setCvContent}
                                                isEditing={isEditing}
                                            />
                                }
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVPreview;
