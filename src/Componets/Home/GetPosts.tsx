import { useEffect } from "react";

export default function GetPosts(){
    return fetch('https://college-blog-38818-default-rtdb.firebaseio.com/.json')
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                for (let key in data.posts) !data.posts[key] && delete data.posts[key];
                return data;
            }
            return {};
        })
        
        
}