import { useEffect } from "react";

export default function GetPosts(){
    return fetch('https://hackathon-store-default-rtdb.firebaseio.com/comments.json')
        .then((res) => res.json())
        .then((data) => {
            if (data) {
                for (let key in data.posts) !data.posts[key] && delete data.posts[key];
                return data;
            }
            return {};
        })
        
        
}