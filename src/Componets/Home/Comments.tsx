import MakePost from './MakePost';
import GetPosts from './GetPosts';

import CommentCount from './CommentCount';
import CommentList from './ComentList';

import { useEffect, useState } from 'react'
import AOS from "aos";
import { useAuth } from '../../context/AuthContext';




export default function Comments() {

    const [allPosts, setAllPosts] = useState({})
    const [commentCount, setCommentCount] = useState(0);
    const [madeComment, setMadeComment] = useState(false);
    const { currentUser } = useAuth()
    
    let name: string = currentUser ? currentUser.displayName ? currentUser.displayName : '' : '';
    let email: string = currentUser ? currentUser.email : '';
    let post: string;
    
    async function handleSubmit(e:any) {
        e.preventDefault()
        console.log(name,post,email)
        await MakePost(name, post, email);
        loadAllPosts();
        setMadeComment(true)
    }

    async function loadAllPosts() {
        let data = await GetPosts()
        await setAllPosts(data)
        setCommentCount(Object.keys(data.posts).length)
    }

    useEffect(()=> {
        loadAllPosts()
    }, [])
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, [])

      console.log(currentUser)
    //   console.log(currentUser.displayName)
    return (
        <section  className="formContainer">
        <h2 data-aos-duration="1000" data-aos="fade-right" >Post your comments</h2>
            <form data-aos="fade-in" onSubmit={(e)=> handleSubmit(e)} className="postForm">
                <h3>Leave a comment</h3>
                <input
                    onChange={(e) => name = e.target.value}
                    type="text"
                    defaultValue={currentUser ? currentUser.displayName ? currentUser.displayName : '' : ''}
                    placeholder={currentUser ? currentUser.displayName ? currentUser.displayName : 'Enter your name' : 'Enter your name'}
                    required /> <br /> <br />
                
                <input
                    onChange={(e) => email = e.target.value}
                    type="email"
                    defaultValue={currentUser ? currentUser.email : ''}
                    placeholder={currentUser ? currentUser.email : 'Enter your email'} />
                    <br /> <br />
                
                <textarea onChange={(e) => post = e.target.value} name=""  placeholder="Your Comment" required></textarea> <br/> <br/>
                <button style={{opacity: madeComment ? '.3' : '1', cursor: madeComment ? 'initial' : 'pointer'}} disabled={madeComment ? true : false} className="button1">Post Comment</button>
            </form>
           <div data-aos="fade-in" className="commentsContainer">
                <CommentCount amount={commentCount} />
                {!allPosts || !Object.keys(allPosts).length ? <h4> No posts...</h4> : <CommentList data  = {allPosts} /> }      
        </div>
    </section>
    )
}