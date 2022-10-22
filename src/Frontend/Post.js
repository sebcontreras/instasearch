import React from "react";

const Post = ({ img, date, keywords, imgAlt, link }) => {
    return (
        <div className="post">
            <div className="post-img-container">
                <img src={img} alt={imgAlt.original} />
            </div>
            <div className="post-info">
                <a href={link} target="_blank" rel="noreferrer noopener">Go to Post</a>
                <p>Date: {date.month} {date.day}, {date.year}</p>
                <p>Keywords: {keywords && keywords.toString()}</p>
            </div>
        </div>
    );
}

export default Post;