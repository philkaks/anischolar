// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// // Import the functions you need from the SDKs you need
// // Import the functions you need from the SDKs you need

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBLWh2yK95Ub9_5NwuF2iTmZ2HflkKBU2Y",
//     authDomain: "anisholar.firebaseapp.com",
//     databaseURL: "https://anisholar-default-rtdb.firebaseio.com",
//     projectId: "anisholar",
//     storageBucket: "anisholar.appspot.com",
//     messagingSenderId: "562532256946",
//     appId: "1:562532256946:web:dac38977534d9566d7cdab",
//     measurementId: "G-B7QFDXVD7Q"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// //function to fetch data from the blog collection
// async function getBlogs() {
//     const blogCollection = collection(db, "blogs");
//     const snapshot = await getDocs(blogCollection);
//     const blogList = snapshot.docs.map(doc => doc.data());
//     return blogList;
// }

// export { getBlogs };
