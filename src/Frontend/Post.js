const Post = ({ img, date, keywords, imgAlt, link }) => {
    return (
        <div className="post">
            <img src={img} alt={imgAlt.original} />
            <div className="post-info">
                <a href={link}>Go to Post</a>
                <p>Date: {date.month} {date.day}, {date.year}</p>
                <p>Keywords: {keywords}</p>
            </div>
        </div>
    );
}

export default Post;