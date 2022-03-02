const Post = ({ img, date, keywords, imgAlt, link }) => {
    return (
        <div className="post">
            <img src={img} alt={imgAlt} />
            <div className="post-info">
                <a href={link}>Go to Post</a>
                <p>Keywords: {keywords}</p>
            </div>
        </div>
    );
}

export default Post;