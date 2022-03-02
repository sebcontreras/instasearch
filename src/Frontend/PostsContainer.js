import Post from './Post';

const PostsContainer = ({ posts }) => {
    const keywords = ["nose", "nfts", "teef"];
    return ( 
        <div className="posts-container">
            <h1>Results</h1>
            {posts.map(post => (
                <Post img={post.img} date={post.date} keywords={keywords} link={post.link} imgAlt={post.imgAlt.original} key={post.id}/>  
            ))}
        </div>
     );
}
 
export default PostsContainer;