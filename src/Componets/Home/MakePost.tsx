import GetPosts from "./GetPosts";

// import { initializeApp } from "firebase/app";
import app from "../../firebase";
import { getDatabase, ref, set } from "firebase/database";
// FireBase Setup
// const firebaseConfig = {
//     apiKey: "AIzaSyCFnKFOaeDVrWFcotnHGLqWKpABnCtqq08",
//     authDomain: "college-blog-38818.firebaseapp.com",
//     projectId: "college-blog-38818",
//     storageBucket: "college-blog-38818.appspot.com",
//     messagingSenderId: "821421394859",
//     appId: "1:821421394859:web:17934e0b4cf79d64c660ee",
//     measurementId: "G-5WWZ2RTHX5"
//   };
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const app = initializeApp(firebaseConfig);
    const db = getDatabase(app)
// 

export default async function MakePost(username: string, post: string, email: string) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']
  
  let id: number;
  let allPosts = await GetPosts();
  if (!Object.values(allPosts).length) id = 0;
  else id = +Object.keys(allPosts.posts).slice(-1) + 3;



  // let id = Object.keys(allPosts.posts).length

  // let id = 'post' + (Math.floor(Math.random() * 100000)).toString();
  
  const reference = ref(db, 'comments/posts/' + id)
  let date = {
    month: months[new Date().getMonth()],
    dayOfMonth: new Date().getDate(),
    year: new Date().getFullYear()
  }
  
    if(email) {
     await set(reference, {username,body: post, email,date})
    } 
    else {
      await set(reference, {username,body: post,date})
    }
    
  }