import Post from './Post';

const PostsContainer = () => {
    return ( 
        <div className="postsContainer">
            <h1>Posts Container</h1>
            <Post />
            <Post />
            <Post />
        </div>
     );
}
 
export default PostsContainer;