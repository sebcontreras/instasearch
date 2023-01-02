import React from "react";

const Post = ({ img, date, keywords, imgAlt, link }) => {
    return (
        <div className="post">
            <div className="post-img-container">
                <img src={img} alt={imgAlt.original} />
            </div>
            <div className="post-info">
                <p><strong>{date.month} {date.day}, {date.year}</strong></p>
                <div className="go-to-post">
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        <p>Go to post</p>
                        <img src="/link_icon.png" alt="Link" ></img>
                    </a>
                </div>
                <p><strong>Keywords:</strong> {keywords && keywords.toString()}</p>
            </div>
        </div>
    );
}

export default Post;