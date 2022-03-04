import Post from './Post';

const PostsContainer = ({ posts }) => {
    return (
        <div className="posts-container">
            {posts.map(post => {
                return (
                    <Post img={post.img} date={post.date}
                        keywords={post.matched} link={post.link}
                        imgAlt={post.imgAlt} key={post.link}
                        id={post.link}
                        value={posts}
                    />
                )
            })}
        </div>
    );
}

export default PostsContainer;