import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Activity from '../components/Activity'
import { useAuth } from '../../../authProvider'
import { getDocs, query, where, addDoc, collection } from "@firebase/firestore";
import { db } from '../../../Config/firebase.config'
import TopHeader from '../../../components/Header'
import Experience from '../components/Experience'
import Education from '../components/Education'

const Profile = () => {
    const { user, cvContent, setCvContent, template } = useAuth();
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = user?.uid;
        const fetchUserData = async () => {
            try {
                const userDataRef = collection(db, "userData");
                const q = query(userDataRef, where("userId", "==", userId));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setUserData({
                        ...doc.data(), // Merge the fetched data
                        id: doc.id, // Ensure the ID is also set
                    });
                } else {
                    console.log("No user data found for the specified userId.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUserData();
        }
    }, [user?.uid]);


    return (
        <>
            <TopHeader title="Profile" title2=""/>
            <div className="p-3 lg:p-5">
                <section className="grid gap-4 w-full lg:w-3/4">
                    <Header user={userData} authUser={user} onUpdate={(user) => setUser(user)} />
                    <About user={userData} authUser={user} onUpdate={(user) => setUser(user)} />
                    <Activity user={userData} authUser={user} id="234" />

                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h2 className="font-bold text-lg mb-2">Experience</h2>
                        <Experience user={userData} authUser={user}/>
                    </div>
                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h2 className="font-bold text-lg mb-2">Education</h2>
                        <Education user={userData} authUser={user}/>
                    </div>
                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h2 className="font-bold text-lg mb-2">Certificatons</h2>
                        <p>To do</p>
                    </div>

                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h2 className="font-bold text-lg mb-2">Skills</h2>
                        <p>To do</p>
                    </div>

                    <div className="bg-white rounded border border-gray-300 p-4">
                        <h2 className="font-bold text-lg mb-2">Interests</h2>
                        <p>To do </p>
                    </div>
                </section>
                {/* <div className="col-4 hidden lg:block lg:w-80 lg:h-max">
                Right side bar
            </div> */}
            </div>
        </>
    )
}

export default Profile
