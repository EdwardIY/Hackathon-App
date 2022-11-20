    

export default function CommentList({ data }: any) {
    console.log(data);
                console.log(data.posts)
    return (
        <>
            {
                Object.keys(data.posts)             
                    .map((postId) => {
                        return <div key={Math.random() * 100000}>
                                <h4>{data.posts[postId as keyof typeof data.posts].username} - <span>{data.posts[postId].date.month}, {data.posts[postId].date.dayOfMonth} {data.posts[postId].date.year}</span></h4><p>{data.posts[postId].body}</p> <br></br>
                                </div>
                    })
            }



          
        </>
    )
}

