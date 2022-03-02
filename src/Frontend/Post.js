const Post = ({ img, date, keywords, link }) => {
    return ( 
        <div className="post">
            <h2>Post</h2>
            <a href={link}>Go to Post</a>
            <p>{keywords}</p>
        </div>
     );
}
 
export default Post;