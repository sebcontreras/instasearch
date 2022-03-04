import React from "react";

const Post = ({ img, date, keywords, imgAlt, link }) => {
    return (
        <React.Fragment>
            <div className="post">
                <img src={img} alt={imgAlt.original} />
                <div className="post-info">
                    <a href={link}>Go to Post</a>
                    <p>Date: {date.month} {date.day}, {date.year}</p>
                    <p>Keywords: {keywords}</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Post;