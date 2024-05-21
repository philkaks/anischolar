
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
//     import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";


//     const firebaseConfig = {
//       apiKey: "AIzaSyBLWh2yK95Ub9_5NwuF2iTmZ2HflkKBU2Y",
//       authDomain: "anisholar.firebaseapp.com",
//       databaseURL: "https://anisholar-default-rtdb.firebaseio.com",
//       projectId: "anisholar",
//       storageBucket: "anisholar.appspot.com",
//       messagingSenderId: "562532256946",
//       appId: "1:562532256946:web:dac38977534d9566d7cdab",
//       measurementId: "G-B7QFDXVD7Q"
//     };


//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore(app);


//     async function getBlogs() {
//       const blogCollection = collection(db, "blogs");
//       const snapshot = await getDocs(blogCollection);
//       const blogList = snapshot.docs.map(doc => doc.data());
//       console.log(blogList);
//       return blogList;

//     }

//     const blogs = getBlogs();

// blogs.then(blogList => {
      
//       const blogEntriesContainer = document.getElementById('blogEntries');
//       blogList.forEach(blog => {
//         const entry = document.createElement('div');
//         entry.classList.add('col-lg-8', 'entries');

//         entry.innerHTML = `
//         <article class="entry">
//           <div class="entry-img">
//             <img src="${blog.image}" alt="" class="img-fluid">
//           </div>
//           <h2 class="entry-title">
//             <a href="blog-single.html">${blog.title}</a>
//           </h2>
//           <div class="entry-meta">
//             <ul>
//               <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="#">${blog.author}</a></li>
//               <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="#"><time datetime="${blog.date}">${blog.date}</time></a></li>
//             </ul>
//           </div>
//           <div class="entry-content">
//             <p>${blog.teaser}</p>
//             <div class="read-more">
//               <a href="blog-single.html?title=${encodeURIComponent(blog.title)}&author=${encodeURIComponent(blog.author)}&date=${encodeURIComponent(blog.date)}&content=${encodeURIComponent(blog.body)}&teaser=${encodeURIComponent(blog.teaser)}&image=${encodeURIComponent(blog.image)}&quote=${encodeURIComponent(blog.blockquote)}" class="read-more">Read More</a>
//             </div>
//           </div>
//         </article>
//       `;
//         blogEntriesContainer.appendChild(entry);
//       });
//     });




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLWh2yK95Ub9_5NwuF2iTmZ2HflkKBU2Y",
  authDomain: "anisholar.firebaseapp.com",
  databaseURL: "https://anisholar-default-rtdb.firebaseio.com",
  projectId: "anisholar",
  storageBucket: "anisholar.appspot.com",
  messagingSenderId: "562532256946",
  appId: "1:562532256946:web:dac38977534d9566d7cdab",
  measurementId: "G-B7QFDXVD7Q"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to get blog entries from Firestore
async function getBlogs() {
  try {
    const blogCollection = collection(db, "blogs");
    const snapshot = await getDocs(blogCollection);
    const blogList = snapshot.docs.map(doc => doc.data());
    return blogList;
  } catch (error) {
    console.error('Error fetching blog entries:', error);
    return [];
  }
}

// Function to create blog entry HTML
function createBlogEntry(blog) {
  const entry = document.createElement('div');
  entry.classList.add('col-lg-8', 'entries');

  entry.innerHTML = `
    <article class="entry" data-aos="fade-up">
      <div class="entry-img">
        <img src="${blog.image}" alt="${blog.title}" class="img-fluid">
      </div>
      <h2 class="entry-title">
        <a href="blog-single.html?title=${encodeURIComponent(blog.title)}&author=${encodeURIComponent(blog.author)}&date=${encodeURIComponent(blog.date)}&content=${encodeURIComponent(blog.body)}&teaser=${encodeURIComponent(blog.teaser)}&image=${encodeURIComponent(blog.image)}&quote=${encodeURIComponent(blog.blockquote)}">${blog.title}</a>
      </h2>
      <div class="entry-meta">
        <ul>
          <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a href="#">${blog.author}</a></li>
          <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="#"><time datetime="${blog.date}">${new Date(blog.date).toDateString()}</time></a></li>
        </ul>
      </div>
      <div class="entry-content">
        <p>${blog.teaser}</p>
        <div class="read-more">
          <a href="blog-single.html?title=${encodeURIComponent(blog.title)}&author=${encodeURIComponent(blog.author)}&date=${encodeURIComponent(blog.date)}&content=${encodeURIComponent(blog.body)}&teaser=${encodeURIComponent(blog.teaser)}&image=${encodeURIComponent(blog.image)}&quote=${encodeURIComponent(blog.blockquote)}&paragraph2=${encodeURIComponent(blog.paragraph2)}&subtitle=${encodeURIComponent(blog.subtitle)}">Read More</a>
        </div>
      </div>
    </article>
  `;
  return entry;
}

// Function to display blog entries on the webpage
async function displayBlogs() {
  const loadingSpinner = document.getElementById('loadingSpinner');
  const blogEntriesContainer = document.getElementById('blogEntries');

  // Show the loading spinner
  loadingSpinner.style.display = 'block';

  const blogList = await getBlogs();

  // Hide the loading spinner
  loadingSpinner.style.display = 'none';

  blogList.forEach(blog => {
    const blogEntryElement = createBlogEntry(blog);
    blogEntriesContainer.appendChild(blogEntryElement);
  });
}

// Display blog entries on page load
document.addEventListener('DOMContentLoaded', displayBlogs);
